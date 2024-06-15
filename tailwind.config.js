/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        boat: "url('../src/assets/boat_background.jpeg')",
      },
    },
  },
  plugins: [],
};
