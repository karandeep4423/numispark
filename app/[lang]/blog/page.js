// import { getAllPosts } from '@/lib/blog';
// import BlogCard from '@/components/blog/BlogCard';
// import BlogHeader from '@/components/blog/BlogHeader';

// export async function generateMetadata({ params}) {
//   // Load translations directly from JSON files
//   const paramData = await params;
//   const lang = paramData?.lang;
//   const translations = await import(
//     `@/public/locales/${lang}/metaData.json`
//   );

//   return {
//     title: translations.metaData['blog'].title,
//     description: translations.metaData['blog'].description,
//     keywords: translations.metaData['blog'].keywords,
//     canonical: translations.metaData['blog'].canonical
//   };
// }

// export default async function BlogPage({ params }) {
//   const paramData = await params;
//   const lang = paramData?.lang;
//   const posts = getAllPosts(lang);

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <BlogHeader lang={lang} />

//       {posts?.length === 0 ? (
//         <div className="text-center mt-12">
//           <h2 className="text-2xl font-semibold">No blog posts found</h2>
//           <p className="mt-4 text-gray-600">Check back later for new content.</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//           {posts?.map(post => (
//             <BlogCard key={post.slug} post={post} lang={lang} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";
import BlogHeader from "@/components/blog/BlogHeader";

export async function generateMetadata({ params }) {
  try {
    // const lang = params?.lang || 'fr'; // Fallback to 'en' if lang is undefined
    const paramData = (await params) || "fr";
    const lang = paramData?.lang;
    // Use dynamic import with error handling
    const translations = await import(
      `@/public/locales/${lang}/metaData.json`
    ).catch(() => ({ metaData: {} })); // Provide fallback if import fails

    // Safely access blog data with optional chaining and defaults
    return {
      title: translations?.metaData?.blog?.title || "Blog",
      description:
        translations?.metaData?.blog?.description || "Latest blog posts",
      keywords: translations?.metaData?.blog?.keywords || "blog",
      alternates: {
        canonical: translations?.metaData?.blog?.canonical || "/blog",
      },
    };
  } catch (error) {
    // Return fallback metadata if there's an error
    return {
      title: "Blog",
      description: "Latest blog posts",
    };
  }
}

export default async function BlogPage({ params }) {
  try {
    // const lang = params?.lang || "fr"; // Fallback to 'en' if lang is undefined
    const paramData = await params || "fr";
    const lang = paramData?.lang;
    // Wrap in try/catch to handle errors
    const posts = getAllPosts(lang) || [];

    return (
      <div className="container mx-auto px-4 py-16">
        <BlogHeader lang={lang} />

        {!posts || posts.length === 0 ? (
          <div className="text-center mt-12">
            <h2 className="text-2xl font-semibold">No blog posts found</h2>
            <p className="mt-4 text-gray-600">
              Check back later for new content.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} lang={lang} />
            ))}
          </div>
        )}
      </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold">Blog</h1>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Unable to load blog posts</h2>
          <p className="mt-4 text-gray-600">Please try again later.</p>
        </div>
      </div>
    );
  }
}
