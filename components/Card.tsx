"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Card: React.FC<CardProps> = ({ icon, title, description, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="min-w-[200px] w-full h-[280px] bg-light shadow-md rounded-2xl p-4 flex flex-col justify-center items-center text-center space-y-2"
    >
      {icon}
      <h3 className="text-subheadingMobile text-accent font-semibold">
        {title}
      </h3>
      <p className="text-text italic text-darkText">{description}</p>
    </motion.div>
  );
};

export default Card;
