// lib/blog.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(BLOG_DIR);
  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, '')
      }
    };
  });
}

export function getPostBySlug(slug, lang = 'en') {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // Extract language-specific content
  const translations = data.translations || {};
  const localizedData = translations[lang] || {};
  
  return {
    slug,
    content,
    ...data,
    title: localizedData.title || data.title,
    excerpt: localizedData.excerpt || data.excerpt,
    localizedContent: localizedData.content || content,
  };
}

export function getAllPosts(lang = 'en') {
  const fileNames = fs.readdirSync(BLOG_DIR);
  const allPostsData = fileNames
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      return getPostBySlug(slug, lang);
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  
  return allPostsData;
}

export function getPostsByCategory(category, lang = 'en') {
  return getAllPosts(lang).filter(post => 
    post.categories && post.categories.includes(category)
  );
}