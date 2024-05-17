/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "section-title-color": "var(--01, #7C5DFA)",
        "label-text-color": "var(--07, #7E88C3)",
      },
      backgroundImage: {
        "gradient-to-bottom":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.10) 100%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
