// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Update the content path for the app directory
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      sunsetOrange: "#FF6F3C",
      deepPurple: "#7D3C98",
      brightYellow: "#FFD400",
      midnightBlack: "#1A1A1A",
      softWhite: "#FAFAFA",
    },
    fontFamily: {
      poppins: ['"Poppins"', "sans-serif"],
      roboto: ['"Roboto"', "sans-serif"],
    },
    fontSize: {
      headingDesktop: ["120px", "116px"],
      subheadingDesktop: ["96px", "96px"],
      text: ["16px", "24px"],
      smallText: ["14px", "20px"],
      buttonText: ["16px", "1"],
      headingMobile: ["48px", "46px"],
      subheadingMobile: ["32px", "32px"],
    },
    fontWeight: {
      regular: "400",
      semiBold: "600",
      bold: "700",
    },
    extend: {
      ringColor: {
        DEFAULT: "#C99AB6", // Your primary color for focus
      },
      ringWidth: {
        DEFAULT: "2px",
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ["focus"],
      ringColor: ["focus"],
    },
  },
  plugins: [],
};
