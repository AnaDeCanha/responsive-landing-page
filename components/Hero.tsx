"use client";
import Image from "next/image";
import Newsletter from "./Newsletter";
import { motion } from "motion/react";

const Hero: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row md:gap-8 mt-16 justify-between items-start px-9 py-12 max-w-[1060px] mx-auto space-y-6 md:space-y-0"
    >
      {/* Left Container - Text and Subscription */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, staggerChildren: 0.2 },
          },
        }}
        className="flex flex-col md:space-y-8 space-y-4 md:w-1/2"
      >
        <motion.h1 className="text-headingMobile md:text-headingDesktop font-bold text-darkText">
          Hi there! I&apos;m Ana—Software Engineer & Design Lover ♥️
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.2 },
            },
          }}
          className="text-text text-darkText"
        >
          <i>Sharing stories to motivate you... or demotivate you?</i> <br />
          <br />
          Join me as I navigate life&apos;s adventures, blending technology,
          creativity, and candid reflections.
        </motion.p>

        <Newsletter />
      </motion.div>

      {/* Right Container - Image */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay: 0.6 },
          },
        }}
        className="relative md:w-1/2 w-full flex justify-center items-center"
      >
        <Image
          src="/hero-image.jpg"
          alt="Hero Image"
          layout="responsive"
          width={300}
          height={400}
          className="w-full object-contain rounded-2xl"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
