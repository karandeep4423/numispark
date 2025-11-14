import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Blog from '@/lib/models/Blog';
import Category from '@/lib/models/Category';
import Tag from '@/lib/models/Tag';
import { withAuth } from '@/lib/auth-middleware';

// GET dashboard statistics (protected)
async function handler() {
  try {
    await dbConnect();

    const [
      totalPosts,
      publishedPosts,
      draftPosts,
      scheduledPosts,
      totalCategories,
      totalTags,
      recentPosts,
      totalViews
    ] = await Promise.all([
      Blog.countDocuments(),
      Blog.countDocuments({ status: 'published' }),
      Blog.countDocuments({ status: 'draft' }),
      Blog.countDocuments({ status: 'scheduled' }),
      Category.countDocuments(),
      Tag.countDocuments(),
      Blog.find()
        .sort({ updatedAt: -1 })
        .limit(5)
        .populate('categories')
        .populate('tags')
        .lean(),
      Blog.aggregate([
        { $group: { _id: null, total: { $sum: '$views' } } }
      ])
    ]);

    return NextResponse.json({
      stats: {
        totalPosts,
        publishedPosts,
        draftPosts,
        scheduledPosts,
        totalCategories,
        totalTags,
        totalViews: totalViews[0]?.total || 0,
      },
      recentPosts,
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}

export const GET = withAuth(handler);

