"use client";
import React from "react";
import Newsletter from "../components/Newsletter";
import { GitHub, YouTube, Instagram, Twitter } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <footer className="bg-softWhite text-midnightBlack py-16 px-6 md:px-16">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
        {/* Main Content Wrapper */}
        <div className="w-full md:w-1/2">
          {/* Newsletter Section */}
          <div className="flex flex-col gap-6">
            <p className="text-text font-regular">
              Stay inspired—subscribe to our updates.
            </p>
            <Newsletter
              buttonColor={"bg-deepPurple text-softWhite"}
              formColor="bg-softWhite"
            />
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col gap-6 mt-12">
            <p className="text-text font-regular">
              Connect with us on social media.
            </p>
            <div className="flex gap-6 items-center">
              <a
                href="https://github.com/AnaDeCanha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 flex-col text-deepPurple"
              >
                <GitHub fontSize="large" />
                <span className="text-text font-regular">GitHub</span>
              </a>
              <a
                href="https://www.youtube.com/@AnaDeCanha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 flex-col text-deepPurple"
              >
                <YouTube fontSize="large" />
                <span className="text-text font-regular">YouTube</span>
              </a>
              <a
                href="https://www.instagram.com/anadecanha/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 flex-col text-deepPurple"
              >
                <Instagram fontSize="large" />
                <span className="text-text font-regular">Instagram</span>
              </a>
              <a
                href="https://twitter.com/anadecanha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 flex-col text-deepPurple"
              >
                <Twitter fontSize="large" />
                <span className="text-text font-regular">Twitter</span>
              </a>
            </div>
            <p className="text-text font-regular mt-6">
              Discover more creative insights by following{" "}
              <a
                href="https://www.instagram.com/ux.pals/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-deepPurple underline underline-offset-4"
              >
                @UXPals
              </a>
              .
            </p>
          </div>
        </div>

        {/* Footer Legal Section */}
        <div className="border-t border-midnightBlack/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text text-sm font-regular text-center md:text-left">
            © SolCraft Studios {new Date().getFullYear()}. All Rights Reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="/privacy-policy"
              className="text-deepPurple underline text-sm font-regular hover:underline underline-offset-4"
            >
              Privacy Policy
            </a>
            <a
              href="/cookie-policy"
              className="text-deepPurple underline text-sm font-regular hover:underline underline-offset-4"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
