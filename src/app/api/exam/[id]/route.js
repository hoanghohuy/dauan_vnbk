import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
await connect();

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    const user = await User.findById(id);

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }
    return new NextResponse(user, );
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  const { id } = params;
  const updateData = await request.json();

  try {
    const response = await updateById(id, updateData);
    return new NextResponse(response );
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};