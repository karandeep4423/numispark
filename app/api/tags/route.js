import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Tag from '@/lib/models/Tag';
import { withAuth } from '@/lib/auth-middleware';
import slugify from 'slugify';

// GET all tags (public)
export async function GET(request) {
  try {
    await dbConnect();

    // Get language from query params
    const { searchParams } = new URL(request.url);
    const language = searchParams.get('language');

    // Build query
    const query = language ? { language } : {};

    const tags = await Tag.find(query).sort({ name: 1 }).lean();

    return NextResponse.json({ tags });
  } catch (error) {
    console.error('Error fetching tags:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tags' },
      { status: 500 }
    );
  }
}

// POST create new tag (protected)
async function createHandler(request) {
  try {
    await dbConnect();

    const data = await request.json();

    // Generate slug if not provided
    if (!data.slug) {
      data.slug = slugify(data.name, { lower: true, strict: true });
    }

    // Check if slug already exists for this language
    const existing = await Tag.findOne({ slug: data.slug, language: data.language });
    if (existing) {
      return NextResponse.json(
        { error: 'A tag with this slug already exists for this language' },
        { status: 400 }
      );
    }

    const tag = await Tag.create(data);

    return NextResponse.json(
      { success: true, tag },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating tag:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create tag' },
      { status: 500 }
    );
  }
}

export const POST = withAuth(createHandler);

