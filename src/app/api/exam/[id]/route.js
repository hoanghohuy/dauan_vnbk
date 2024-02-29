import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from 'next/server';
await connect();

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json({error: "Exam not found"}, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(error.message, { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  const { id } = params;
  const {published, points} = await request.json();

  try {
    const response = await User.findOneAndUpdate({_id: id}, { published, points });
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({error:error.message}, { status: 500 });
  }
};