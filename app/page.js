"use client"
import Navbar from '@/src/components/Navbar/Navbar';
import './page.css'
import Hero from '@/src/components/Hero/Hero';
import BrandingVideo from '@/src/components/BrandingVideo/BrandingVideo';
import Info from '@/src/components/Info/Info';
import Info2 from '@/src/components/Info2/Info2';
import { motion,useAnimation } from "framer-motion";


export default function Home() {
  const controls = useAnimation();

  return (
    <motion.div className="app" animate={controls}>
    <Navbar/>
    <Hero/>
    <BrandingVideo/>
    <Info/>
    
    <motion.div
    onViewportEnter={()=> controls.start({
      backgroundColor:"var(--secondary-color)",
    })}
    onViewportLeave={()=> controls.start({
      backgroundColor:"white",
    })}
    viewport={{amount: 0.4}}
    >
         <Info2/>
    </motion.div>
    
    </motion.div>
  );
}
