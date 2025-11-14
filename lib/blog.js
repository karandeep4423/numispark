import dbConnect from './mongodb';
import Blog from './models/Blog';
import './models/Category';
import './models/Tag';

/**
 * Get all blog post slugs for static generation
 */
export async function getAllPostSlugs() {
  try {
    await dbConnect();
    
    const posts = await Blog.find({ status: 'published' })
      .select('slug language')
      .lean();
    
    // Return array with language params for Next.js generateStaticParams
    const slugs = posts.map(post => ({
      lang: post.language,
      slug: post.slug
    }));
    
    return slugs;
  } catch (error) {
    console.error("Error getting post slugs:", error);
    return [];
  }
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug, lang = 'fr') {
  // This function is now synchronous wrapper that returns a promise
  // to maintain compatibility with existing code
  return getPostBySlugAsync(slug, lang);
}

async function getPostBySlugAsync(slug, lang = 'fr') {
  try {
    await dbConnect();
    
    const post = await Blog.findOne({ slug, language: lang, status: 'published' })
      .populate('categories')
      .populate('tags')
      .populate('relatedPosts')
      .lean();
    
    if (!post) {
      return {
        slug,
        title: 'Post not found',
        excerpt: 'The requested post could not be found.',
        date: new Date().toISOString(),
        author: { name: 'System' },
        content: '',
        notFound: true
      };
    }
    
    const postDate = post.publishedDate || post.createdAt;
    return {
      _id: post._id.toString(),
      slug: post.slug,
      language: post.language,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      date: postDate instanceof Date ? postDate.toISOString() : postDate,
      image: post.featuredImage,
      imageAlt: post.featuredImageAlt,
      author: post.author?.name || 'Unknown',
      authorBio: post.author?.bio,
      authorAvatar: post.author?.avatar,
      categories: (post.categories || []).map(cat => ({
        _id: cat._id?.toString(),
        name: cat.name,
        slug: cat.slug
      })),
      tags: (post.tags || []).map(tag => ({
        _id: tag._id?.toString(),
        name: tag.name,
        slug: tag.slug
      })),
      readTime: post.readTime,
      views: post.views,
      seo: post.seo || {},
      relatedPosts: (post.relatedPosts || []).map(rp => {
        const rpDate = rp.publishedDate || rp.createdAt;
        return {
          _id: rp._id?.toString(),
          slug: rp.slug,
          language: rp.language,
          title: rp.title,
          excerpt: rp.excerpt,
          image: rp.featuredImage,
          date: rpDate instanceof Date ? rpDate.toISOString() : rpDate,
        };
      }),
    };
  } catch (error) {
    console.error("Error getting post by slug:", error);
    return {
      slug,
      title: 'Error loading post',
      excerpt: 'There was an error loading this post.',
      date: new Date().toISOString(),
      author: { name: 'System' },
      content: '',
      error: true
    };
  }
}

/**
 * Get all published blog posts
 */
export function getAllPosts(lang = 'fr') {
  // Synchronous wrapper for compatibility
  return getAllPostsAsync(lang);
}

async function getAllPostsAsync(lang = 'fr') {
  try {
    await dbConnect();
    
    const posts = await Blog.find({ status: 'published', language: lang })
      .populate('categories')
      .populate('tags')
      .sort({ publishedDate: -1 })
      .lean();
    
    return posts.map(post => {
      const postDate = post.publishedDate || post.createdAt;
      return {
        _id: post._id.toString(),
        slug: post.slug,
        language: post.language,
        title: post.title,
        excerpt: post.excerpt,
        date: postDate instanceof Date ? postDate.toISOString() : postDate,
        image: post.featuredImage,
        imageAlt: post.featuredImageAlt,
        author: post.author?.name || 'Unknown',
        categories: (post.categories || []).map(cat => ({
          _id: cat._id?.toString(),
          name: cat.name,
          slug: cat.slug
        })),
        tags: (post.tags || []).map(tag => ({
          _id: tag._id?.toString(),
          name: tag.name,
          slug: tag.slug
        })),
        readTime: post.readTime,
        views: post.views,
        featured: post.featured,
      };
    });
  } catch (error) {
    console.error("Error getting all posts:", error);
    return [];
  }
}

/**
 * Get posts by category
 */
export async function getPostsByCategory(category, lang = 'fr') {
  try {
    await dbConnect();
    
    const posts = await Blog.find({ 
      status: 'published',
      language: lang,
      categories: category 
    })
      .populate('categories')
      .populate('tags')
      .sort({ publishedDate: -1 })
      .lean();
    
    return posts.map(post => {
      const postDate = post.publishedDate || post.createdAt;
      return {
        _id: post._id.toString(),
        slug: post.slug,
        language: post.language,
        title: post.title,
        excerpt: post.excerpt,
        date: postDate instanceof Date ? postDate.toISOString() : postDate,
        image: post.featuredImage,
        author: post.author?.name || 'Unknown',
        categories: (post.categories || []).map(cat => ({
          _id: cat._id?.toString(),
          name: cat.name,
          slug: cat.slug
        })),
        tags: (post.tags || []).map(tag => ({
          _id: tag._id?.toString(),
          name: tag.name,
          slug: tag.slug
        })),
        readTime: post.readTime,
      };
    });
  } catch (error) {
    console.error("Error getting posts by category:", error);
    return [];
  }
}

/**
 * Get related posts based on categories and tags
 */
export async function getRelatedPosts(postId, lang = 'fr', limit = 3) {
  try {
    await dbConnect();
    
    const currentPost = await Blog.findById(postId).lean();
    if (!currentPost) return [];
    
    // Find posts with matching categories or tags in the same language
    const relatedPosts = await Blog.find({
      _id: { $ne: postId },
      status: 'published',
      language: lang,
      $or: [
        { categories: { $in: currentPost.categories } },
        { tags: { $in: currentPost.tags } }
      ]
    })
      .populate('categories')
      .populate('tags')
      .limit(limit)
      .lean();
    
    return relatedPosts.map(post => {
      const postDate = post.publishedDate || post.createdAt;
      return {
        _id: post._id.toString(),
        slug: post.slug,
        language: post.language,
        title: post.title,
        excerpt: post.excerpt,
        date: postDate instanceof Date ? postDate.toISOString() : postDate,
        image: post.featuredImage,
        author: post.author?.name || 'Unknown',
        categories: (post.categories || []).map(cat => ({
          _id: cat._id?.toString(),
          name: cat.name,
          slug: cat.slug
        })),
        tags: (post.tags || []).map(tag => ({
          _id: tag._id?.toString(),
          name: tag.name,
          slug: tag.slug
        })),
      };
    });
  } catch (error) {
    console.error("Error getting related posts:", error);
    return [];
  }
}

/**
 * Get languages that have a published blog post for a given slug.
 * Used for building accurate alternates.languages metadata.
 */
export async function getAvailableLanguagesForSlug(slug) {
  try {
    await dbConnect();

    const posts = await Blog.find({ slug, status: 'published' })
      .select('language slug')
      .lean();

    return posts.map((post) => post.language);
  } catch (error) {
    console.error('Error getting available languages for slug:', error);
    return [];
  }
}
