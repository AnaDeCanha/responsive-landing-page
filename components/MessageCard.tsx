"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const MessageCard: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Animates as the card enters and exits the viewport
  });

  // Scale animation: Shrink as the user scrolls past
  const scale = useTransform(scrollYProgress, [0.6, 1.5], [1, 0.8]);

  const textLines = [
    "We craft daring and",
    "captivating creations that",
    "bring your vision to life.",
  ];

  return (
    <motion.div
      ref={ref}
      className="bg-deepPurple rounded-[60px] md:rounded-t-[0] mt-16 md:mt-0 w-full mx-auto px-8 md:px-8 md:py-16 relative flex justify-center"
      style={{ scale }} // Apply scale animation
    >
      <div className="text-subheadingMobile md:text-subheadingDesktop text-brightYellow py-16">
        {textLines.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: index * 0.3, // Sequential arrival for each line
            }}
            className="mb-2"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
};

export default MessageCard;
