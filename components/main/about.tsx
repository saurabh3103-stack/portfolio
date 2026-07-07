"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import Image from "next/image";

export const About = () => {
  return (
    <section id="about-me" className="w-full h-full flex flex-col md:flex-row items-center justify-center py-20 px-10 md:px-20 z-[20]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.5)}
        className="w-full flex flex-col gap-6 justify-center md:w-1/2 mt-10 md:mt-0"
      >
        <motion.div variants={slideInFromTop}>
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            About Me
          </h1>
        </motion.div>
        
        <p className="text-lg text-gray-400 mt-2 max-w-[600px] leading-relaxed">
          I am a passionate Full Stack Developer with expertise in building scalable, robust, and interactive web applications. 
          My primary focus is on utilizing powerful backend technologies like Laravel and PHP to create secure architectures, 
          while leveraging modern frontend frameworks like React to craft seamless user experiences.
        </p>
        
        <p className="text-lg text-gray-400 mt-2 max-w-[600px] leading-relaxed">
          I also have experience working with Go lang for high-performance microservices, and CodeIgniter for lightweight 
          legacy systems. I love tackling complex problems and am constantly learning new tools to optimize my workflow and 
          deliver the best products possible.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromRight(0.5)}
        className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0"
      >
        <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-purple-500/50 shadow-[0_0_40px_rgba(112,66,248,0.3)]">
          {/* You can replace this src with your actual image path, e.g., "/shivanshu.jpg" */}
          <Image
            src="/about-me.jpg"
            alt="Shivanshu About Me"
            fill
            unoptimized={true}
            className="object-cover bg-black"
          />
        </div>
      </motion.div>
    </section>
  );
};
