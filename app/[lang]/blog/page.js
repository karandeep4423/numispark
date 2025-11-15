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

    const rawPage = searchParams?.page || "1";
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
    const posts = (await getAllPosts(lang)) || [];

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

        {!posts || posts.length === 0 ? (
          <div className="text-center mt-12">
            <h2 className="text-2xl font-semibold">{noPostsTitle}</h2>
            <p className="mt-4 text-gray-600">{noPostsDescription}</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} lang={lang} />
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
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold">Blog</h1>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Impossible de charger les articles du blog</h2>
          <p className="mt-4 text-gray-600">Veuillez réessayer plus tard.</p>
        </div>
      </div>
    );
  }
}
