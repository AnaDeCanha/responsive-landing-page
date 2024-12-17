"use client";

import React, { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";

const MessageCard: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Scroll-based scale animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0.6, 1.5], [1, 0.8]);

  // Text lines for animation
  const textLines = [
    "We craft daring and",
    "captivating creations that",
    "bring your vision to life.",
  ];

  // Variants for staggered animations
  const lineVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: index * 0.3, // Slight delay for staggered effect
      },
    }),
  };

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
            className="mb-2"
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={index} // Pass index for staggered delay
          >
            {line}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
};

export default MessageCard;
