'use client';

import { useState, useEffect } from 'react';
import RichTextEditor from './RichTextEditor';
import slugify from 'slugify';

export default function BlogPostForm({ initialData, onSubmit, saving }) {
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  
  const [formData, setFormData] = useState({
    language: 'fr',
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author: {
      name: '',
      bio: '',
      avatar: '',
    },
    featuredImage: '',
    featuredImageAlt: '',
    categories: [],
    tags: [],
    seo: {
      metaTitle: '',
      metaDescription: '',
      focusKeyword: '',
      keywords: [],
      ogTitle: '',
      ogDescription: '',
      ogImage: '',
      canonicalUrl: '',
    },
    status: 'draft',
    featured: false,
    scheduledDate: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        categories: initialData.categories?.map(c => c._id) || [],
        tags: initialData.tags?.map(t => t._id) || [],
      });
    }
  }, [initialData]);

  // Fetch categories and tags when language changes
  useEffect(() => {
    fetchCategories(formData.language);
    fetchTags(formData.language);
  }, [formData.language]);

  const fetchCategories = async (language) => {
    try {
      const response = await fetch(`/api/categories?language=${language}`);
      const data = await response.json();
      setCategories(data.categories || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setCategories([]);
    }
  };

  const fetchTags = async (language) => {
    try {
      const response = await fetch(`/api/tags?language=${language}`);
      const data = await response.json();
      setTags(data.tags || []);
    } catch (error) {
      console.error('Error fetching tags:', error);
      setTags([]);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Auto-generate slug from title
    if (field === 'title' && !initialData) {
      const slug = slugify(value, { lower: true, strict: true });
      setFormData(prev => ({ ...prev, slug }));
    }
  };

  const handleNestedChange = (parent, field, value) => {
    setFormData(prev => ({
      ...prev,
      [parent]: { ...prev[parent], [field]: value }
    }));
  };

  const handleImageUpload = async (e, field) => {
    const file = e.target.files[0];
    if (!file) return;

    const formDataImg = new FormData();
    formDataImg.append('image', file);

    try {
      const response = await fetch('/api/upload/image', {
        method: 'POST',
        body: formDataImg,
      });

      const data = await response.json();
      if (response.ok) {
        if (field === 'featuredImage') {
          handleChange('featuredImage', data.image);
        } else if (field === 'authorAvatar') {
          handleNestedChange('author', 'avatar', data.image);
        }
      } else {
        alert(data.error || 'Failed to upload image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Language Selection */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">🌍 Post Language</h2>
        <p className="text-sm text-blue-700 mb-4">
          Select the language for this blog post. Each language has its own content, categories, tags, and SEO settings.
        </p>
        
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: 'fr', label: 'Français (FR)', flag: '🇫🇷' },
            { value: 'en', label: 'English (EN)', flag: '🇬🇧' },
            { value: 'de', label: 'Deutsch (DE)', flag: '🇩🇪' }
          ].map((lang) => (
            <label
              key={lang.value}
              className={`flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.language === lang.value
                  ? 'border-blue-600 bg-blue-100 shadow-md'
                  : 'border-gray-300 bg-white hover:border-blue-300'
              }`}
            >
              <input
                type="radio"
                name="language"
                value={lang.value}
                checked={formData.language === lang.value}
                onChange={(e) => handleChange('language', e.target.value)}
                className="sr-only"
              />
              <span className="text-2xl mr-2">{lang.flag}</span>
              <span className={`font-medium ${formData.language === lang.value ? 'text-blue-900' : 'text-gray-700'}`}>
                {lang.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Basic Info */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Slug *
            </label>
            <input
              type="text"
              value={formData.slug}
              onChange={(e) => handleChange('slug', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
            <p className="text-sm text-gray-500 mt-1">
              URL-friendly version. Can be the same across languages.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Excerpt *
            </label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => handleChange('excerpt', e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content *
            </label>
            <RichTextEditor
              content={formData.content}
              onChange={(content) => handleChange('content', content)}
            />
          </div>
        </div>
      </div>

      {/* Author Info */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Author Information</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Author Name *
            </label>
            <input
              type="text"
              value={formData.author.name}
              onChange={(e) => handleNestedChange('author', 'name', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Author Bio
            </label>
            <textarea
              value={formData.author.bio}
              onChange={(e) => handleNestedChange('author', 'bio', e.target.value)}
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Author Avatar
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 'authorAvatar')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            {formData.author.avatar && (
              <img src={formData.author.avatar} alt="Avatar" className="mt-2 w-20 h-20 rounded-full object-cover" />
            )}
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Featured Image</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 'featuredImage')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            {formData.featuredImage && (
              <img src={formData.featuredImage} alt="Featured" className="mt-2 w-full max-w-md rounded-lg" />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Alt Text (for SEO)
            </label>
            <input
              type="text"
              value={formData.featuredImageAlt}
              onChange={(e) => handleChange('featuredImageAlt', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Categories & Tags */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Categories & Tags</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Categories
            </label>
            <select
              multiple
              value={formData.categories}
              onChange={(e) => handleChange('categories', Array.from(e.target.selectedOptions, option => option.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              size={5}
            >
              {categories && categories.length > 0 ? (
                categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))
              ) : (
                <option disabled>No categories available. Create one first!</option>
              )}
            </select>
            <p className="text-sm text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>
            <select
              multiple
              value={formData.tags}
              onChange={(e) => handleChange('tags', Array.from(e.target.selectedOptions, option => option.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              size={5}
            >
              {tags && tags.length > 0 ? (
                tags.map((tag) => (
                  <option key={tag._id} value={tag._id}>
                    {tag.name}
                  </option>
                ))
              ) : (
                <option disabled>No tags available. Create one first!</option>
              )}
            </select>
            <p className="text-sm text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple</p>
          </div>
        </div>
      </div>

      {/* SEO Fields */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">SEO Settings</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Meta Title (Max 60 characters)
            </label>
            <input
              type="text"
              value={formData.seo.metaTitle}
              onChange={(e) => handleNestedChange('seo', 'metaTitle', e.target.value)}
              maxLength={60}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-gray-500 mt-1">{formData.seo.metaTitle?.length || 0}/60 characters</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Meta Description (Max 160 characters)
            </label>
            <textarea
              value={formData.seo.metaDescription}
              onChange={(e) => handleNestedChange('seo', 'metaDescription', e.target.value)}
              maxLength={160}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-gray-500 mt-1">{formData.seo.metaDescription?.length || 0}/160 characters</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Focus Keyword
            </label>
            <input
              type="text"
              value={formData.seo.focusKeyword}
              onChange={(e) => handleNestedChange('seo', 'focusKeyword', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Open Graph Title
            </label>
            <input
              type="text"
              value={formData.seo.ogTitle}
              onChange={(e) => handleNestedChange('seo', 'ogTitle', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Open Graph Description
            </label>
            <textarea
              value={formData.seo.ogDescription}
              onChange={(e) => handleNestedChange('seo', 'ogDescription', e.target.value)}
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Canonical URL
            </label>
            <input
              type="url"
              value={formData.seo.canonicalUrl}
              onChange={(e) => handleNestedChange('seo', 'canonicalUrl', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Publishing Options */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Publishing Options</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status *
            </label>
            <select
              value={formData.status}
              onChange={(e) => handleChange('status', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="scheduled">Scheduled</option>
            </select>
          </div>

          {formData.status === 'scheduled' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Scheduled Date
              </label>
              <input
                type="datetime-local"
                value={formData.scheduledDate}
                onChange={(e) => handleChange('scheduledDate', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <div className="flex items-center">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) => handleChange('featured', e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="featured" className="ml-2 block text-sm text-gray-700">
              Mark as featured post
            </label>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={saving}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {saving ? 'Saving...' : initialData ? 'Update Post' : 'Create Post'}
        </button>
      </div>
    </form>
  );
}

