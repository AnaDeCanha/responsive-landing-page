"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";

const MessageCard: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect screen size to determine mobile vs. desktop
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const textLines = [
    "We craft daring and",
    "captivating creations that",
    "bring your vision to life.",
  ];

  return (
    <div
      ref={ref}
      className="bg-deepPurple rounded-br-[60px] rounded-bl-[60px] w-full mx-auto px-8 md:px-8 pb-16 relative flex justify-center"
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
    </div>
  );
};

export default MessageCard;
