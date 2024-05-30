"use client";

import { useState } from "react";
import Overview from "./Overview";
import Analytics from "./Analytics";
import Reports from "./Reports";
import Notifications from "./Notifications";

export default function Page() {
  const pageFilterArr = ["Overview", "Analytics", "Reports", "Notifications"];
  const [page, setPage] = useState(0);
  return (
    <div className=" px-40 py-6 flex flex-col gap-4">
      <div>
        <p className="text-2xl font-bold">Dashboard</p>
      </div>

      <div className="bg-[#333] w-fit px-2 py-1 flex rounded-md gap-1">
        {pageFilterArr.map((item, index) => {
          return (
            <button
              key={index}
              className={
                "px-2 py-[2px] rounded-md " +
                (page === index ? "bg-black text-white" : " text-gray-400")
              }
              onClick={() => setPage(index)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div>
        {(page === 0 && <Overview />) ||
          (page === 1 && <Analytics />) ||
          (page === 2 && <Reports />) ||
          (page === 3 && <Notifications />)}
      </div>
    </div>
  );
}
