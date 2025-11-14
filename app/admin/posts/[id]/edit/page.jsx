'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import AdminNav from '@/components/admin/AdminNav';
import ProtectedRoute from '@/components/admin/ProtectedRoute';
import BlogPostForm from '@/components/admin/BlogPostForm';

export default function EditPostPage({ params }) {
  const resolvedParams = use(params);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/blog/all?limit=1000`);
      const data = await response.json();
      const foundPost = data.posts.find(p => p._id === resolvedParams.id);
      setPost(foundPost);
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (data) => {
    setSaving(true);
    try {
      const response = await fetch(`/api/blog/update/${resolvedParams.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Post updated successfully!');
        router.push('/admin/posts');
      } else {
        alert(result.error || 'Failed to update post');
      }
    } catch (error) {
      console.error('Error updating post:', error);
      alert('Error updating post');
    } finally {
      setSaving(false);
    }
  };

  return (
    <ProtectedRoute>
      <AdminNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Edit Post</h1>
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        ) : post ? (
          <BlogPostForm initialData={post} onSubmit={handleSubmit} saving={saving} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">Post not found</p>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}

