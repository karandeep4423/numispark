import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Tag from '@/lib/models/Tag';
import { withAuth } from '@/lib/auth-middleware';

// PUT update tag (protected)
async function updateHandler(request, { params }) {
  try {
    await dbConnect();

    const { id } = await params;
    const data = await request.json();

    const tag = await Tag.findByIdAndUpdate(id, data, { new: true }).lean();

    if (!tag) {
      return NextResponse.json(
        { error: 'Tag not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, tag });
  } catch (error) {
    console.error('Error updating tag:', error);
    return NextResponse.json(
      { error: 'Failed to update tag' },
      { status: 500 }
    );
  }
}

// DELETE tag (protected)
async function deleteHandler(request, { params }) {
  try {
    await dbConnect();

    const { id } = await params;

    const tag = await Tag.findByIdAndDelete(id);

    if (!tag) {
      return NextResponse.json(
        { error: 'Tag not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: 'Tag deleted successfully' });
  } catch (error) {
    console.error('Error deleting tag:', error);
    return NextResponse.json(
      { error: 'Failed to delete tag' },
      { status: 500 }
    );
  }
}

export const PUT = withAuth(updateHandler);
export const DELETE = withAuth(deleteHandler);

