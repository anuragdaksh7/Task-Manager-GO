import connectDB from "@/database/connect/connect";
import { auth } from "@clerk/nextjs/server";
import axios from "axios";

export async function POST(request) {
  try {
    const data = await request.json();

    if (!data)
      return Response.json({
        message: "No data provided",
        error: "No data provided",
      });

    await connectDB();
    // const { userId } = auth();
    // if (!userId) {
    //     return Response.json({
    //         message: "User not found. Please authenticate and try again",
    //         error: "User not found",
    //     });
    // }

    const dbResponse = await axios.post("http://localhost:8080/get-task", {
      userId: "123",
    });
    const dbData = await dbResponse.data;
    return Response.json({
      msg: "Successfully fetched the event",
      error: "",
      data: dbData,
    });
  } catch (e) {
    return Response.json({
      message: e.message,
      error: e.message,
    });
  }
}
