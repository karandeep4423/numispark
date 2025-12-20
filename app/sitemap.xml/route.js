import dbConnect from '@/lib/mongodb';
import Blog from '@/lib/models/Blog';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://numispark.com';

/**
 * Escape XML special characters
 */
const escapeXml = (str) => {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

/**
 * Format date to W3C Datetime format
 */
const formatDate = (date) => {
  if (!date) return new Date().toISOString();
  return new Date(date).toISOString();
};

/**
 * GET handler for sitemap.xml
 */
export async function GET() {
  const now = new Date();
  const lastmod = formatDate(now);

  // All pages with their priorities and change frequencies
  const pages = [
    // Homepage
    { url: `${siteUrl}`, priority: '1', changefreq: 'weekly' },
    
    // Main pages
    { url: `${siteUrl}/a-propos-de-nous`, priority: '0.8', changefreq: 'monthly' },
    { url: `${siteUrl}/contactez-nous`, priority: '0.8', changefreq: 'monthly' },
    { url: `${siteUrl}/portfolio`, priority: '0.8', changefreq: 'monthly' },
    { url: `${siteUrl}/services`, priority: '0.8', changefreq: 'monthly' },
    { url: `${siteUrl}/blog`, priority: '0.8', changefreq: 'daily' },
    
    // Service pages (high priority)
    { url: `${siteUrl}/seo`, priority: '0.9', changefreq: 'monthly' },
    { url: `${siteUrl}/agence-creation-site-web`, priority: '0.9', changefreq: 'monthly' },
    { url: `${siteUrl}/developpement-ecommerce`, priority: '0.9', changefreq: 'monthly' },
    { url: `${siteUrl}/developpement-saas`, priority: '0.9', changefreq: 'monthly' },
    { url: `${siteUrl}/developpement-application-mobile`, priority: '0.9', changefreq: 'monthly' },
    { url: `${siteUrl}/agence-automatisation-ia`, priority: '0.9', changefreq: 'monthly' },
    { url: `${siteUrl}/marketing-digital`, priority: '0.9', changefreq: 'monthly' },
    { url: `${siteUrl}/web-et-mobile-design`, priority: '0.8', changefreq: 'monthly' },
    { url: `${siteUrl}/design-logo-et-posts-reseaux-sociaux`, priority: '0.8', changefreq: 'monthly' },
    
    // Lead generation pages
    { url: `${siteUrl}/audit-seo-gratuit`, priority: '0.9', changefreq: 'monthly' },
    { url: `${siteUrl}/devis-gratuit`, priority: '0.9', changefreq: 'monthly' },
    
    // English pages
    { url: `${siteUrl}/en`, priority: '0.9', changefreq: 'weekly' },
    { url: `${siteUrl}/en/a-propos-de-nous`, priority: '0.7', changefreq: 'monthly' },
    { url: `${siteUrl}/en/contactez-nous`, priority: '0.7', changefreq: 'monthly' },
    { url: `${siteUrl}/en/services`, priority: '0.7', changefreq: 'monthly' },
    { url: `${siteUrl}/en/blog`, priority: '0.7', changefreq: 'daily' },
    { url: `${siteUrl}/en/seo`, priority: '0.8', changefreq: 'monthly' },
    { url: `${siteUrl}/en/agence-creation-site-web`, priority: '0.8', changefreq: 'monthly' },
    { url: `${siteUrl}/en/developpement-ecommerce`, priority: '0.8', changefreq: 'monthly' },
    { url: `${siteUrl}/en/developpement-application-mobile`, priority: '0.8', changefreq: 'monthly' },
    { url: `${siteUrl}/en/marketing-digital`, priority: '0.8', changefreq: 'monthly' },
    { url: `${siteUrl}/en/audit-seo-gratuit`, priority: '0.8', changefreq: 'monthly' },
    { url: `${siteUrl}/en/devis-gratuit`, priority: '0.8', changefreq: 'monthly' },
    
    // German pages
    { url: `${siteUrl}/de`, priority: '0.9', changefreq: 'weekly' },
    { url: `${siteUrl}/de/a-propos-de-nous`, priority: '0.7', changefreq: 'monthly' },
    { url: `${siteUrl}/de/contactez-nous`, priority: '0.7', changefreq: 'monthly' },
    { url: `${siteUrl}/de/services`, priority: '0.7', changefreq: 'monthly' },
    { url: `${siteUrl}/de/blog`, priority: '0.7', changefreq: 'daily' },
    { url: `${siteUrl}/de/seo`, priority: '0.8', changefreq: 'monthly' },
    { url: `${siteUrl}/de/agence-creation-site-web`, priority: '0.8', changefreq: 'monthly' },
    { url: `${siteUrl}/de/developpement-ecommerce`, priority: '0.8', changefreq: 'monthly' },
    { url: `${siteUrl}/de/developpement-application-mobile`, priority: '0.8', changefreq: 'monthly' },
    { url: `${siteUrl}/de/marketing-digital`, priority: '0.8', changefreq: 'monthly' },
    { url: `${siteUrl}/de/audit-seo-gratuit`, priority: '0.8', changefreq: 'monthly' },
    { url: `${siteUrl}/de/devis-gratuit`, priority: '0.8', changefreq: 'monthly' },
    
    // Legal pages (low priority)
    { url: `${siteUrl}/mentions-legales`, priority: '0.3', changefreq: 'yearly' },
    { url: `${siteUrl}/politique-de-confidentialite`, priority: '0.3', changefreq: 'yearly' },
  ];

  // Build static URLs XML
  let urlsXml = pages.map(page => `  <url>
    <loc>${escapeXml(page.url)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n');

  // Add blog posts from database
  try {
    await dbConnect();

    const posts = await Blog.find({ status: 'published' })
      .select('slug publishedDate updatedAt language')
      .lean();

    for (const post of posts) {
      const postLastmod = formatDate(post.updatedAt || post.publishedDate);
      const postUrl = post.language === 'fr' 
        ? `${siteUrl}/blog/${post.slug}`
        : `${siteUrl}/${post.language}/blog/${post.slug}`;

      urlsXml += `\n  <url>
    <loc>${escapeXml(postUrl)}</loc>
    <lastmod>${postLastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    }
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
  }

  // Build complete XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}
