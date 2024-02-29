import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const examData = await request.json();
  await connect();

  try {
    const newExam = new User(examData);
    await newExam.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};

// Method to find all users
export const GET = async () => {
  try {
    const users = await User.find();
    return new NextResponse(users, );
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};