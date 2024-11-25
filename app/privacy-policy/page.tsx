import React from "react";

export const metadata = {
  title: "Privacy Policy | Ana De Canha",
  description: "Read our privacy policy to learn how we handle your data.",
};

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-[1060px] mx-auto py-12 px-6 md:px-10">
      <h1 className="text-headingMobile md:text-headingDesktop font-bold text-darkText">
        Privacy Policy
      </h1>
      <p className="text-text text-darkText mt-4">
        This is the placeholder text for your Privacy Policy. Please update it
        with your actual privacy policy content.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
