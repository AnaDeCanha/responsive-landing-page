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
      className="bg-primary rounded-2xl w-full max-w-[996px] mx-auto p-8 md:p-8 relative"
    >
      <p className="text-subheadingMobile md:text-subheadingDesktop text-accent py-6 md:p-8">
        ¡Hola! I&apos;m Ana, a Frontend Developer who blends technology and
        creativity to craft user-focused web experiences. Passionate about web
        design, productivity, and learning languages—I speak three!
      </p>
      <Image
        src="/heart.png"
        alt="Heart Icon"
        width={40}
        height={40}
        className="absolute bottom-6 right-6"
      />
    </motion.div>
  );
};

export default MessageCard;
