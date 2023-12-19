"use client";

import React from "react";
import "./Info.css";
import { features } from "@/src/utils/data";
import { motion } from "framer-motion";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import animationData from "@/public/animation1.json";
import Lottie from "lottie-react";
import {
  containerVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animation";
import { useState } from "react";
const Info = () => {
  // console.log(animationData);

  const [isStopped, setisStopped] = useState(false);
  const [isPaused, setisPaused] = useState(false);
  const onlyWidth = useWindowWidth();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className='wwd-wrapper'>
      <div className='container'>
        <div className='wwd-container'>
          {/* head section */}
          <div className='wwd-head'>
            <motion.span
              initial='offscreen'
              whileInView={"onscreen"}
              variants={tagVariants}
              className='tag'
            >
              ABOUT
            </motion.span>

            <motion.span
              initial='offscreen'
              whileInView={"onscreen"}
              variants={titleVariants}
              className='title'
            >
              {""} Delhi Section Congress
            </motion.span>
          </div>

          <div className='wwd-blocks'>
            <div className='wwd-block'>
              <div className='block-features'>
                <div className='block-feature'>
                  The DSSYWC, organized by the IEEE Delhi Section, stands as the
                  premier annual gathering for inventors, professionals, and
                  entrepreneurs nationwide. The 2022 edition, held on September
                  17–18, featured enlightening sessions such as Young
                  Professionals experience-sharing, Student Branch Executive
                  Committee Open Discussion, and International seminars.
                  Boasting over 320 delegates and the participation of 17
                  student branches from North India, this event underscores the
                  IEEE Delhi Section&apos;s significance in the Asia-Pacific
                  Region (Region 10) of IEEE. Serving as a crucial catalyst for
                  STEM innovation, the section establishes connections between
                  students, professionals, and industry partners, providing a
                  dynamic platform to showcase and enhance skills. Beyond
                  fostering networking, the congress generates opportunities for
                  growth and collaboration. As an integral initiative of the
                  IEEE Delhi Section, the DSSYWC operates as a non-profit
                  organization headquartered in Delhi, guided by a committed
                  team of 11–50 employees
                </div>
              </div>
              <div className='flex flex-col justify-center items-center w-1/2'>
                <Lottie
                  animationData={animationData}
                  className='flex justify-center items-center '
                  loop={true}
                />
              </div>
            </div>
          </div>

          {/* info block */}
        </div>
      </div>
    </div>
  );
};

export default Info;
