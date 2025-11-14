import dbConnect from '@/lib/mongodb';
import Blog from '@/lib/models/Blog';

export default async function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com';
  
  try {
    await dbConnect();

    // Get all published blog posts
    const posts = await Blog.find({ status: 'published' })
      .select('slug publishedDate updatedAt')
      .lean();

    const languages = ['fr', 'en', 'de'];

    // Generate blog post URLs for all languages
    const blogUrls = [];
    posts.forEach((post) => {
      languages.forEach((lang) => {
        blogUrls.push({
          url: `${siteUrl}/${lang}/blog/${post.slug}`,
          lastModified: post.updatedAt || post.publishedDate || new Date(),
          changeFrequency: 'weekly',
          priority: 0.8,
        });
      });
    });

    // Static pages
    const staticPages = [
      '',
      '/a-propos-de-nous',
      '/agence-automatisation-ia',
      '/agence-creation-site-web',
      '/blog',
      '/contactez-nous',
      '/portfolio',
      '/services',
    ];

    const staticUrls = [];
    languages.forEach((lang) => {
      staticPages.forEach((page) => {
        staticUrls.push({
          url: `${siteUrl}/${lang}${page}`,
          lastModified: new Date(),
          changeFrequency: page === '/blog' ? 'daily' : 'monthly',
          priority: page === '' ? 1.0 : 0.7,
        });
      });
    });

    return [...staticUrls, ...blogUrls];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // Return basic sitemap if database fails
    const languages = ['fr', 'en', 'de'];
    const fallbackUrls = [];
    
    languages.forEach((lang) => {
      fallbackUrls.push({
        url: `${siteUrl}/${lang}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1.0,
      });
    });

    return fallbackUrls;
  }
}
