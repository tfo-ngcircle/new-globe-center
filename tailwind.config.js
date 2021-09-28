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
      display: ["Montserrat", "Open Sans", "sans-serif"],
      body: ["Open\\ Sans", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
