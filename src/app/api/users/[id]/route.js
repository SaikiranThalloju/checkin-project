import { NextResponse } from 'next/server';
import dbConnect from '../../../config/dbConnect';
import User from '../../../models/User';

export async function GET({ params }) {
  await dbConnect();
  try {
    const user = await User.findById(params.id);
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function PUT({ params, request }) {
  await dbConnect();
  const updateData = await request.json();
  try {
    const user = await User.findByIdAndUpdate(params.id, updateData, { new: true });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE({ params }) {
  await dbConnect();
  try {
    await User.findByIdAndDelete(params.id);
    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
