import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";
import BlogHeader from "@/components/blog/BlogHeader";

export const revalidate = 3600; // Revalidate every hour (ISR)

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://numispark.com";
const hiddenLocale = "fr";

const languageBlogPaths = {
  fr: `${siteUrl}/blog`,
  en: `${siteUrl}/en/blog`,
  de: `${siteUrl}/de/blog`,
};

export async function generateMetadata({ params, searchParams }) {
  try {
    const paramData = (await params) || { lang: hiddenLocale };
    const lang = paramData?.lang || hiddenLocale;
    const translations = await import(
      `@/public/locales/${lang}/metaData.json`
    ).catch(() => ({ metaData: {} }));

    const searchParamsData = await searchParams;
    const rawPage = searchParamsData?.page || "1";
    const pageNumber = Number.parseInt(rawPage, 10);
    const isValidPage = Number.isFinite(pageNumber) && pageNumber > 1;

    const baseBlogUrl = lang === hiddenLocale ? languageBlogPaths.fr : languageBlogPaths[lang] || languageBlogPaths.fr;
    const canonical = isValidPage ? `${baseBlogUrl}?page=${pageNumber}` : baseBlogUrl;

    const title = translations?.metaData?.blog?.title || "Blog";
    const description = translations?.metaData?.blog?.description || "Latest blog posts";
    const keywords = translations?.metaData?.blog?.keywords || "blog";

    return {
      title,
      description,
      keywords,
      robots: {
        index: !isValidPage,
        follow: true,
      },
      alternates: {
        canonical,
        languages: {
          fr: languageBlogPaths.fr,
          en: languageBlogPaths.en,
          de: languageBlogPaths.de,
          "x-default": languageBlogPaths.fr,
        },
      },
      openGraph: {
        title,
        description,
        url: canonical,
        type: "website",
      },
    };
  } catch (error) {
    return {
      title: "Blog",
      description: "Latest blog posts",
      robots: {
        index: false,
        follow: true,
      },
    };
  }
}

export default async function BlogPage({ params }) {
  try {
    const paramData = (await params) || { lang: 'fr' };
    const lang = paramData?.lang || 'fr';
    let posts = (await getAllPosts(lang)) || [];
    
    // SEO FIX: If no posts in current language, fallback to French posts
    // This prevents soft 404 errors for empty language versions
    let showingFallbackPosts = false;
    if (posts.length === 0 && lang !== 'fr') {
      posts = (await getAllPosts('fr')) || [];
      showingFallbackPosts = posts.length > 0;
    }

    const translationsModule = await import(
      `@/public/locales/${lang}/blog.json`
    ).catch(() => null);
    const blogTranslations = translationsModule?.default || translationsModule || {};
    const translate = (key, fallback) => blogTranslations[key] ?? fallback;

    const noPostsTitle = translate('noPostsFound', 'No blog posts found');
    const noPostsDescription = translate(
      'noPostsDescription',
      'Check back later for new content.'
    );
    const blogIntroTitle = translate('blogIntroTitle', 'Welcome to Our Blog');
    const blogIntroText = translate(
      'blogIntroText',
      'Discover insights, tips, and expert advice on web development, SEO, digital marketing, and more. Our team shares knowledge to help you grow your online presence.'
    );
    const fallbackNotice = translate(
      'fallbackNotice',
      'These articles are currently available in French. Translations coming soon!'
    );
    const postsCountTemplate =
      posts.length === 1
        ? translate('postsCountSingular', 'Showing {{count}} blog post')
        : translate('postsCountPlural', 'Showing {{count}} blog posts');
    const postsCountText = postsCountTemplate.replace(
      '{{count}}',
      posts.length.toString()
    );

    return (
      <div className="container mx-auto px-4 py-16">
        <BlogHeader lang={lang} />
        
        {/* SEO: Always show introductory content to avoid soft 404 */}
        <div className="max-w-3xl mx-auto mt-8 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            {blogIntroText}
          </p>
        </div>
        
        {/* Notice when showing French posts as fallback */}
        {showingFallbackPosts && (
          <div className="max-w-3xl mx-auto mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
            <p className="text-blue-700 text-sm">
              🌐 {fallbackNotice}
            </p>
          </div>
        )}

        {!posts || posts.length === 0 ? (
          <div className="text-center mt-12 py-8">
            <h2 className="text-2xl font-semibold">{noPostsTitle}</h2>
            <p className="mt-4 text-gray-600">{noPostsDescription}</p>
            {/* SEO: Add more meaningful content to avoid soft 404 */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                {translate('comingSoonTitle', 'Content Coming Soon')}
              </h3>
              <p className="text-gray-600">
                {translate('comingSoonText', 'We are working on creating valuable content for you. In the meantime, explore our services or contact us for any questions.')}
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} lang={showingFallbackPosts ? 'fr' : lang} />
              ))}
            </div>
            
            {/* SEO: Total posts count */}
            <div className="mt-8 text-center text-gray-600 text-sm">
              {postsCountText}
            </div>
          </>
        )}
      </div>
    );
  } catch (error) {
    console.error('Blog page error:', error);
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        {/* SEO: Provide meaningful content even on error to avoid soft 404 */}
        <div className="max-w-3xl mx-auto mt-8 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Discover insights, tips, and expert advice on web development, SEO, digital marketing, and more.
          </p>
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold">Impossible de charger les articles du blog</h2>
          <p className="mt-4 text-gray-600">Veuillez réessayer plus tard.</p>
          <div className="mt-8 p-6 bg-gray-50 rounded-lg max-w-2xl mx-auto">
            <p className="text-gray-600">
              En attendant, n&apos;hésitez pas à explorer nos services ou à nous contacter pour toute question.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
