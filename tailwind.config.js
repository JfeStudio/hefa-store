/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      container: {
        // center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        indidog: "#7126B5",
        "soft-indidog": "#E2D4F0",
      },
      backgroundImage: {
        "hero-mosque": "url('/images/bg-hero.png')",
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    require("prettier-plugin-tailwindcss"),
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      addComponents({
        ".bg-hover": {
          backgroundColor: "#1e293b",
          "&:hover": {
            backgroundColor: "#111",
          },
        },
      });
    }),
  ],
};
