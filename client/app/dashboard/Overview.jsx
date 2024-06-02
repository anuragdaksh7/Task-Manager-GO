import React from "react";
import { MdOutlinePeople } from "react-icons/md";
import { MdCreditCard } from "react-icons/md";
import { CiWavePulse1 } from "react-icons/ci";
import { TbCurrencyDollar } from "react-icons/tb";
import { Badge } from "@/components/ui/badge";



const iconMap = {
  dollar: <TbCurrencyDollar />,
  people: <MdOutlinePeople />,
  card: <MdCreditCard />,
  pulse: <CiWavePulse1 />
}

const Card = (props) => {
  return (
    <div className="select-none cursor-pointer hover:scale-105 duration-300 w-full border-[1px] p-4 flex flex-col gap-1 rounded-md border-gray-500 py-2">
      <div className="flex items-center justify-between ">
        <p>{props.title}</p>
        <div className="border-2 rounded-full p-[2px]">
          {iconMap[props.icon]}
        </div>
      </div>
      <div>
        <p>{props.details}</p>
      </div>
      <div>
        <p className={` text-${(props.change>=0)?"green":"red"}-500`}>{(props.change>=0)?"+":""}{props.change}% from last month</p>
      </div>
    </div>
  )
}

const colors = {
  pending: "#FACC15",
  completed: "#22C25E",
  deadlineIncomplete: "#EF4444",
  deadlineComplete: "#3B82F6"
}

const RecentTaskCard = (props) => {
  const today = new Date()
  var variant;
  var color;

  if (props.priority === "High") variant = "destructive"
  if (props.priority === "Medium") variant = "secondary"
  if (props.priority === "Low") variant = ""

  if (today<new Date(props.date)) {
    if (props.status == "pending") color = colors["pending"]
    else color = colors["completed"]
  } else {
    if (props.status == "pending") color = colors["deadlineIncomplete"]
    else color = colors["deadlineComplete"]
  }
  return (
    <div className="flex items-center border-[1px] px-3 py-[6px] rounded-md justify-between">
      <div className="flex items-center gap-3">
        <div className=" bg-green-500 w-5 h-5 rounded-full" style={{
          backgroundColor: color
        }}></div>
        <div className="text-sm">
          <div className="flex items-center gap-2">
            <p className="">{props.title}</p>
            <Badge variant={variant} className="text-xs scale-75">{props.priority}</Badge>
          </div>
          <p className=" text-gray-400">{props.description}</p>
        </div>  
      </div>
      <div>
        <p className="text-xs text-gray-400">{props.date}</p>
      </div>
    </div>
  )
}

const Overview = () => {

  const tasks = [
    {
      "title": "New Task",
      "date": "2025-05-12",
      "status": "complete",
      "priority": "High",
      "description": "New task lol"
    },
    {
      "title": "New Task",
      "date": "2021-05-12",
      "status": "pending",
      "priority": "Low",
      "description": "New task lol"
    },
    {
      "title": "New Task",
      "date": "2021-05-12",
      "status": "complete",
      "priority": "Medium",
      "description": "New task lol"
    },
    {
      "title": "New Task",
      "date": "2025-05-12",
      "status": "pending",
      "priority": "High",
      "description": "New task lol"
    },
    {
      "title": "New Task",
      "date": "2021-05-12",
      "status": "pending",
      "priority": "Low",
      "description": "New task lol"
    },
  ]

  return <div className=" text-yellow-400 flex flex-col gap-4">
    <div className="text-white flex justify-between gap-4">
      <Card title="Total Revenue" icon="dollar" details="$10000" change={10.2} />
      <Card title="Subscriptions" icon="people" details="+2,350" change={181.2} />
      <Card title="Sales" icon="card" details="+12,234" change={19} />
      <Card title="Active Now" icon="pulse" details="+573" change={-201} />
    </div>
    <div className=" flex text-white">
      <div className="w-1/2"></div>
      <div className="w-1/2 h-96  px-4 py-2 flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="">
            <p className="text-lg">Recently added Tasks</p>
            <p className="text-gray-400">20 tasks added this month</p>
          </div>
          <div>
            View All
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-between">
          {
            tasks.map((item, index) => {
              return <RecentTaskCard title={item.title} date={item.date} status={item.status} priority={item.priority} description={item.description} key={index} />
            })
          }
        </div>
      </div>
    </div>
  </div>;
};

export default Overview;
