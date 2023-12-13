import React from "react";
import "./Teacher.css";
import { whoWeInvest } from "@/src/utils/data";
import { motion } from "framer-motion";
import {
  containerVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animation";

const teacher = () => {
  return (
    <div className='wwi-wrapper'>
      <div className='container'>
        <div className='wwi-container'>
          {/* left side */}
          <div className='wwi-right'>
            <motion.img
              variants={containerVariants(0.5)}
              initial='offscreen'
              whileInView={"onscreen"}
              src='persons.jpeg'
              alt='persons'
            />
          </div>
          {/* right side */}

          <div className='wwi-left'>
            <div className='head'>
              <motion.p
                variants={titleVariants}
                initial='offscreen'
                whileInView={"onscreen"}
                className='tag'
              >
                POR
              </motion.p>

              <motion.span
                variants={titleVariants}
                initial='offscreen'
                whileInView={"onscreen"}
                className='title'
              >
                Prerna Guar Mam
              </motion.span>
            </div>

            {/* features */}
            <div className='wwi-features'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus veniam id nulla ad repellendus? Cumque a in
              recusandae quas tempora inventore exercitationem omnis? Molestias
              commodi dolor qui blanditiis quae? Blanditiis similique nihil
              voluptate ex rerum eligendi inventore laudantium modi quia
              doloribus porro culpa sit, delectus nobis vitae sint quibusdam
              harum unde qui iste quos eaque, provident ullam. Aspernatur in
              iure accusantium blanditiis dolorum ad molestias provident, magnam
              nulla, magni dignissimos vitae impedit perferendis, aut nisi?
              Culpa, sequi voluptates impedit nesciunt fuga consequuntur
              inventore pariatur quasi autem molestias nisi ducimus voluptatum
              saepe. Qui voluptatibus officia animi hic nostrum expedita totam
              fugit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default teacher;
