import connectDB from "@/database/connect/connect";
import { USER } from "@/database/model/user.model";

export async function POST(request) {
  try {
    const { clerk_id, first_name, last_name, username, email } =
      await request.json();

    await connectDB();

    const newUser = await USER({
      clerk_id: clerk_id,
      first_name: first_name,
      last_name: last_name,
      username: username,
      email: email,
    });

    await newUser.save();
    return Response.json({
      message: "User saved successfully",
      data: [],
    });
  } catch (error) {
    return Response.json({
      message: "Error while creating user",
      error: error.message,
    });
  }
}
