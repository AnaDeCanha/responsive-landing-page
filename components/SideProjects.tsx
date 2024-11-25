"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const SideProjects: React.FC = () => {
  const projects = [
    {
      title: "YouTube Channel",
      subtitle: "Life, Learning, and Everything I Love",
      description: (
        <>
          Check out my YouTube channel where I share my day-to-day life and
          everything I learn about the digital world and the things I love.
          It&apos;s a mix of personal stories and professional insights—all in
          Spanish.{" "}
          <Link
            href="https://www.youtube.com/@AnaDeCanha"
            target="_blank"
            className="text-accent underline underline-offset-4"
          >
            Take a look!
          </Link>
        </>
      ),
      imageUrl: "/youtube-banner.jpg",
    },
    {
      title: "UX Pals on Instagram",
      subtitle: "Join the Design Journey",
      description: (
        <>
          Follow{" "}
          <Link
            href="https://www.instagram.com/ux.pals/"
            target="_blank"
            className="text-accent underline underline-offset-4"
          >
            @UXPals
          </Link>{" "}
          on Instagram, where I share everything I learn about UI, UX, and
          Product Design. It&apos;s a space for fellow design lovers to grow
          together—all content is in Spanish.
        </>
      ),
      imageUrl: "/uxpals-banner.jpg",
    },
  ];

  return (
    <section className="max-w-[1060px] mx-auto py-12 px-6 md:px-10 flex flex-col ">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-headingMobile md:text-headingDesktop font-bold text-darkText text-left"
      >
        Peek Into My World
      </motion.h2>

      {/* Project Cards */}
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start bg-transparent gap-6 py-6"
        >
          {/* Text Content */}
          <div className="flex-1 flex flex-col gap-4 py-4">
            <h3 className="text-subheadingMobile md:text-subheadingDesktop font-semibold text-accent">
              {project.title}
            </h3>
            <p className="text-text italic text-darkText">{project.subtitle}</p>
            <p className="text-text text-darkText">{project.description}</p>
          </div>

          {/* Image Content */}
          <motion.div
            className="flex-1 w-full h-full py-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={300}
              height={200}
              className="w-full object-cover rounded-2xl"
            />
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
};

export default SideProjects;
