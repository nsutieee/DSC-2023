"use client";
import { useState } from "react";
import Navbar from "@/src/components/Navbar/Navbar";
import "./page.css";
import Hero from "@/src/components/Hero/Hero";
import BrandingVideo from "@/src/components/BrandingVideo/BrandingVideo";
import Info from "@/src/components/Info/Info";
import Info2 from "@/src/components/Info2/Info2";
import { motion, useAnimation } from "framer-motion";
import Info3 from "@/src/components/Info3/Info3";
import Teacher from "@/src/components/Teacher/Teacher";
import Testimonials from "@/src/components/Testimonials/Testimonials";
import Footer from "@/src/components/Footer/Footer";
import Timeline from "@/src/components/Timeline/timeline";
import TopNav from "@/src/components/TopNav/TopNav";
import Gallery from "@/src/components/Gallery/Gallery";
import AboutDSC from "@/src/components/aboutDSC/aboutDSC";
export default function Home() {
  const controls = useAnimation();

  return (
    <div className='bg-gradient'>
      <TopNav />

      <motion.div className='app' animate={controls}>
        <motion.div
          animate={controls}
          style={{
            background: "",
          }}
        >
          <Navbar />
          <Hero />
        </motion.div>
        <BrandingVideo />
        <Info />
        <AboutDSC />
        <motion.div
        // onViewportEnter={() =>
        //   controls.start({
        //     background: "var(--secondary-color)",
        //   })
        // }
        // onViewportLeave={() =>
        //   controls.start({
        //     background:
        //       "radial-gradient(circle at 20% 40%, #323232 0%, rgb(0, 0, 0) 40%, transparent),radial-gradient(circle at 100% 100%, #323232 10%, rgb(0, 0, 0) 120%, transparent),radial-gradient(circle at 10% 60%, #323232 0%, rgb(0, 0, 0) 120%, transparent)",
        //   })
        // }
        // viewport={{ amount: 0.4 }}
        >
          <Info2 />
        </motion.div>

        {/* <Info3 /> */}
        <motion.div
        // onViewportEnter={() =>
        //   controls.start({
        //     background:
        //       "radial-gradient(circle at 20% 40%, #323232 0%, rgb(0, 0, 0) 40%, transparent),radial-gradient(circle at 100% 100%, #323232 10%, rgb(0, 0, 0) 120%, transparent),radial-gradient(circle at 10% 60%, #323232 0%, rgb(0, 0, 0) 120%, transparent)",
        //   })
        // }
        // onViewportLeave={() =>
        //   controls.start({
        //     background: "white",
        //   })
        // }
        // viewport={{ amount: 0.4 }}
        >
          <Timeline />
        </motion.div>

        <motion.div
        // onViewportEnter={() =>
        //   controls.start({
        //     backgroundColor: "var(--primary-color)",
        //   })
        // }
        // onViewportLeave={() =>
        //   controls.start({
        //     backgroundColor: "white",
        //   })
        // }
        // viewport={{ amount: 0.4 }}
        >
          <Teacher />
        </motion.div>

        <Gallery />

        <Testimonials />

        <Footer />
      </motion.div>
    </div>
  );
}

// Landing Page
// Teaser Video
// About DSC
// About IEEE
// TimeLine
// Speakers
// Professors IEEE SSN
// Team
// Contact
// Footer
