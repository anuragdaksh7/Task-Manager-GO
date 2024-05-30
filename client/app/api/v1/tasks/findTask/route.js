import connectDB from "@/database/connect/connect";
import { auth } from "@clerk/nextjs/server";
import axios from "axios";
import {USER} from "@/database/model/user.model";
import {TASK} from "@/database/model/task.model";

export async function POST(request) {
  try {
    const data = await request.json();

    if (!data)
      return Response.json({
        message: "No data provided",
        error: "No data provided",
      });

    await connectDB();
    const { userId } = auth();
    if (!userId) {
        return Response.json({
            message: "User not found. Please authenticate and try again",
            error: "User not found",
        });
    }

    const user = await USER.findOne({ clerk_id: userId });
    const tasks = await TASK.find({createdBy: user._id});

    return Response.json({
      msg: "Successfully fetched the event",
      error: "",
      data: tasks,
    });
  } catch (e) {
    return Response.json({
      message: e.message,
      error: e.message,
    });
  }
}
