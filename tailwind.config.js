// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Update the content path for the app directory
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      accent: "#5B0D3B",
      primary: "#C99AB6",
      light: "#FFFCF9",
      darkText: "#111111",
    },
    fontFamily: {
      sans: ['"Open Sans"', "sans-serif"],
    },
    fontSize: {
      headingDesktop: ["40px", "1.2"],
      subheadingDesktop: ["24px", "1.5"],
      headingMobile: ["28px", "1"],
      subheadingMobile: ["20px", "1.4"],
      text: ["16px"],
      smallText: ["14px", "1.2"],
      buttonText: ["14px", "1"],
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
