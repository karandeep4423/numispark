"use client";
import { useEffect, useState } from 'react';

export default function BlogPostContent({ content }) {
  const [error, setError] = useState(null);
  
  // Check if content is HTML (from MongoDB) or Markdown (legacy)
  const isHTML = content && (content.includes('<') || content.includes('</'));
  
  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }
  
  if (!content) {
    return <div>Loading content...</div>;
  }
  
  return (
    <div 
      className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 prose-a:text-blue-600 prose-img:rounded-lg prose-pre:bg-gray-900 prose-pre:text-gray-100"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
