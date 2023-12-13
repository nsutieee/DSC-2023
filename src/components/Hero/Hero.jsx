"use client";

import React from "react";
import "./Hero.css";
import EmailBox from "../EmailBox/EmailBox";
import { HeroData } from "@/src/utils/data";
import { motion } from "framer-motion";
import Cube from "./index";

const Hero = () => {
  const variants = (delay) => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        damping: 25,
        duration: 2.5,
        delay,
      },
    },
  });
  const imgVariants = () => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        duration: 2,
        stiffness: 30,
      },
    },
  });

  return (
    <div className='h-wrapper'>
      <div className='container'>
        {/* <img src='hero/hero-arrow.png' alt='arrow' className='h-arrow' /> */}

        <div className='h-container'>
          {/* left side */}
          <div className='h-left'>
            {/* <div className='image-row'>
              {HeroData.slice(0, 3).map((person, i) => (
                <div className='person-pill' key={i}>
                  <motion.div
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{ backgroundColor: person.bg }}
                    className='person-pill-bg'
                  >
                    <motion.img
                      initial={"initial"}
                      animate={"animate"}
                      variants={imgVariants()}
                      src={person.src}
                      alt={person.src}
                    />
                  </motion.div>
                </div>
              ))}
            </div> */}
            {/* <div className='image-row'>
              {HeroData.slice(3, 6).map((person, i) => (
                <div className='person-pill' key={i}>
                  <motion.div
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{ backgroundColor: person.bg }}
                    className='person-pill-bg'
                  >
                    <motion.img
                      initial={"initial"}
                      animate={"animate"}
                      variants={imgVariants()}
                      src={person.src}
                      alt={person.src}
                    />
                  </motion.div>
                </div>
              ))}
            </div> */}
            <Cube />
          </div>

          <div className='h-right'>
            {/* right side */}
            <div className='h-title'>
              <span>ieee nsut</span>
              <span>dcs week description one line </span>
              <span>kuch kuch</span>
            </div>
            <div className='h-des'>
              lorem ispum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </div>

            {/* <EmailBox/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
