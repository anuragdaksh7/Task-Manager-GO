import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  clerk_id: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: false,
    trim: true,
  },
  username: {
    type: String,
    trim: true,
  },
});

export const USER =
  mongoose.models["users"] || mongoose.model("users", userSchema);
