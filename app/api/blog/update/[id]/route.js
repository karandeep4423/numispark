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
    const data = await request.json();

    // Find the existing post
    const existingPost = await Blog.findById(id);
    if (!existingPost) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // If slug is being changed, check it doesn't conflict
    if (data.slug && data.slug !== existingPost.slug) {
      const slugExists = await Blog.findOne({ slug: data.slug, _id: { $ne: id } });
      if (slugExists) {
        return NextResponse.json(
          { error: 'A post with this slug already exists' },
          { status: 400 }
        );
      }
    }

    // Update published date if status changes to published
    if (data.status === 'published' && existingPost.status !== 'published' && !data.publishedDate) {
      data.publishedDate = new Date();
    }

    // Update category counts
    if (data.categories) {
      const oldCategories = existingPost.categories.map(c => c.toString());
      const newCategories = data.categories;

      const removed = oldCategories.filter(c => !newCategories.includes(c));
      const added = newCategories.filter(c => !oldCategories.includes(c));

      if (removed.length > 0) {
        await Category.updateMany(
          { _id: { $in: removed } },
          { $inc: { postCount: -1 } }
        );
      }

      if (added.length > 0) {
        await Category.updateMany(
          { _id: { $in: added } },
          { $inc: { postCount: 1 } }
        );
      }
    }

    // Update tag counts
    if (data.tags) {
      const oldTags = existingPost.tags.map(t => t.toString());
      const newTags = data.tags;

      const removed = oldTags.filter(t => !newTags.includes(t));
      const added = newTags.filter(t => !oldTags.includes(t));

      if (removed.length > 0) {
        await Tag.updateMany(
          { _id: { $in: removed } },
          { $inc: { postCount: -1 } }
        );
      }

      if (added.length > 0) {
        await Tag.updateMany(
          { _id: { $in: added } },
          { $inc: { postCount: 1 } }
        );
      }
    }

    // Update the blog post
    const blog = await Blog.findByIdAndUpdate(id, data, { new: true })
      .populate('categories')
      .populate('tags')
      .lean();

    return NextResponse.json({ success: true, blog });
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update blog' },
      { status: 500 }
    );
  }
}

export const PUT = withAuth(handler);

