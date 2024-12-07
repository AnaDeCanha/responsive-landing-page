"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "SolCraft Studios turned our vision into reality! The custom illustrations they created for our book cover were beyond our expectations. Stunning work!",
    author: "– Emma Turner, Author",
  },
  {
    text: "Working with SolCraft Studios was a game-changer. Their branding assets elevated our company’s identity, and we couldn’t be happier with the results.",
    author: "– Liam Harris, Startup Founder",
  },
  {
    text: "The character designs for our app were incredible. SolCraft captured the playful energy we wanted perfectly, and their team was a delight to work with!",
    author: "– Sophia Chang, Mobile App Developer",
  },
  {
    text: "Their attention to detail and creativity are unmatched. The personalized artwork they created for our anniversary gift brought tears to my eyes!",
    author: "– Lucas Bennett, Satisfied Client",
  },
  {
    text: "SolCraft Studios made the entire process seamless and fun. Their collaborative approach ensured our project felt truly unique.",
    author: "– Maya Patel, Creative Director",
  },
];

const Collaboration: React.FC = () => {
  return (
    <section
      className="py-12 px-6 md:px-16 mt-10 mx-auto flex flex-col gap-8"
      id="collaboration"
    >
      {/* Title */}
      <motion.h2
        className="text-headingMobile md:text-headingDesktop font-bold text-darkText mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Partnering with Visionaries
      </motion.h2>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Text Section */}
        <motion.div
          className="flex flex-col gap-6 w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col gap-2">
              <p className="text-text text-darkText">{testimonial.text}</p>
              <p className="text-smallText font-bold text-darkText italic">
                {testimonial.author}
              </p>
              {/* Divider */}
              {index !== testimonials.length - 1 && (
                <hr className="border-t border-darkText my-4 opacity-50" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 h-[500px] md:h-auto relative rounded-3xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          <Image
            src="/collab.webp"
            alt="Collaboration Illustration"
            fill
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Collaboration;
