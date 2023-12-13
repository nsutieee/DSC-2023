import React, { useState } from "react";
import "./timeline.css";
import { useWindowWidth } from "@react-hook/window-size";
import "react-vertical-timeline-component/style.min.css";
import TlComp from "./TlComp";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/src/utils/animation";

function Timeline() {
  const onlyWidth = useWindowWidth();
  const [day, setDay] = useState(1);

  // const [day, setDay] = useState("day1");

  // const changeDay = (day) => {
  // setDay(day);
  // };

  return (
    <div id='timeline' className=''>
      <motion.p
        initial='offscreen'
        whileInView={"onscreen"}
        variants={titleVariants}
        class='title'
      >
        TIMELINE
      </motion.p>
      <div className='button-box'>
        <button className='btn' onClick={() => setDay(1)}>
          Day 1
        </button>
        <button className='btn' onClick={() => setDay(2)}>
          Day 2
        </button>
      </div>
      {day == 1 ? <TlComp data={data1} /> : <TlComp data={data2} />}
    </div>
  );
}
const data1 = [
  { date: "1", txt: "Day 1 Events" },
  { date: "2", txt: "Day 1 Events" },
  { date: "3", txt: "Day 1 Events" },
  { date: "4", txt: "Day 1 Events" },
  { date: "5", txt: "Day 1 Events" },
  { date: "6", txt: "Day 1 Events" },
  { date: "7", txt: "Day 1 Events" },
  { date: "8", txt: "Day 1 Events" },
];
const data2 = [
  { date: "1", txt: "Day 2 Events" },
  { date: "2", txt: "Day 2 Events" },
  { date: "3", txt: "Day 2 Events" },
  { date: "4", txt: "Day 2 Events" },
  { date: "5", txt: "Day 2 Events" },
  { date: "6", txt: "Day 2 Events" },
  { date: "7", txt: "Day 2 Events" },
  { date: "8", txt: "Day 2 Events" },
];

export default Timeline;
