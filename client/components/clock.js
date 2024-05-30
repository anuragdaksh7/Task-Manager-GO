"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date("05/14/2004"));
  const [timeString, setTimeString] = useState(
    ("" + time.getHours()).padStart(2, "0") +
      ":" +
      ("" + time.getMinutes()).padStart(2, "0") +
      ":" +
      ("" + time.getSeconds()).padStart(2, "0"),
  );
  useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, 1000);
    setTimeString(
      ("" + time.getHours()).padStart(2, "0") +
        ":" +
        ("" + time.getMinutes()).padStart(2, "0") +
        ":" +
        ("" + time.getSeconds()).padStart(2, "0"),
    );
  });

  return (
    <div>
      <p>{timeString}</p>
    </div>
  );
}
