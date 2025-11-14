import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Category from '@/lib/models/Category';
import { withAuth } from '@/lib/auth-middleware';

// PUT update category (protected)
async function updateHandler(request, { params }) {
  try {
    await dbConnect();

    const { id } = await params;
    const data = await request.json();

    const category = await Category.findByIdAndUpdate(id, data, { new: true }).lean();

    if (!category) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, category });
  } catch (error) {
    console.error('Error updating category:', error);
    return NextResponse.json(
      { error: 'Failed to update category' },
      { status: 500 }
    );
  }
}

// DELETE category (protected)
async function deleteHandler(request, { params }) {
  try {
    await dbConnect();

    const { id } = await params;

    const category = await Category.findByIdAndDelete(id);

    if (!category) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: 'Category deleted successfully' });
  } catch (error) {
    console.error('Error deleting category:', error);
    return NextResponse.json(
      { error: 'Failed to delete category' },
      { status: 500 }
    );
  }
}

export const PUT = withAuth(updateHandler);
export const DELETE = withAuth(deleteHandler);

