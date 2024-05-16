/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#0C0E16",
        grey: "#888EB0",
        white: " #F8F8FB",
        blue: "#7C5DFA",
      },
      fontFamily: {
        "league-spartan": ["League Spartan", "sans-serif"],
      },
      boxShadow: {},
    },
  },
  variants: {},
  plugins: [],
};
