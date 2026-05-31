/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        accent: ['"Cormorant Garamond"', "serif"],
        body: ['"PT Serif"', "serif"],
      },
      colors: {
        rus: {
          red: "#A41E22",
          redDark: "#7B1518",
          gold: "#C8962E",
          goldLight: "#E0B45C",
          cream: "#F4E9D0",
          leaf: "#2F5233",
        },
      },
    },
  },
  plugins: [],
};
