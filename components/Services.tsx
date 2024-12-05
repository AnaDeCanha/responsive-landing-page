"use client";

import React from "react";
import Image from "next/image";

interface CardProps {
  backgroundImage: string;
  title: string;
  description: string;
  delay?: number;
}

const Card: React.FC<CardProps> = ({ backgroundImage, title, description }) => {
  return (
    <div className="flex flex-col bg-softWhite rounded-xl shadow-lg w-full  min-w-[300px] h-[400px] relative overflow-hidden">
      {/* Full-width Image */}
      <div className="w-full h-[70%] relative">
        <Image
          src={backgroundImage}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Text Container */}
      <div className="p-6">
        <h3 className="text-subheadingMobile font-bold text-darkText mb-2">
          {title}
        </h3>
        <p className="text-text text-darkText">{description}</p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      backgroundImage: "/service-1.webp",
      title: "Custom Illustrations",
      description: "One-of-a-kind artwork for individuals or brands.",
    },
    {
      backgroundImage: "/service-2.webp",
      title: "Brand Identity Design",
      description: "Logos, banners, and visuals for your business.",
    },
    {
      backgroundImage: "/service-3.webp",
      title: "Commissioned Artwork",
      description: "Personalized art for gifts or special projects.",
    },
  ];

  return (
    <section
      className="py-12 px-6 md:px-16 mt-10 mx-auto flex flex-col gap-8"
      id="services"
    >
      {/* Title */}
      <h2 className="text-headingMobile md:text-headingDesktop font-bold text-darkText mb-12">
        What We Create
      </h2>

      {/* Cards */}
      <div className="flex flex-col md:flex-row items-center gap-8  md:overflow-x-auto md:p-12 lg:px-0 scroll-hide">
        {services.map((service, index) => (
          <Card
            key={index}
            backgroundImage={service.backgroundImage}
            title={service.title}
            description={service.description}
            delay={index * 0.2}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
