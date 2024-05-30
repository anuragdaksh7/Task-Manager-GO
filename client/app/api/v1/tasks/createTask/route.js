// auth
import { auth } from "@clerk/nextjs/server";

// db models
import connectDB from "@/database/connect/connect";
import { TASK } from "@/database/model/task.model";

export async function POST(request) {
  try {
    const data = await request.json();
    // if no data bad response
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

    const newEvent = new TASK({
      title: data.title,
      description: data.description,
      dueDate: data.dueDate,
      priority: data.priority,
      category: data.category,
      // dependencies: data?.dependencies,
      labels: [data?.labels],
    });
    await newEvent.save();
    return Response.json({
      message: "Task created successfully",
      error: "",
      data: newEvent,
    });
  } catch (error) {
    return Response.json({
      message: "Error while creating habit",
      error: error.message,
    });
  }
}
