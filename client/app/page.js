import { IoAddOutline } from "react-icons/io5";
import { SignedIn } from "@clerk/nextjs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import axios from "axios";
import Register from "@/components/Register";

export default async function Home() {
  const user = await currentUser();

  return (
    <div>
      <Register
        clerkId={user?.id}
        firstName={user?.firstName}
        lastName={user?.lastName}
        email={user?.emailAddresses[0]?.emailAddress}
        username={user?.username}
      />
      <div className=" px-10 md:px-20 lg:px-40 py-6 flex flex-col gap-2">
        <h1 className="text-lg md:text-2xl font-semibold pb-1">Get Started</h1>
        <p className="text-sm md:text-md text-gray-400">
          Ditch the to-do list chaos. Get organized with TaskIt.
        </p>
        <p className="text-sm md:text-md text-gray-300">
          Sign Up to explore the unlimited extents of Task Scheduling and
          more...
        </p>
        <div className="flex gap-6 py-6 items-center flex-wrap">
          <div className=" w-32 md:w-56 hover:scale-105 duration-200 bg-purple-300 h-12 rounded-md"></div>
          <div className=" w-32 md:w-56 hover:scale-105 duration-200 bg-yellow-300 h-12 rounded-md"></div>
          <div className=" w-32 md:w-56 hover:scale-105 duration-200 bg-blue-300 h-12 rounded-md"></div>
          <div className=" w-32 md:w-56 hover:scale-105 duration-200 bg-red-500 h-12 rounded-md"></div>
          <div className=" w-32 md:w-56 hover:scale-105 duration-200 bg-gray-300 h-12 rounded-md"></div>
          <div className=" w-32 md:w-56 hover:scale-105 duration-200 bg-pink-300 h-12 rounded-md"></div>
        </div>
        <p className="text-sm md:text-md">
          Stop feeling overwhelmed by tasks. Our intuitive interface and
          powerful features keep you organized and productive.
        </p>
        <p className="text-sm md:text-md">
          TaskIt helps you stay focused, prioritize effectively, and achieve
          your goals.
        </p>
        <h1 className="text-md md:text-lg font-semibold pb-1 text-gray-300">
          Get Ahead of the crowd with TaskIt
        </h1>
        <p className="text-sm md:text-md font-bold px-3 rounded-md border-white py-1 border-[1px] w-fit">
          Comes with AI✨
        </p>
      </div>
      <SignedIn>
        <Link href={"/create-task"}>
          <div className=" absolute px-2 cursor-pointer py-1 z-10 bottom-[20px] right-[40px] border-[1px] border-white rounded-full scale-150">
            <div className="flex gap-2">
              <IoAddOutline />
              <p className="text-xs  ">Add New Task</p>
            </div>
          </div>
        </Link>
      </SignedIn>
    </div>
  );
}
