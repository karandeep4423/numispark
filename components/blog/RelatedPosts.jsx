import Link from 'next/link';
import { format, parseISO } from 'date-fns';

export default function RelatedPosts({ posts, lang }) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 border-t pt-8">
      <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/${lang}/blog/${post.slug}`}
            className="block group"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform group-hover:shadow-lg">
              {post.image && (
                <div className="relative h-40 w-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                  {post.excerpt}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {format(parseISO(post.date), 'MMM d, yyyy')}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

