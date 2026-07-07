"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { IconType } from "react-icons";

type SkillDataProviderProps = {
  Icon: IconType;
  color?: string;
  name: string;
  index: number;
};

export const SkillDataProvider = ({
  Icon,
  color = "text-white",
  name,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      whileHover={{ scale: 1.2, rotate: 5 }}
      custom={index}
      transition={{ delay: index * animationDelay, type: "spring", stiffness: 120 }}
      title={name}
      className={`flex items-center justify-center w-20 h-20 bg-[#0a0022] rounded-full border border-[#7042f88b] shadow-lg ${color}`}
    >
      <Icon className="w-10 h-10" />
    </motion.div>
  );
};
