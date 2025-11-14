"use client";
import Link from 'next/link';
import { useTranslation } from "react-i18next";
import { parseISO, format } from 'date-fns';
import Image from 'next/image';

export default function BlogCard({ post, lang }) {
  const { t } = useTranslation(lang, 'blog');
  
  // Ensure path uses the correct language prefix
  const blogPath = `/${lang}/blog/${post.slug}`;
  
  return (
    <Link href={blogPath} className="block group">
      <div className="bg-white dark:bg-blue-200 rounded-lg shadow-md overflow-hidden transition-transform group-hover:shadow-lg">
        {post.image && (
          <div className="relative h-48 w-full">
            <Image 
              width={100}
              height={100}
              src={post.image} 
              alt={post.imageAlt || post.title}
              className="w-full h-auto object-cover transition-transform group-hover:scale-105"
              loading="lazy"
            />
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-center justify-between text-sm text-gray-800 dark:text-gray-800 mb-2">
            <time dateTime={post.date}>{format(parseISO(post.date), 'MMMM d, yyyy')}</time>
            {post.readTime && (
              <span>{post.readTime} min read</span>
            )}
          </div>
          
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex gap-2 mb-2">
              {post.categories.slice(0, 2).map((cat) => (
                <span
                  key={cat._id || cat.slug}
                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                >
                  {cat.name}
                </span>
              ))}
            </div>
          )}
          
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-600">
            {post.title}
          </h3>
          
          <p className="text-gray-800 dark:text-gray-800 mb-4 line-clamp-3">{post.excerpt}</p>
          
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex gap-2 mb-4 flex-wrap">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag._id || tag.slug}
                  className="text-xs text-gray-800"
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          )}
          
          <span className="text-blue-600 dark:text-blue-600 font-medium">
            {t('readMore')} →
          </span>
        </div>
      </div>
    </Link>
  );
}