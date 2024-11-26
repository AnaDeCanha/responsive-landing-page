"use client";

import React from "react";
import Card from "./Card";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import GestureIcon from "@mui/icons-material/Gesture";
import ExploreIconOutlined from "@mui/icons-material/ExploreOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";

const Services: React.FC = () => {
  const services = [
    {
      icon: (
        <LaptopMacIcon
          fontSize="inherit"
          className="text-primary"
          style={{ fontSize: "80px" }}
        />
      ),
      title: "Frontend Development",
      description: "Building Together for a Better Web",
    },
    {
      icon: (
        <GestureIcon
          fontSize="inherit"
          className="text-primary"
          style={{ fontSize: "80px" }}
        />
      ),
      title: "UX Design Enthusiast",
      description: "Creating Delightful User Experiences",
    },
    {
      icon: (
        <ExploreIconOutlined
          fontSize="inherit"
          className="text-primary"
          style={{ fontSize: "80px" }}
        />
      ),
      title: "Time Mastery Coaching",
      description: "Unlock Your Productivity Potential",
    },
    {
      icon: (
        <QuestionAnswerOutlinedIcon
          fontSize="inherit"
          className="text-primary"
          style={{ fontSize: "80px" }}
        />
      ),
      title: "Language Learning Guidance",
      description: "Embark on a Multilingual Journey",
    },
  ];

  return (
    <section
      className="py-12 px-6 md:px-10 mx-auto flex flex-col gap-8"
      id="services"
    >
      <h2 className="text-headingMobile md:text-headingDesktop font-bold text-darkText mb-8">
        How I Can Help You
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            icon={service.icon}
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
