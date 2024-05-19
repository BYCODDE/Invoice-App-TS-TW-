/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#0C0E16",
        blackTwo:"#252945",
        grey: "#888EB0",
        white: " #F8F8FB",
        whiteTwo: "#FFF",
        blue: "#7C5DFA",
        whiter: "#FFF",
        sky: "#7E88C3",
        skyTwo: "#858BB2",
        green: "#33D69F",
        yellow: "#FF8F00",
        Draft: "#373B53",
      },
      fontFamily: {
        "league-spartan": ["League Spartan", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 10px 10px -10px rgba(72, 84, 159, 0.10)",
        custom2: "0px 10px 20px 0px rgba(72, 84, 159, 0.25)",
      },
    },
  },
  variants: {},
  plugins: [],
  darkMode: "class",
};
