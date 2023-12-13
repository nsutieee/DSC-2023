"use client";

import React from "react";
import "./Info.css";
import { features } from "@/src/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/src/utils/animation";

const Info = () => {
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
              heading 1
            </motion.span>

            <motion.span
              initial='offscreen'
              whileInView={"onscreen"}
              variants={titleVariants}
              className='title'
            >
              {""} About
            </motion.span>
          </div>

          {/* blocks */}
          <div className='wwd-blocks'>
            {/* first block */}
            <div className='wwd-block'>
              <div className='block-features'>
                {features.slice(0, 3).map((feature, i) => (
                  <div className='block-feature' key={i}>
                    <img
                      src={feature.icon}
                      alt='feauture'
                      width={60}
                      height={60}
                    />
                    <span>{feature.title}</span>
                  </div>
                ))}
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
