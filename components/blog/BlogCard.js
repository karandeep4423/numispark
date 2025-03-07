// // components/blog/BlogCard.js
// "use client";
// import Link from 'next/link';
// import { useTranslation } from "react-i18next";
// import { parseISO, format } from 'date-fns';

// export default function BlogCard({ post, lang }) {
//   const { t } = useTranslation(lang, 'blog');
  
//   return (
//     <Link href={`/${lang}/blog/${post.slug}`} className="block group">
//       <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform group-hover:shadow-lg">
//         {post.image && (
//           <div className="relative h-48 w-full">
//             <img 
//               src={post.image} 
//               alt={post.title}
//               className="w-full h-full object-cover transition-transform group-hover:scale-105"
//             />
//           </div>
//         )}
        
//         <div className="p-6">
//           <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
//             <time dateTime={post.date}>{format(parseISO(post.date), 'MMMM d, yyyy')}</time>
//           </div>
          
//           <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
//             {post.title}
//           </h3>
          
//           <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
          
//           <span className="text-blue-600 dark:text-blue-400 font-medium">
//             {t('readMore')} →
//           </span>
//         </div>
//       </div>
//     </Link>
//   );
// }

// components/blog/BlogCard.js
"use client";
import Link from 'next/link';
import { useTranslation } from "react-i18next";
import { parseISO, format } from 'date-fns';

export default function BlogCard({ post, lang }) {
  const { t } = useTranslation(lang, 'blog');
  
  // Ensure path uses the correct language prefix
  const blogPath = `/${lang}/blog/${post.slug}`;
  
  return (
    <Link href={blogPath} className="block group">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform group-hover:shadow-lg">
        {post.image && (
          <div className="relative h-48 w-full">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
            <time dateTime={post.date}>{format(parseISO(post.date), 'MMMM d, yyyy')}</time>
          </div>
          
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
            {post.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
          
          <span className="text-blue-600 dark:text-blue-400 font-medium">
            {t('readMore')} →
          </span>
        </div>
      </div>
    </Link>
  );
}