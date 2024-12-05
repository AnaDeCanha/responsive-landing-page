"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Transition } from "@headlessui/react";

const images = [
  { src: "/gallery-1.webp", alt: "Gallery Image 1" },
  { src: "/gallery-2.webp", alt: "Gallery Image 2" },
  { src: "/gallery-3.webp", alt: "Gallery Image 3" },
  { src: "/gallery-4.webp", alt: "Gallery Image 4" },
  { src: "/gallery-5.webp", alt: "Gallery Image 5" },
  { src: "/gallery-6.webp", alt: "Gallery Image 6" },
];

const Gallery: React.FC = () => {
  return (
    <section
      className="py-12 px-6 md:px-16 mt-10 mx-auto flex flex-col gap-8"
      id="gallery"
    >
      {/* Title */}
      <motion.h2
        className="text-headingMobile md:text-headingDesktop font-bold text-darkText mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Our Work
      </motion.h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative w-full h-64 overflow-hidden rounded-3xl shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2, // Staggered animation
              ease: "easeOut",
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              style={{ objectFit: "cover" }}
              className="rounded-3xl"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
