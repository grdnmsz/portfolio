const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    options: { safelist: ["pt-3"] },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      emerald: colors.emerald,
      gray: colors.gray,
      teal: colors.teal,
      purple: colors.purple,
      orange: colors.orange,
      cyan: colors.cyan,
      headerColor: "#1e3b3b",
      backgroundColor: "#335355",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
