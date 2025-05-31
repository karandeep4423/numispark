import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Use path.join for consistent path handling across environments
const BLOG_DIR = path.join(process.cwd(), 'public', 'content', 'blog');

export function getAllPostSlugs() {
  try {
    // Ensure directory exists before reading
    if (!fs.existsSync(BLOG_DIR)) {
      console.error(`Blog directory not found: ${BLOG_DIR}`);
      return [];
    }
    
    const fileNames = fs.readdirSync(BLOG_DIR);
    
    // Map file names to parameters object
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        return {
          lang: 'en', // Default language
          slug: fileName.replace(/\.md$/, '')
        };
      });
  } catch (error) {
    console.error("Error getting post slugs:", error);
    return [];
  }
}

export function getPostBySlug(slug, lang = 'en') {
  try {
    // Normalize slug to prevent path traversal
    const safeSlug = slug.replace(/[^\w-]/g, '');
    const fullPath = path.join(BLOG_DIR, `${safeSlug}.md`);
    
    // Check if file exists before reading
    if (!fs.existsSync(fullPath)) {
      console.error(`File not found: ${fullPath}`);
      return {
        slug: safeSlug,
        title: 'Post not found',
        excerpt: 'The requested post could not be found.',
        date: new Date().toISOString(),
        author: 'System',
        content: '',
        localizedContent: '',
        notFound: true
      };
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Extract language-specific content
    const translations = data.translations || {};
    const localizedData = translations[lang] || {};
    
    return {
      slug: safeSlug,
      content,
      ...data,
      title: localizedData.title || data.title,
      excerpt: localizedData.excerpt || data.excerpt,
      localizedContent: localizedData.content || content,
    };
  } catch (error) {
    return {
      slug,
      title: 'Error loading post',
      excerpt: 'There was an error loading this post.',
      date: new Date().toISOString(),
      author: 'System',
      content: '',
      localizedContent: '',
      error: true
    };
  }
}

export function getAllPosts(lang = 'en') {
  try {
    // Ensure directory exists before reading
    if (!fs.existsSync(BLOG_DIR)) {
      console.error(`Blog directory not found: ${BLOG_DIR}`);
      return [];
    }
    
    const fileNames = fs.readdirSync(BLOG_DIR);
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.md$/, '');
        return getPostBySlug(slug, lang);
      })
      .filter(post => !post.error && !post.notFound) // Filter out error posts
      .sort((a, b) => (a.date < b.date ? 1 : -1));
    
    return allPostsData;
  } catch (error) {
    return [];
  }
}

export function getPostsByCategory(category, lang = 'en') {
  return getAllPosts(lang).filter(post => 
    post.categories && post.categories.includes(category)
  );
}
