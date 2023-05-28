const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        comf: ["Comfortaa", "sans-serif"],
        lora: ["Lora", "serif"],
        nun: ["Nunito", "sans-serif"],
        libre: ["Libre Baskerville", "serif"],
        monte: ["Montserrat", "sans-serif"],
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
    },
    fontSize: {
      "2xsm": "10px",
      xsm: "12px",
      sm: "14px",
      reg: "16px",
      lg: "18px",
      "2xl": "22px",
      "3xl": "25px",
      "4xl": "32px",
      "5xl": "40px",
      "6xl": "50px",
      "7xl": "70px",
    },
  },
  plugins: [],
};
