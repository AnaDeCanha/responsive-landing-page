"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import WestIcon from "@mui/icons-material/West";
import { Dialog, DialogTitle, Button } from "@headlessui/react";
import { motion, AnimatePresence } from "motion/react";

interface NewsletterProps {
  buttonColor?: string; // Optional prop for button color
  formColor?: string;
}

const Newsletter: React.FC<NewsletterProps> = ({
  buttonColor = "bg-primary text-accent",
  formColor = "bg-light",
}) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);

  const successDialogRef = useRef<HTMLDivElement>(null);
  const errorDialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isErrorDialogOpen) {
      const timer = setTimeout(() => {
        setIsErrorDialogOpen(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isErrorDialogOpen]);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error || "Subscription failed");
      }

      setIsDialogOpen(true);
      setEmail("");
    } catch (error) {
      console.error(error);
      setIsErrorDialogOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div initial="hidden" animate="visible">
      <motion.form
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay: 0.4 },
          },
        }}
        onSubmit={handleSubscribe}
        className="flex flex-col md:flex-row md:space-x-4 md:space-y-0"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={`${formColor} border-accent placeholder-accent w-full p-2 mb-4 md:mb-0 border rounded-md placeholder-opacity-50`}
        />
        <Button
          type="submit"
          disabled={loading}
          className={`${buttonColor} rounded-md  font-bold text-buttonText py-4 px-10  ${
            loading ? "opacity-50 cursor-not-allowed " : "hover:underline"
          }`}
        >
          {loading ? "SENDING..." : "SUBSCRIBE"}
        </Button>
      </motion.form>

      {/* Subscription Confirmation Dialog */}
      <AnimatePresence>
        {isDialogOpen && (
          <Dialog
            open={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black opacity-50"
              aria-hidden="true"
            />
            <motion.div
              ref={successDialogRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative bg-light py-16 px-20 rounded-md shadow-lg max-w-md mx-auto"
            >
              <WestIcon
                fontSize="small"
                className="absolute top-6 left-6 text-accent cursor-pointer"
                onClick={() => setIsDialogOpen(false)}
              />
              <Image
                src="/s-icon.png"
                alt="Logo"
                width={40}
                height={40}
                className="absolute bottom-6 right-6"
              />
              <div>
                <DialogTitle className="text-subheadingDesktop font-semibold text-darkText">
                  ¡Gracias por suscribirte!
                </DialogTitle>
                <p className="text-text mt-2 text-darkText">
                  Please check your email to confirm your subscription. And
                  don’t forget to peek in the spam folder if you don’t see it
                  right away 🥰
                </p>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>

      {/* Error Dialog */}
      <AnimatePresence>
        {isErrorDialogOpen && (
          <Dialog
            open={isErrorDialogOpen}
            onClose={() => setIsErrorDialogOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black opacity-50"
              aria-hidden="true"
            />
            <motion.div
              ref={errorDialogRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative bg-light py-16 px-20 rounded-md shadow-lg max-w-md mx-auto"
            >
              <Image
                src="/s-icon.png"
                alt="Logo"
                width={40}
                height={40}
                className="absolute bottom-6 right-6"
              />
              <div>
                <DialogTitle className="text-subheadingDesktop font-semibold text-darkText">
                  Oops! Something went wrong.
                </DialogTitle>
                <p className="text-text mt-2 text-darkText">
                  There was an issue subscribing. Please try again in a few
                  moments. ¡Gracias!
                </p>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Newsletter;
