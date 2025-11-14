import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Category from '@/lib/models/Category';
import { withAuth } from '@/lib/auth-middleware';
import slugify from 'slugify';

// GET all categories (public)
export async function GET(request) {
  try {
    await dbConnect();

    // Get language from query params
    const { searchParams } = new URL(request.url);
    const language = searchParams.get('language');

    // Build query
    const query = language ? { language } : {};

    const categories = await Category.find(query).sort({ name: 1 }).lean();

    return NextResponse.json({ categories });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}

// POST create new category (protected)
async function createHandler(request) {
  try {
    await dbConnect();

    const data = await request.json();

    // Generate slug if not provided
    if (!data.slug) {
      data.slug = slugify(data.name, { lower: true, strict: true });
    }

    // Check if slug already exists for this language
    const existing = await Category.findOne({ slug: data.slug, language: data.language });
    if (existing) {
      return NextResponse.json(
        { error: 'A category with this slug already exists for this language' },
        { status: 400 }
      );
    }

    const category = await Category.create(data);

    return NextResponse.json(
      { success: true, category },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating category:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create category' },
      { status: 500 }
    );
  }
}

export const POST = withAuth(createHandler);

