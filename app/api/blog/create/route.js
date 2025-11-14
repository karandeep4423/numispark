import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Blog from '@/lib/models/Blog';
import Category from '@/lib/models/Category';
import Tag from '@/lib/models/Tag';
import { withAuth } from '@/lib/auth-middleware';
import slugify from 'slugify';

async function handler(request) {
  try {
    await dbConnect();

    const data = await request.json();

    // Generate slug if not provided
    if (!data.slug) {
      data.slug = slugify(data.title, { lower: true, strict: true });
    }

    // Check if slug already exists
    const existingPost = await Blog.findOne({ slug: data.slug });
    if (existingPost) {
      return NextResponse.json(
        { error: 'A post with this slug already exists' },
        { status: 400 }
      );
    }

    // Set published date if status is published
    if (data.status === 'published' && !data.publishedDate) {
      data.publishedDate = new Date();
    }

    // Create the blog post
    const blog = await Blog.create(data);

    // Update category and tag counts
    if (data.categories && data.categories.length > 0) {
      await Category.updateMany(
        { _id: { $in: data.categories } },
        { $inc: { postCount: 1 } }
      );
    }

    if (data.tags && data.tags.length > 0) {
      await Tag.updateMany(
        { _id: { $in: data.tags } },
        { $inc: { postCount: 1 } }
      );
    }

    const populatedBlog = await Blog.findById(blog._id)
      .populate('categories')
      .populate('tags')
      .lean();

    return NextResponse.json(
      { success: true, blog: populatedBlog },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create blog' },
      { status: 500 }
    );
  }
}

export const POST = withAuth(handler);

