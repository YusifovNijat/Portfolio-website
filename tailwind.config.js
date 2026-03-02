/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1C0770",
        primary: "#261CC1",
        sky: "#3A9AFF",
        lime: "#F1FF5E",
      },
    },
  },
  plugins: [],
};