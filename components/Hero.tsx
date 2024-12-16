"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Scale animation: Grow, then shrink
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1.2, 1]);

  // Background color transition
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1, 0.11, 0.12],
    ["#FAFAFA", "#FAFAFA", "#FAFAFA", "#7D3C98"]
  );

  return (
    <motion.section
      style={{ backgroundColor }} // Apply dynamic background color
      className="relative w-full h-auto overflow-hidden mt-16 rounded-[60px] md:rounded-none"
    >
      <div className="flex flex-col items-center justify-center px-4 md:px-16 pb-4 md:py-16">
        {/* Title */}
        <h1 className="font-poppins font-bold text-headingMobile md:text-headingDesktop text-left leading-tight w-full px-4">
          <motion.div
            initial={{ opacity: 0, y: 50, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            Art That Speaks
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
          >
            to Your Soul
          </motion.div>
        </h1>

        {/* Video */}
        <motion.div
          className="relative w-full h-[500px] md:h-[1000px] mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.3,
          }}
          style={{ scale }}
        >
          <div className="overflow-hidden w-full h-full rounded-[60px]">
            <video
              src="/illustration-transitions.mp4" // Replace with your video path
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-[60px]"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
