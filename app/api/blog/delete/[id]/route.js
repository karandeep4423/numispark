import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Blog from '@/lib/models/Blog';
import Category from '@/lib/models/Category';
import Tag from '@/lib/models/Tag';
import { withAuth } from '@/lib/auth-middleware';

async function handler(request, { params }) {
  try {
    await dbConnect();

    const { id } = await params;

    const blog = await Blog.findById(id);
    if (!blog) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Update category counts
    if (blog.categories && blog.categories.length > 0) {
      await Category.updateMany(
        { _id: { $in: blog.categories } },
        { $inc: { postCount: -1 } }
      );
    }

    // Update tag counts
    if (blog.tags && blog.tags.length > 0) {
      await Tag.updateMany(
        { _id: { $in: blog.tags } },
        { $inc: { postCount: -1 } }
      );
    }

    await Blog.findByIdAndDelete(id);

    return NextResponse.json({ success: true, message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog' },
      { status: 500 }
    );
  }
}

export const DELETE = withAuth(handler);

