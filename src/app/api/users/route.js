import { NextResponse } from 'next/server';
import dbConnect from '../../../../config/dbConnect';
import User from '../../../../models/User';

export async function GET() {
  await dbConnect();
  try {
    const users = await User.find();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function POST(request) {
  await dbConnect();
  const user = await request.json();
  try {
    const newUser = await User.create(user);
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}



console.log(process.env);