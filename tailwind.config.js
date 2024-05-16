/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'section-title-color': 'var(--01, #7C5DFA)',
        "label-text-color": 'var(--07, #7E88C3)'
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
