import React from "react";

export const metadata = {
  title: "Cookie Policy | Ana De Canha",
  description:
    "Learn about how we use cookies to improve your experience on our website.",
};

const CookiePolicy: React.FC = () => {
  return (
    <div className="max-w-[1060px] mx-auto py-12 px-6 md:px-10">
      <h1 className="text-headingMobile md:text-headingDesktop font-bold text-darkText">
        Cookie Policy
      </h1>
      <p className="text-text text-darkText mt-4">
        This is the placeholder text for your Cookie Policy. Please update it
        with your actual cookie policy content.
      </p>
    </div>
  );
};

export default CookiePolicy;
