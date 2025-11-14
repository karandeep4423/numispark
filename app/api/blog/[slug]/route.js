import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Blog from '@/lib/models/Blog';

// GET single blog by slug (public)
export async function GET(request, { params }) {
  try {
    await dbConnect();

    const { slug } = await params;
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang') || 'fr';

    const post = await Blog.findOne({ slug, status: 'published' })
      .populate('categories')
      .populate('tags')
      .populate('relatedPosts')
      .lean();

    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Increment views
    await Blog.updateOne({ slug }, { $inc: { views: 1 } });

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog' },
      { status: 500 }
    );
  }
}

