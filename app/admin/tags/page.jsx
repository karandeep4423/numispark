'use client';

import { useEffect, useState } from 'react';
import AdminNav from '@/components/admin/AdminNav';
import ProtectedRoute from '@/components/admin/ProtectedRoute';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';
import slugify from 'slugify';

export default function TagsPage() {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ language: 'fr', name: '', slug: '' });

  useEffect(() => {
    fetchTags();
  }, []);

  const fetchTags = async () => {
    try {
      const response = await fetch('/api/tags');
      const data = await response.json();
      setTags(data.tags || []);
    } catch (error) {
      console.error('Error fetching tags:', error);
      setTags([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const url = editingId ? `/api/tags/${editingId}` : '/api/tags';
    const method = editingId ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        fetchTags();
        resetForm();
      } else {
        const data = await response.json();
        alert(data.error || 'Failed to save tag');
      }
    } catch (error) {
      console.error('Error saving tag:', error);
      alert('Error saving tag');
    }
  };

  const handleEdit = (tag) => {
    setFormData(tag);
    setEditingId(tag._id);
    setShowForm(true);
  };

  const handleDelete = async (id, name) => {
    if (!confirm(`Delete tag "${name}"?`)) return;

    try {
      const response = await fetch(`/api/tags/${id}`, { method: 'DELETE' });
      if (response.ok) {
        fetchTags();
      }
    } catch (error) {
      console.error('Error deleting tag:', error);
    }
  };

  const resetForm = () => {
    setFormData({ language: 'fr', name: '', slug: '' });
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <ProtectedRoute>
      <AdminNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Tags</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <PlusIcon className="w-5 h-5 mr-2" />
            {showForm ? 'Cancel' : 'New Tag'}
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">
              {editingId ? 'Edit Tag' : 'New Tag'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Language *</label>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: 'fr', label: 'Français', flag: '🇫🇷' },
                    { value: 'en', label: 'English', flag: '🇬🇧' },
                    { value: 'de', label: 'Deutsch', flag: '🇩🇪' }
                  ].map((lang) => (
                    <label
                      key={lang.value}
                      className={`flex items-center justify-center p-3 border-2 rounded-lg cursor-pointer ${
                        formData.language === lang.value
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-300 hover:border-blue-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="language"
                        value={lang.value}
                        checked={formData.language === lang.value}
                        onChange={(e) => setFormData(prev => ({ ...prev, language: e.target.value }))}
                        className="sr-only"
                      />
                      <span className="text-xl mr-2">{lang.flag}</span>
                      <span className="font-medium">{lang.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    const name = e.target.value;
                    setFormData(prev => ({
                      ...prev,
                      name,
                      slug: slugify(name, { lower: true, strict: true })
                    }));
                  }}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Slug *</label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {editingId ? 'Update' : 'Create'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Language</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Slug</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Posts</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tags && tags.length > 0 ? (
                  tags.map((tag) => (
                    <tr key={tag._id}>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {tag.language === 'fr' && '🇫🇷 FR'}
                          {tag.language === 'en' && '🇬🇧 EN'}
                          {tag.language === 'de' && '🇩🇪 DE'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{tag.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{tag.slug}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{tag.postCount || 0}</td>
                      <td className="px-6 py-4 text-right text-sm">
                        <button
                          onClick={() => handleEdit(tag)}
                          className="text-blue-600 hover:text-blue-900 mr-4"
                        >
                          <PencilIcon className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(tag._id, tag.name)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <TrashIcon className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-8 text-center text-sm text-gray-500">
                      No tags yet. Create your first tag!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}

