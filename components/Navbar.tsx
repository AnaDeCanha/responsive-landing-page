"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@headlessui/react";
import ContactModal from "./ContactModal";

// Memoize Navbar to prevent unnecessary re-renders
const Navbar: React.FC = React.memo(() => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-softWhite shadow-md rounded-b-3xl">
      <div className="flex justify-between items-center w-full px-4 md:px-16 h-12 mx-auto">
        {/* Combined Logo */}
        <div className="flex items-center">
          <Image
            src="/logo-small.png"
            alt="Logo"
            width={150}
            height={100}
            priority={true} // Only prioritize desktop logo
            className="hidden md:block"
          />
          <Image
            src="/s-icon.png"
            alt="Mobile Logo"
            width={15}
            height={15}
            className="block md:hidden"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4 font-poppins">
          <Link
            href="#services"
            className="text-deepPurple font-semiBold text-buttonText py-2 px-4"
          >
            Services
          </Link>
          <Button
            className="text-deepPurple font-semiBold text-buttonText py-2 px-4"
            onClick={() => setModalOpen(true)} // Inline handler for simplicity
          >
            Contact
          </Button>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </nav>
  );
});

export default Navbar;
