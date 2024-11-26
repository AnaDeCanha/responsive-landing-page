"use client";
import React, { useEffect, useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import WestIcon from "@mui/icons-material/West";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import Image from "next/image";
import { Input, Textarea, Button } from "@headlessui/react";
import { motion, AnimatePresence } from "motion/react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState({ error: "" });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required.";
      isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message cannot be empty.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setIsSubmitted(true);
      setSubmissionStatus({ error: "" });
    } catch (error) {
      setSubmissionStatus({ error: "Something went wrong. Please try again." });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleForClose = () => {
    onClose();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setTimeout(() => setIsSubmitted(false), 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50"
          />

          {/* Modal content */}
          <div className="fixed inset-0 flex items-center justify-center md:p-4">
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-[1012px] bg-light flex flex-col justify-center p-8 h-full md:h-[600px] md:p-32 w-full relative md:rounded-3xl shadow md:shadow-lg text-center"
            >
              <WestIcon
                fontSize="small"
                className="absolute top-6 left-6 text-midnightBlack cursor-pointer"
                onClick={handleForClose}
              />

              {/* Heart Icon with Spinning Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-6 right-6"
              >
                <Image
                  src="/s-icon.png"
                  alt="Logo"
                  width={15}
                  height={15}
                  className={loading ? "animate-spin-slow" : ""}
                />
              </motion.div>

              {/* Main Content */}
              {!isSubmitted ? (
                <>
                  <h2 className="text-subheadingMobile text-deepPurple md:text-subheadingDesktop font-semiBold my-6 text-deepPurple">
                    Let&apos;s Create Something Amazing Together!
                  </h2>
                  <form onSubmit={handleFormSubmit} noValidate>
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full p-3 mb-4 border-3xl rounded-3xl bg-light border-deepPurple placeholder-accent placeholder-opacity-50"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-sm">
                          {formErrors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full p-3 mb-4 rounded-3xl bg-light border-deepPurple placeholder-accent placeholder-opacity-50"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-sm">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        className="w-full p-3 mb-4  h-32 rounded-3xl bg-light border-deepPurple placeholder-accent placeholder-opacity-50"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      ></Textarea>
                      {formErrors.message && (
                        <p className="text-red-500 text-sm">
                          {formErrors.message}
                        </p>
                      )}
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button
                        type="submit"
                        className={`block m-auto md:w-auto rounded-[60px] border-2 border-deepPurple text-deepPurple font-bold text-buttonText py-4 px-10 w-full ${
                          loading
                            ? "opacity-50 cursor-not-allowed "
                            : "hover:underline"
                        }`}
                        disabled={loading}
                      >
                        {loading ? "SENDING..." : "SEND"}
                      </Button>
                    </motion.div>
                  </form>
                  {submissionStatus.error && (
                    <p className="text-red-500 text-center mt-4">
                      {submissionStatus.error}
                    </p>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-subheadingMobile md:text-subheadingDesktop font-semiBold my-6 text-deepPurple">
                    Thank you for reaching out!
                  </h2>
                  <p className="text-text leading-normal mb-4">
                    Thank you for reaching out! While we review your message,
                    why not follow us on social media for updates, inspiration,
                    and behind-the-scenes fun?
                  </p>
                  <div className="flex gap-3 md:gap-6 items-center text-deepPurple">
                    <a
                      href="https://www.youtube.com/@AnaDeCanha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 flex-col  "
                    >
                      <YouTubeIcon fontSize="large" />
                      <span>YouTube</span>
                    </a>
                    <a
                      href="https://www.instagram.com/anadecanha/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 flex-col  "
                    >
                      <InstagramIcon fontSize="large" />
                      <span>Instagram</span>
                    </a>
                    <a
                      href="https://twitter.com/anadecanha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 flex-col  "
                    >
                      <Twitter fontSize="large" className="py-1" />
                      <span>Twitter</span>
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
