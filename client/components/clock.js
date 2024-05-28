"use client"

import {useState} from "react";

export default function Clock () {
    const [time, setTime] = useState(new Date())
    setTimeout(()=>{
        setTime(new Date())
    }, 1000)
    return (
        <div>
            {
                (""+time.getHours()).padStart(2,"0")+":"+(""+time.getMinutes()).padStart(2,"0")+":"+(""+time.getSeconds()).padStart(2,"0")
            }
        </div>
    )
}