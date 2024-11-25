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
    <nav className="fixed top-0 left-0 w-full z-50 bg-primary shadow-md">
      <div className="flex justify-between items-center max-w-[1060px] w-full px-8 h-12 mx-auto">
        <Image src="/logo-small.png" alt="Logo" width={40} height={40} />
        <div className="flex space-x-4">
          <Link
            href="#services"
            className="text-accent font-bold text-buttonText py-2 px-4"
          >
            SERVICES
          </Link>
          <Button
            className="text-accent font-bold text-buttonText py-2 px-4"
            onClick={handleContactClick}
          >
            CONTACT
          </Button>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
