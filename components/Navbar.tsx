"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@headlessui/react";
import ContactModal from "./ContactModal";

const Navbar: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleContactClick = () => {
    setModalOpen(true);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-softWhite shadow-md rounded-b-3xl">
      <div className="flex justify-between items-center w-full px-4 md:px-16 h-12 mx-auto">
        <div className="flex items-center">
          <div className="block md:hidden px-4">
            {/* Mobile Logo */}
            <Image
              src="/s-icon.png"
              priority={true}
              alt="Mobile Logo"
              width={15}
              height={15}
            />
          </div>
          <div className="hidden md:block">
            {/* Desktop Logo */}
            <Image
              src="/logo-small.png"
              priority={true}
              alt="Logo"
              width={150}
              height={100}
            />
          </div>
        </div>

        <div className="flex space-x-4 font-poppins">
          <Link
            href="#services"
            className="text-deepPurple font-semiBold text-buttonText py-2 px-4"
          >
            Services
          </Link>
          <Button
            className="text-deepPurple font-semiBold text-buttonText py-2 px-4"
            onClick={handleContactClick}
          >
            Contact
          </Button>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
