'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminNav from '@/components/admin/AdminNav';
import ProtectedRoute from '@/components/admin/ProtectedRoute';
import BlogPostForm from '@/components/admin/BlogPostForm';

export default function NewPostPage() {
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  const handleSubmit = async (data) => {
    setSaving(true);
    try {
      const response = await fetch('/api/blog/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Post created successfully!');
        router.push('/admin/posts');
      } else {
        alert(result.error || 'Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Error creating post');
    } finally {
      setSaving(false);
    }
  };

  return (
    <ProtectedRoute>
      <AdminNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Create New Post</h1>
        <BlogPostForm onSubmit={handleSubmit} saving={saving} />
      </div>
    </ProtectedRoute>
  );
}

