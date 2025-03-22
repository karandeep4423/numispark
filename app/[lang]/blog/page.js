import { getAllPosts } from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';
import BlogHeader from '@/components/blog/BlogHeader';

export default async function BlogPage({ params }) {
  const paramData = await params;
  const lang = paramData?.lang;
  const posts = getAllPosts(lang);
  
  return (
    <div className="container mx-auto px-4 py-16">
      <BlogHeader lang={lang} />
      
      {posts.length === 0 ? (
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold">No blog posts found</h2>
          <p className="mt-4 text-gray-600">Check back later for new content.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {posts.map(post => (
            <BlogCard key={post.slug} post={post} lang={lang} />
          ))}
        </div>
      )}
    </div>
  );
}