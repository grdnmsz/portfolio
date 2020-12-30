const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      emerald: colors.emerald,
      gray: colors.gray,
      teal: colors.teal,
      purple: colors.purple,
      orange: colors.orange,
      headerColor: "#1e3b3b",
      backgroundColor: "#335355",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
