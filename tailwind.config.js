const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  darkMode: false,
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
      red: colors.red,
      white: colors.white,
      gray: colors.trueGray,
      rose: colors.rose,
    },
    fontFamily: {
      display: ["sofia-pro", "sans-serif"],
      body: ["proxima-nova", "sans-serif"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.375rem",
      "7xl": "4.625rem",
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
      primary: "0 8px 20px 0 rgba(192, 0, 0, 0.3)",
      "primary-sm": "0 4px 10px 0 rgba(192, 0, 0, 0.3)",
    },
    dropShadow: {
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
        lg: "3rem",
        xl: "3rem",
        "2xl": "3rem",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
