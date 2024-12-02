"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-auto">
      <div className="flex flex-col items-center justify-center px-4 md:px-16 py-16">
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

        {/* Image */}
        <motion.div
          className="relative w-full h-[400px] md:h-[1000px] px-4 md:px-16 mt-8 overflow-hidden rounded-[60px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <Image
            src="/hero-image.webp"
            alt="Hero section artwork"
            layout="fill"
            objectFit="cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
