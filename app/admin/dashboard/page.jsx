'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AdminNav from '@/components/admin/AdminNav';
import ProtectedRoute from '@/components/admin/ProtectedRoute';
import { format } from 'date-fns';

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/stats');
      const data = await response.json();
      setStats(data.stats || {});
      setRecentPosts(data.recentPosts || []);
    } catch (error) {
      console.error('Error fetching stats:', error);
      setStats({});
      setRecentPosts([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <AdminNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        ) : (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                title="Total Posts"
                value={stats?.totalPosts || 0}
                color="blue"
              />
              <StatCard
                title="Published"
                value={stats?.publishedPosts || 0}
                color="green"
              />
              <StatCard
                title="Drafts"
                value={stats?.draftPosts || 0}
                color="yellow"
              />
              <StatCard
                title="Total Views"
                value={stats?.totalViews || 0}
                color="purple"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Posts */}
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Recent Posts</h2>
                  <Link
                    href="/admin/posts"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View all
                  </Link>
                </div>
                <div className="space-y-4">
                  {recentPosts && recentPosts.length > 0 ? (
                    recentPosts.map((post) => (
                      <div key={post._id} className="border-b pb-3 last:border-0">
                        <h3 className="font-medium text-gray-900">{post.title}</h3>
                        <div className="flex items-center mt-1 text-sm text-gray-500">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            post.status === 'published' ? 'bg-green-100 text-green-800' :
                            post.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {post.status}
                          </span>
                          <span className="ml-3">
                            {format(new Date(post.updatedAt), 'MMM d, yyyy')}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm">No recent posts yet.</p>
                  )}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <Link
                    href="/admin/posts/new"
                    className="block w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Create New Post
                  </Link>
                  <Link
                    href="/admin/categories"
                    className="block w-full bg-gray-600 text-white text-center py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Manage Categories
                  </Link>
                  <Link
                    href="/admin/tags"
                    className="block w-full bg-gray-600 text-white text-center py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Manage Tags
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </ProtectedRoute>
  );
}

function StatCard({ title, value, color }) {
  const colors = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    purple: 'bg-purple-500',
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center">
        <div className={`${colors[color]} rounded-lg p-3 mr-4`}>
          <div className="text-white text-2xl font-bold">{value}</div>
        </div>
        <div>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>
    </div>
  );
}

