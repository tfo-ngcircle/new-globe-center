const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  darkMode: false,
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
