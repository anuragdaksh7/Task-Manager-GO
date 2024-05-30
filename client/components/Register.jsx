"use client";
import axios from "axios";
import { useEffect } from "react";

export default function Register(props) {
  const createUser = async (props) => {
    console.log("hello");
    const response = await axios.post("/api/v1/users/createUser", {
      clerk_id: props.clerkId,
      first_name: props.firstName,
      last_name: props.lastName,
      username: props.username,
      email: props.email,
    });
    const data = await response.data;
    console.log(data);
  };
  useEffect(() => {
    console.log(props);
    if (props.clerkId) {
      createUser(props);
    }
  });

  return <></>;
}
