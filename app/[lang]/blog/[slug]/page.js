// app/[lang]/blog/[slug]/page.js

import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
// import { useTranslation } from '@/lib/i18n-client';
import BlogPostContent from '@/components/blog/BlogPostContent';
import BlogHeader from '@/components/blog/BlogHeader';
import { parseISO, format } from 'date-fns';

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts;
}

// app/[lang]/blog/[slug]/page.js
export async function generateMetadata({ params }) {
  const { lang, slug } = params;
  const post = getPostBySlug(slug, lang);
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [{ url: post.image }] : [],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { lang, slug } = params;
  const post = getPostBySlug(slug, lang);
  
  return (
    <div className="container mx-auto px-4 py-16">
      <BlogHeader lang={lang} />
      
      <article className="max-w-4xl mx-auto mt-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600">
            <time dateTime={post.date}>{format(parseISO(post.date), 'MMMM d, yyyy')}</time>
            <span className="mx-2">•</span>
            <span>{post.author}</span>
          </div>
        </div>
        
        {post.image && (
          <div className="mb-8 relative h-96 w-full">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}
        
        <BlogPostContent content={post.localizedContent} />
      </article>
    </div>
  );
}