"use client";
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import { useEffect, useState } from 'react';

export default function BlogPostContent({ content }) {
  const [mdxSource, setMdxSource] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const processMdx = async () => {
      try {
        if (!content) {
          setError('No content provided');
          return;
        }
        
        const source = await serialize(content, {
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        });
        
        setMdxSource(source);
      } catch (err) {
        console.error('Error processing MDX:', err);
        setError('Error processing content');
      }
    };
    
    processMdx();
  }, [content]);
  
  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }
  
  if (!mdxSource) {
    return <div>Loading content...</div>;
  }
  
  return (
    <div className="prose dark:prose-invert max-w-none">
      <MDXRemote {...mdxSource} />
    </div>
  );
}