const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["sofia-pro", "sans-serif"],
      body: ["proxima-nova", "sans-serif"],
    },
    dropShadow: {
      md: "0 8px 20px rgba(0, 0, 0, 0.4)",
      white: "0 -4px 8px rgba(255, 255, 255, 0.5)",
      none: "none",
      primary: "0 8px 20px rgba(192, 0, 0, 0.4)",
      "primary-sm": "0 4px 10px rgba(192, 0, 0, 0.4)",
      secondary: "0 8px 20px rgba(27, 58, 97, 0.4)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "5rem",
        xl: "6rem",
        "2xl": "7rem",
      },
    },
    extend: {
      colors: {
        primary: {
          light: "#d63e42",
          DEFAULT: "#c00000",
        },
        secondary: {
          DEFAULT: "#1b3a61",
        },
        transparent: "transparent",
        current: "currentColor",
        black: "#03090f",
      },
      fontSize: {
        xxs: ".6rem",
        "6xl": "3.375rem",
        "7xl": "4.625rem",
      },
      screens: {
        "3xl": "1601px",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        primary: "0 8px 20px 0 rgba(192, 0, 0, 0.3)",
        "primary-sm": "0 4px 10px 0 rgba(192, 0, 0, 0.3)",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
};
