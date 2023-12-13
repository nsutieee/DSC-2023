import React from "react";
import "./Info2.css";
import { ourDiffFeatures } from "@/src/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  containerVariants,
  desVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animation";

const Info2 = () => {
  return (
    <div className='od-wrapper'>
      <div className='container'>
        <div className='od-container'>
          {/* head */}
          <div className='od-head'>
            <motion.span
              variants={titleVariants}
              initial='offscreen'
              whileInView={"onscreen"}
              className='title'
            >
              {" "}
              Student Activities Committee
            </motion.span>
          </div>
        </div>

        {/* features */}
        <div className='od-features'>
          {ourDiffFeatures.map((feature, i) => (
            <motion.div
              key={i}
              variants={containerVariants((i + 1) * 0.1)}
              initial='offscreen'
              whileInView={"onscreen"}
              className='od-feature'
            >
              <img src={feature.icon} alt='feature' width={256} height={256} />
              <span className='sec-title'>{feature.title}</span>
              <span className='text'>{feature.des}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info2;
