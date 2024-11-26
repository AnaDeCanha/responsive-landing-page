"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center items-start mt-16 px-16 py-12"
    >
      {/* Title */}
      <div className="text-left">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7 },
            },
          }}
          className="text-headingMobile md:text-headingDesktop font-bold text-darkText"
        >
          Art That Speaks to
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.5 },
            },
          }}
          className="text-headingMobile md:text-headingDesktop font-bold text-darkText"
        >
          Your <span className="inline-block"> </span>
          <motion.span
            className="inline-block"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delay: 1, staggerChildren: 0.4 },
              },
            }}
          >
            {[..."Soul."].map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 200, rotate: 90, scale: 0.5 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  delay: index * 0.4,
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>
        </motion.div>
      </div>

      {/* Image */}
      <motion.div
        style={{ y: parallax }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay: 1.5 },
          },
        }}
        className="mt-8 w-full flex justify-center items-center overflow-hidden"
      >
        <Image
          src="/hero-image.webp"
          alt="Hero Image"
          layout="responsive"
          width={1200}
          height={600}
          className="w-full max-h-[600px] object-cover rounded-2xl"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
