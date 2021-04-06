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
      bgBlockQuote: "#476264",
    },
    extend: {
      keyframes: {
        fade: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        fade: "fade 1.5s ease-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
