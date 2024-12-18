"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { Dialog } from "@headlessui/react";
import WestIcon from "@mui/icons-material/West";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import Image from "next/image";
import { Input, Textarea, Button } from "@headlessui/react";
import { motion } from "framer-motion";

// Utility function for email validation
const isValidEmail = (email: string) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = React.memo(
  ({ isOpen, onClose }) => {
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

    const [loading, setLoading] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState("");

    const handleModalClose = useCallback(() => {
      resetForm();
      onClose();
    }, [onClose]);

    // Click outside to close
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          modalRef.current &&
          !modalRef.current.contains(event.target as Node)
        ) {
          handleModalClose();
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [handleModalClose]);

    const resetForm = () => {
      setFormData({ name: "", email: "", message: "" });
      setFormErrors({ name: "", email: "", message: "" });
      setSubmissionStatus("");
    };

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
      const errors = { name: "", email: "", message: "" };
      let isValid = true;

      if (!formData.name.trim()) {
        errors.name = "Name is required.";
        isValid = false;
      }
      if (!formData.email.trim()) {
        errors.email = "Email is required.";
        isValid = false;
      } else if (!isValidEmail(formData.email)) {
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

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!validateForm()) return;

      setLoading(true);
      try {
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) throw new Error("Failed to send email");
        setSubmissionStatus("success");
      } catch (error) {
        setSubmissionStatus("error");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    return (
      <Dialog
        open={isOpen}
        onClose={handleModalClose}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-softWhite bg-opacity-50"
        />

        {/* Modal content */}
        <div className="fixed inset-0 flex items-center justify-center md:p-4">
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="max-w-[1012px] bg-softWhite flex flex-col justify-center p-8 h-full md:h-[600px] md:p-32 w-full relative md:rounded-3xl shadow-lg text-center"
          >
            <WestIcon
              fontSize="small"
              className="absolute top-6 left-6 text-midnightBlack cursor-pointer"
              onClick={handleModalClose}
            />

            {/* Spinning S-Icon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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
            {submissionStatus !== "success" ? (
              <>
                <h2 className="text-headingMobile font-semiBold my-6 text-deepPurple">
                  Let&apos;s Create Something Amazing Together!
                </h2>
                <form onSubmit={handleSubmit} noValidate>
                  <InputField
                    type="text"
                    name="name"
                    value={formData.name}
                    error={formErrors.name}
                    placeholder="Your Name"
                    onChange={handleChange}
                  />
                  <InputField
                    type="email"
                    name="email"
                    value={formData.email}
                    error={formErrors.email}
                    placeholder="Your Email"
                    onChange={handleChange}
                  />
                  <TextareaField
                    name="message"
                    value={formData.message}
                    error={formErrors.message}
                    placeholder="Your Message"
                    onChange={handleChange}
                  />
                  <Button
                    type="submit"
                    className={`mt-6 block m-auto w-full rounded-3xl border-2 border-deepPurple py-3 px-10 font-bold text-deepPurple ${
                      loading
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:underline"
                    }`}
                    disabled={loading}
                  >
                    {loading ? "SENDING..." : "SEND"}
                  </Button>
                </form>
              </>
            ) : (
              <SuccessMessage />
            )}
          </motion.div>
        </div>
      </Dialog>
    );
  }
);

// Reusable InputField Component Props
interface InputFieldProps {
  type: string;
  name: string;
  value: string;
  error?: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  value,
  error,
  placeholder,
  onChange,
}) => (
  <div className="mb-4">
    <Input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      className="border-deepPurple w-full p-2 pl-5 border rounded-3xl placeholder-opacity-50"
      onChange={onChange}
    />
    {error && <p className="text-red-500 text-left ml-2">{error}</p>}
  </div>
);

interface TextareaFieldProps {
  name: string;
  value: string;
  error?: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  name,
  value,
  error,
  placeholder,
  onChange,
}) => (
  <div className="mb-4">
    <Textarea
      name={name}
      value={value}
      placeholder={placeholder}
      className="border-deepPurple w-full p-2 pl-5 border rounded-3xl placeholder-opacity-50"
      onChange={onChange}
    />
    {error && <p className="text-red-500 text-left ml-2">{error}</p>}
  </div>
);

const SuccessMessage: React.FC = () => (
  <div className="flex flex-col items-center justify-center">
    <h2 className="text-headingMobile font-semiBold my-6 text-deepPurple">
      Thank you for reaching out!
    </h2>
    <p className="text-text leading-normal mb-4">
      Thank you for reaching out! While we review your message, why not follow
      us on social media?
    </p>
    <div className="flex gap-3 md:gap-6 items-center text-deepPurple">
      <SocialLink
        href="https://www.youtube.com/@AnaDeCanha"
        icon={<YouTubeIcon />}
        label="YouTube"
      />
      <SocialLink
        href="https://www.instagram.com/anadecanha/"
        icon={<InstagramIcon />}
        label="Instagram"
      />
      <SocialLink
        href="https://twitter.com/anadecanha"
        icon={<Twitter />}
        label="Twitter"
      />
    </div>
  </div>
);

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 flex-col"
  >
    {icon}
    <span>{label}</span>
  </a>
);

ContactModal.displayName = "ContactModal";
export default ContactModal;
