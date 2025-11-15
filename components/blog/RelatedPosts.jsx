import BlogCard from './BlogCard';

export default function RelatedPosts({ posts, lang }) {
  if (!posts || posts.length === 0) {
    return null;
  }

  const translationsModule = require(`@/public/locales/${lang}/blog.json`);
  const blogTranslations = translationsModule.default || translationsModule || {};
  const translate = (key, fallback) => blogTranslations[key] ?? fallback;

  const countLabelTemplate = posts.length === 1
    ? translate('relatedCountSingular', '{{count}} article')
    : translate('relatedCountPlural', '{{count}} articles');
  const countLabel = countLabelTemplate.replace('{{count}}', posts.length.toString());

  return (
    <div className="mt-16 border-t border-slate-100 pt-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">{translate('relatedEyebrow', 'More to explore')}</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">{translate('relatedPosts', 'Related Posts')}</h2>
        </div>
        <span className="text-sm text-slate-500">
          {countLabel}
        </span>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post._id} post={post} lang={lang} />
        ))}
      </div>
    </div>
  );
}

