"use client";

import React from "react";
import "./AboutDSC.css";
import { motion } from "framer-motion";
import animationData from "@/public/animation1.json";
import Stats from "./Stats";
import Lottie from "lottie-react";
import { tagVariants, titleVariants } from "@/src/utils/animation";
const AboutDSC = () => {
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
              {""} Delhi Section
            </motion.span>
          </div>

          <div className='wwd-blocks'>
            <div className='wwd-block'>
              <div className='flex flex-col justify-center items-center w-1/2'>
                <Lottie
                  animationData={animationData}
                  className='flex justify-center items-center '
                  loop={true}
                />
              </div>
              <div className='block-features'>
                <div className='block-feature'>
                  The IEEE Delhi Section is one of the largest and most dynamic
                  sections within the India Council under the Asia-Pacific
                  Region (Region 10) of IEEE. It serves as a hub for engineers
                  and technology enthusiasts from the northern part of the
                  country, covering Rajasthan, Haryana, Punjab, Himachal
                  Pradesh, the National Capital Territory of Delhi, Union
                  Territories of Chandigarh, Jammu & Kashmir, and Ladakh. The
                  Section has over a hundred Student Branches and branch
                  chapters, including Netaji Subhas University of Technology,
                  Indian Institute of Technology, and many other technical
                  institutes. Established in 1976, the Section has been
                  dedicated to fostering and supporting innovations in STEM.
                  Over the years, it has consistently organised engaging events
                  like technical talks, seminars, conferences, symposiums,
                  workshops, and tutorials. The ultimate aim is to bring
                  engineers together, facilitating networking opportunities and
                  the professional interchange of knowledge professionally.
                  <Stats />
                </div>
              </div>
            </div>
          </div>

          {/* info block */}
        </div>
      </div>
    </div>
  );
};

export default AboutDSC;
