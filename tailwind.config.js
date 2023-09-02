/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Montserrat", "sans-serif"],
        secondary: ["Manrope", "sans-serif"],
      },
      colors: {
        primary: "#1B1D1B",
        secondary: "#202321",
        accent: "#5B86A1",
        light: "#F7FBFB",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
