"use client";
import Link from 'next/link';
import { useTranslation } from "react-i18next";
import { parseISO, format } from 'date-fns';
import Image from 'next/image';

export default function BlogCard({ post, lang }) {
  const { t } = useTranslation('blog');

  const blogPath = `/${lang}/blog/${post.slug}`;

  return (
    <Link href={blogPath} className="block h-full group">
      <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_15px_35px_rgba(15,23,42,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_25px_45px_rgba(59,130,246,0.25)] dark:bg-blue-200">
        {post.image && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              width={768}
              height={432}
              src={post.image}
              alt={post.imageAlt || post.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        )}

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-slate-500">
            <time dateTime={post.date}>{format(parseISO(post.date), 'MMMM d, yyyy')}</time>
            {post.readTime && <span>{post.readTime} min</span>}
          </div>

          {post.categories?.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {post.categories.slice(0, 2).map((cat) => (
                <span
                  key={cat._id || cat.slug}
                  className="rounded-full border border-blue-100/70 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
                >
                  {cat.name}
                </span>
              ))}
            </div>
          )}

          <h3 className="mt-4 text-2xl font-semibold text-slate-900 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-600">
            {post.title}
          </h3>

          <p className="mt-3 flex-1 text-sm text-slate-600 line-clamp-3 dark:text-gray-800">{post.excerpt}</p>

          {post.tags?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-slate-500">
              {post.tags.slice(0, 3).map((tag) => (
                <span key={tag._id || tag.slug} className="rounded-full bg-slate-100 px-2 py-1 text-slate-600">
                  #{tag.name}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(59,130,246,0.35)] transition-all duration-300 group-hover:shadow-[0_12px_24px_rgba(59,130,246,0.45)]">
              <span>{t('readMore')}</span>
              <span aria-hidden="true" className="text-base">
                →
              </span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}