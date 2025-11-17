import dbConnect from '@/lib/mongodb';
import Blog from '@/lib/models/Blog';

const supportedLanguages = ['fr', 'en', 'de'];
const hiddenLocale = 'fr';
const sanitizeUrl = (url) => url.replace(/\/{2,}/g, '/').replace(':/', '://');

const buildAlternates = (pathsByLang) => {
  if (Object.keys(pathsByLang).length <= 1) {
    return undefined;
  }
  return { languages: pathsByLang };
};

export default async function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com';
  const buildTimestamp = new Date();

  const buildLocalizedUrl = (lang, path = '') => {
    const normalizedPath = path || '';

    if (lang === hiddenLocale) {
      const suffix = normalizedPath
        ? (normalizedPath.startsWith('/') ? normalizedPath : `/${normalizedPath}`)
        : '/';
      return sanitizeUrl(`${siteUrl}${suffix}`);
    }

    const suffix = normalizedPath
      ? (normalizedPath.startsWith('/') ? normalizedPath : `/${normalizedPath}`)
      : '';

    return sanitizeUrl(`${siteUrl}/${lang}${suffix}`);
  };

  try {
    await dbConnect();

    // Get all published blog posts grouped by slug + language to avoid fake locales
    const posts = await Blog.find({ status: 'published' })
      .select('slug publishedDate updatedAt language')
      .lean();

    const postsBySlug = posts.reduce((acc, post) => {
      if (!acc.has(post.slug)) {
        acc.set(post.slug, []);
      }
      acc.get(post.slug).push(post);
      return acc;
    }, new Map());

    const blogUrls = Array.from(postsBySlug.entries()).map(([slug, localizedPosts]) => {
      const pathsByLang = {};
      let lastModified = null;

      localizedPosts.forEach((post) => {
        pathsByLang[post.language] = buildLocalizedUrl(post.language, `/blog/${post.slug}`);
        const candidateDate = post.updatedAt || post.publishedDate;
        if (!lastModified || (candidateDate && candidateDate > lastModified)) {
          lastModified = candidateDate;
        }
      });

      const canonicalUrl = pathsByLang.fr || Object.values(pathsByLang)[0];

      return {
        url: canonicalUrl,
        lastModified: lastModified || buildTimestamp,
        changeFrequency: 'weekly',
        priority: 0.8,
        ...(buildAlternates(pathsByLang) && { alternates: buildAlternates(pathsByLang) }),
      };
    });

    // Static pages generated only for available languages with alternates when multiple exist
    const staticPages = [
      { path: '', priority: 1, changeFrequency: 'monthly' },
      { path: '/a-propos-de-nous', priority: 0.7, changeFrequency: 'monthly' },
      { path: '/agence-automatisation-ia', priority: 0.7, changeFrequency: 'monthly' },
      { path: '/agence-creation-site-web', priority: 0.7, changeFrequency: 'monthly' },
      { path: '/blog', priority: 0.7, changeFrequency: 'daily' },
      { path: '/contactez-nous', priority: 0.7, changeFrequency: 'monthly' },
      { path: '/portfolio', priority: 0.7, changeFrequency: 'monthly' },
      { path: '/services', priority: 0.7, changeFrequency: 'monthly' },
    ];

    const staticUrls = staticPages.map(({ path, priority, changeFrequency }) => {
      const pathsByLang = supportedLanguages.reduce((acc, lang) => {
        acc[lang] = buildLocalizedUrl(lang, path);
        return acc;
      }, {});

      return {
        url: pathsByLang.fr || Object.values(pathsByLang)[0],
        lastModified: buildTimestamp,
        changeFrequency,
        priority,
        ...(buildAlternates(pathsByLang) && { alternates: buildAlternates(pathsByLang) }),
      };
    });

    return [...staticUrls, ...blogUrls];
  } catch (error) {
    console.error('Error generating sitemap:', error);

    const fallbackUrls = supportedLanguages.map((lang) => ({
      url: buildLocalizedUrl(lang),
      lastModified: buildTimestamp,
      changeFrequency: 'monthly',
      priority: 1.0,
    }));

    return fallbackUrls;
  }
}
