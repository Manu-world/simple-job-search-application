/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx, css, js}"],
  theme: {
    extend: {
      screens: {
        md: "769px",
      },
    },
  },
  plugins: [],
};
