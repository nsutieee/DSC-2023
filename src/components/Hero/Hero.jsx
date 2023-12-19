"use client";

import React from "react";
import "./Hero.css";
import { HeroData } from "@/src/utils/data";
import { motion } from "framer-motion";

import Countdown from "./Countdown";
import Cube from "./index";
import Typewriter from "typewriter-effect";
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
            <Cube />
          </div>

          <div className='h-right'>
            {/* right side */}
            {/* <div className='h-title'> */}
            {/* <span>ieee nsut</span> */}

            <h1 className=' h-title '>
              Welcome to <br />{" "}
              <div className='home_sec'>
                <Typewriter
                  options={{
                    strings: ["IEEE DSC"],
                    autoStart: true,
                    loop: true,
                    delay: "natural",
                    deleteSpeed: "natural",
                  }}
                />
              </div>
            </h1>

            {/* </div> */}
            <div className='h-des'>Empower, Elevate, Connect</div>

            <Countdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
