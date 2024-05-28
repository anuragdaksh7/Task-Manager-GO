import Image from "next/image";
import {SignedIn, SignedOut, SignInButton, SignUpButton, UserButton} from "@clerk/nextjs";
import Link from "next/link";
import Clock from "@/components/clock";

export default function Home() {
  return (
      <div>
              <div className="px-40 py-6 flex justify-between items-center rounded-md">
                  <Link href="/" className="text-2xl text-gray-900 font-bold">TaskIt</Link>
                  <div className="flex gap-6 items-center">
                      <div>
                          <Clock />
                      </div>
                      <div className="flex gap-4 items-center">
                          <SignedOut>
                              <SignInButton className=" bg-black text-white px-2 py-1 rounded-md" />
                              <SignUpButton className=" border-[2px] border-black px-2 py-1 rounded-md" />
                          </SignedOut>

                          <SignedIn>
                              <UserButton/>
                          </SignedIn>
                      </div>
                  </div>
              </div>
              <div className="px-40 py-6 flex flex-col gap-2">
                  <h1 className="text-2xl font-semibold pb-1">Get Started</h1>
                  <p className="text-gray-500">
                      Ditch the to-do list chaos. Get organized with TaskIt.
                  </p>
                  <p className="text-gray-600">
                      Sign Up to explore the unlimited extents of Task Scheduling and more...
                  </p>
                  <div className="flex gap-6 py-6 items-center flex-wrap">
                      <div className=" hover:scale-105 duration-200 bg-purple-300 w-56 h-12 rounded-md"></div>
                      <div className=" hover:scale-105 duration-200 bg-yellow-300 w-56 h-12 rounded-md"></div>
                      <div className=" hover:scale-105 duration-200 bg-blue-300 w-56 h-12 rounded-md"></div>
                      <div className=" hover:scale-105 duration-200 bg-red-500 w-56 h-12 rounded-md"></div>
                      <div className=" hover:scale-105 duration-200 bg-gray-300 w-56 h-12 rounded-md"></div>
                      <div className=" hover:scale-105 duration-200 bg-pink-300 w-56 h-12 rounded-md"></div>
                  </div>
                  <p>
                      Stop feeling overwhelmed by tasks. Our intuitive interface and powerful features keep you
                      organized and productive.
                  </p>
                  <p>
                      TaskIt helps you stay focused, prioritize effectively, and achieve your goals.
                  </p>
                  <h1 className="text-lg font-semibold pb-1 text-gray-600">Get Ahead of the crowd with TaskIt</h1>
                  <p className="font-bold px-3 rounded-md border-black py-1 border-[1px] w-fit">Comes with AI✨</p>
              </div>
      </div>
  )
}