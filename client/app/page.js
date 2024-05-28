

export default function Home() {
  return (
      <div>
              <div className=" px-10 md:px-20 lg:px-40 py-6 flex flex-col gap-2">
                  <h1 className="text-lg md:text-2xl font-semibold pb-1">Get Started</h1>
                  <p className="text-sm md:text-md text-gray-500">
                      Ditch the to-do list chaos. Get organized with TaskIt.
                  </p>
                  <p className="text-sm md:text-md text-gray-600">
                      Sign Up to explore the unlimited extents of Task Scheduling and more...
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
                      Stop feeling overwhelmed by tasks. Our intuitive interface and powerful features keep you
                      organized and productive.
                  </p>
                  <p className="text-sm md:text-md">
                      TaskIt helps you stay focused, prioritize effectively, and achieve your goals.
                  </p>
                  <h1 className="text-md md:text-lg font-semibold pb-1 text-gray-600">Get Ahead of the crowd with TaskIt</h1>
                  <p className="text-sm md:text-md font-bold px-3 rounded-md border-black py-1 border-[1px] w-fit">Comes with AI✨</p>
              </div>
      </div>
  )
}