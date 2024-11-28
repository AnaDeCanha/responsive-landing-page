"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

const Hero: React.FC = () => {
  const { scrollY } = useScroll();

  // Map scrollY to dynamic background color
  const backgroundColor = useTransform(
    scrollY,
    [300, 500], // Adjust range to match scroll progress
    ["#FAFAFA", "#7D3C98"] // Correspond to softWhite and sunsetOrange
  );

  // Parallax effect for the image
  const parallax = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative flex flex-col justify-center items-start mt-16 px-16 py-12"
    >
      {/* Background */}
      <motion.div
        style={{ backgroundColor }} // Inline style for dynamic colors
        className="absolute inset-0 -z-10 transition-colors duration-500"
      />

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
        className="mt-8 w-full h-[600px] relative overflow-hidden"
      >
        <motion.div style={{ y: parallax }} className="absolute inset-0">
          <Image
            src="/hero-image.webp"
            alt="Hero Image"
            layout="fill"
            className="object-cover rounded-[60px]"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
