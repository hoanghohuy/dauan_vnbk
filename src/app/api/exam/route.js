import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
await connect();

export const POST = async (request) => {
  const examData = await request.json();

  try {
    const newExam = new User(examData);
    await newExam.save();
    return NextResponse.json(
      { success: "Exam has been sent" },
      {
        status: 201,
      }
    );
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      {
        status: 500,
      }
    );
  }
};

// Method to find all users
export const GET = async () => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
