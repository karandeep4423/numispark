import { notFound, redirect } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs, getRelatedPosts } from '@/lib/blog';
import BlogPostContent from '@/components/blog/BlogPostContent';
import BlogHeader from '@/components/blog/BlogHeader';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { parseISO, format } from 'date-fns';
import Image from 'next/image';

export const revalidate = 3600; // Revalidate every hour (ISR)

export async function generateStaticParams() {
  const posts = await getAllPostSlugs();
  return posts;
}

export async function generateMetadata({ params }) {
  const paramData = await params;
  const { lang, slug } = paramData;
  const post = await getPostBySlug(slug, lang);
  
  // Handle not found case
  if (post.notFound || post.error) {
    return {
      title: 'Post not found',
      description: 'The requested blog post could not be found',
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com';
  const postUrl = `${siteUrl}/${lang}/blog/${slug}`;
  
  // Use SEO fields if available, fallback to post data
  const metaTitle = post.seo?.metaTitle || post.title;
  const metaDescription = post.seo?.metaDescription || post.excerpt;
  const ogTitle = post.seo?.ogTitle || post.title;
  const ogDescription = post.seo?.ogDescription || post.excerpt;
  const ogImage = post.seo?.ogImage || post.image;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: post.seo?.keywords?.join(', '),
    authors: [{ name: post.author }],
    openGraph: {
      type: 'article',
      title: ogTitle,
      description: ogDescription,
      url: postUrl,
      images: ogImage ? [{ url: ogImage, alt: post.imageAlt || post.title }] : [],
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: ogImage ? [ogImage] : [],
    },
    alternates: {
      canonical: post.seo?.canonicalUrl || postUrl,
      languages: {
        'fr': `${siteUrl}/fr/blog/${slug}`,
        'en': `${siteUrl}/en/blog/${slug}`,
        'de': `${siteUrl}/de/blog/${slug}`,
      },
    },
  };
}

export default async function BlogPostPage({ params }) {
  const paramData = await params;
  const { lang, slug } = paramData;  
  
  // Redirect to 404 if slug is invalid
  if (!slug || typeof slug !== 'string') {
    return notFound();
  }
  
  const post = await getPostBySlug(slug, lang);
  
  // If the post doesn't exist for the selected language, redirect to the blog list
  if (post?.notFound) {
    return redirect(`/${lang}/blog`);
  }
  
  if (post.error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <BlogHeader lang={lang} />
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Erreur lors du chargement de la publication</h1>
          <p>Une erreur s'est produite lors du chargement de cet article. Veuillez réessayer plus tard.</p>
        </div>
      </div>
    );
  }
  
  // Get related posts
  const relatedPosts = await getRelatedPosts(post._id, lang, 3);
  
  // Use localized content if available, fallback to main content
  const contentToUse = post.localizedContent || post.content;

  // Generate JSON-LD structured data for SEO
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image ? [post.image] : [],
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      ...(post.authorBio && { description: post.authorBio }),
      ...(post.authorAvatar && { image: post.authorAvatar }),
    },
    publisher: {
      '@type': 'Organization',
      name: 'Numispark',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/${lang}/blog/${slug}`,
    },
  };
  
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* <BlogHeader lang={lang} /> */}
        
        <article className="max-w-4xl mx-auto ">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-gray-600 flex-wrap gap-2">
              <time dateTime={post.date}>{format(parseISO(post.date), 'MMMM d, yyyy')}</time>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
              {post.readTime && (
                <>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} min read</span>
                </>
              )}
              {post.categories && post.categories.length > 0 && (
                <div className="flex gap-2 ml-4">
                  {post.categories.map((cat) => (
                    <span
                      key={cat._id}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {cat.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {post.image && (
            <div className="mb-8 w-full overflow-hidden rounded-2xl bg-gray-100">
              <Image 
                width={100}
                height={100}
                src={post.image} 
                alt={post.imageAlt || post.title}
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '16 / 9' }}
              />
            </div>
          )}
          
          <BlogPostContent content={contentToUse} />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-8 pt-6 border-t">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag._id}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Info */}
          {post.authorBio && (
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-4">
                {post.authorAvatar && (
                  <img
                    src={post.authorAvatar}
                    alt={post.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                )}
                <div>
                  <h3 className="font-semibold text-lg">{post.author}</h3>
                  <p className="text-gray-600 mt-1">{post.authorBio}</p>
                </div>
              </div>
            </div>
          )}

          {/* Related Posts */}
          <RelatedPosts posts={relatedPosts} lang={lang} />
        </article>
      </div>
    </>
  );
}