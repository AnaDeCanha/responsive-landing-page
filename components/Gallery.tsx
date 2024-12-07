"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/gallery-1.webp", alt: "Gallery Image 1" },
  { src: "/gallery-2.webp", alt: "Gallery Image 2" },
  { src: "/gallery-3.webp", alt: "Gallery Image 3" },
  { src: "/gallery-4.webp", alt: "Gallery Image 4" },
  { src: "/gallery-5.webp", alt: "Gallery Image 5" },
  { src: "/gallery-6.webp", alt: "Gallery Image 6" },
  { src: "/gallery-7.webp", alt: "Gallery Image 7" },
  { src: "/gallery-8.webp", alt: "Gallery Image 8" },
];

const rows = [
  [0, 1], // Row 1: Two images
  [2, 3, 4], // Row 2: Three images
  [5, 6, 7], // Row 3: Three images
];

const Gallery: React.FC = () => {
  return (
    <section
      className="py-12 px-6 md:px-16 mt-10 mx-auto flex flex-col gap-8"
      id="gallery"
    >
      {/* Gallery Grid */}
      <div className="flex flex-col gap-6">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-4">
            {row.map((imageIndex, idx) => (
              <motion.div
                key={imageIndex}
                className={`relative flex-1 overflow-hidden rounded-3xl shadow-lg ${
                  idx === 0 && rowIndex % 2 === 0
                    ? "md:min-h-[600px]"
                    : "md:min-h-[400px]"
                } min-h-[300px]`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: imageIndex * 0.2, // Staggered animation
                  ease: "easeOut",
                }}
              >
                <Image
                  src={images[imageIndex].src}
                  alt={images[imageIndex].alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-3xl"
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
