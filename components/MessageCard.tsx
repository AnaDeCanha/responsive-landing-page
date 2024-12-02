"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={
        isMobile ? (isInView ? { opacity: 1, y: 0 } : {}) : { opacity: 1, y: 0 }
      }
      transition={{
        duration: 0.7,
        delay: isMobile ? 0.5 : 1.2, // Apply delay for desktop animation
      }}
      className="bg-deepPurple rounded-br-[60px] rounded-bl-[60px] w-full mx-auto p-8 md:p-8 relative flex justify-center"
    >
      <p className="text-subheadingMobile md:text-subheadingDesktop text-brightYellow py-6 md:p-8 max-w-[720px]">
        We craft bold, captivating art that brings your vision to life.
      </p>
    </motion.div>
  );
};

export default MessageCard;
