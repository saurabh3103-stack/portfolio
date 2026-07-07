"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SiReact, SiPhp, SiLaravel, SiCodeigniter, SiGo } from "react-icons/si";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Web & Software Developer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Scalable
            </span>{" "}
            Web & Software Solutions.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I am a Full Stack Developer and Laravel, PHP, React, Go lang also.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-row gap-4 mt-2"
        >
          <a
            href="#projects"
            className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            View Projects
          </a>
          <a
            href="mailto:contact@example.com"
            className="py-3 px-6 text-center text-white cursor-pointer rounded-lg border border-purple-500 hover:bg-purple-500/20 transition-all"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(1.2)}
          className="flex flex-row gap-6 mt-8 items-center text-gray-400"
        >
          <span className="text-sm uppercase tracking-wider">Tech Stack:</span>
          <SiPhp className="w-8 h-8 hover:text-purple-400 transition-colors cursor-pointer" />
          <SiLaravel className="w-8 h-8 hover:text-red-500 transition-colors cursor-pointer" />
          <SiCodeigniter className="w-8 h-8 hover:text-orange-500 transition-colors cursor-pointer" />
          <SiReact className="w-8 h-8 hover:text-cyan-400 transition-colors cursor-pointer" />
          <SiGo className="w-8 h-8 hover:text-cyan-600 transition-colors cursor-pointer" />
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          style={{ width: "auto", height: "auto" }}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
