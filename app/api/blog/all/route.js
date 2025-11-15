import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Blog from '@/lib/models/Blog';
import '@/lib/models/Category';
import '@/lib/models/Tag';
import { withAuth } from '@/lib/auth-middleware';

// GET all blogs including drafts (protected - for admin)
async function handler(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status');
    const search = searchParams.get('search');

    const query = {};

    if (status) {
      query.status = status;
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { slug: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
      ];
    }

    const skip = (page - 1) * limit;

    const [posts, total] = await Promise.all([
      Blog.find(query)
        .populate('categories')
        .populate('tags')
        .sort({ updatedAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Blog.countDocuments(query),
    ]);

    return NextResponse.json({
      posts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching all blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}

export const GET = withAuth(handler);

