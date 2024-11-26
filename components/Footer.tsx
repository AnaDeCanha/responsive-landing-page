"use client";
import React from "react";
import Newsletter from "../components/Newsletter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-accent py-12 px-6 md:px-10">
      <div className=" mx-auto flex flex-col gap-10">
        {/* Newsletter Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-subheadingMobile font-semibold text-accent">
            Subscribe to My Newsletter
          </h2>
          <Newsletter
            buttonColor={"bg-accent text-light"}
            formColor="bg-primary"
          />
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-subheadingMobile font-semibold text-accent">
            Follow Me
          </h2>
          <div className="flex gap-4 md:gap-6 items-center">
            <a
              href="https://github.com/AnaDeCanha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 flex-col"
            >
              <GitHubIcon fontSize="large" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.youtube.com/@AnaDeCanha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 flex-col"
            >
              <YouTubeIcon fontSize="large" />
              <span>YouTube</span>
            </a>
            <a
              href="https://www.instagram.com/anadecanha/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 flex-col"
            >
              <InstagramIcon fontSize="large" />
              <span>Instagram</span>
            </a>
            <a
              href="https://twitter.com/anadecanha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 flex-col"
            >
              <Twitter fontSize="large" className="py-1" />
              <span>Twitter 😜</span>
            </a>
          </div>
          <p className="text-text text-accent mt-4">
            Psst… Don’t forget to follow{" "}
            <a
              href="https://www.instagram.com/ux.pals/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-4"
            >
              @UXPals
            </a>{" "}
            for more UI, UX, and Product Design goodness!
          </p>
        </div>

        {/* Footer Legal Section */}
        <div className="border-t border-accent pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text text-sm text-center md:text-left">
            © Ana De Canha {new Date().getFullYear()}. All Rights Reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="/privacy-policy"
              className="text-accent underline text-sm hover:underline underline-offset-4"
            >
              Privacy Policy
            </a>
            <a
              href="/cookie-policy"
              className="text-accent underline text-sm hover:underline underline-offset-4"
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
