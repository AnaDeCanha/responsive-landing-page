import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-auto">
      <div className="flex flex-col items-center justify-center px-4 md:px-16 py-16">
        {/* Title */}
        <h1 className="font-poppins font-bold text-headingMobile md:text-headingDesktop text-left leading-tight w-full px-4">
          <span className="block">Art That Speaks</span>
          <span className="block">to Your Soul</span>
        </h1>

        {/* Image */}
        <div className="relative w-full h-[400px] md:h-[1000px] px-4 md:px-16 mt-8 overflow-hidden rounded-[60px]">
          <Image
            src="/hero-image.webp"
            alt="Hero section artwork"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
