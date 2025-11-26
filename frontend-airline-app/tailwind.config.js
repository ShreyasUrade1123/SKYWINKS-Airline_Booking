/** @type {import('tailwindcss').Config} */
export default {
  // IMPORTANT: 'class' mode requires a 'dark' class on the HTML tag to activate.
  // It will NOT respect system preferences automatically, which is what we want for a manual toggle.
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fluro': ['Fluro', 'sans-serif'],
        'neue-haas': ['Neue-Haas-Grotesk-Roman', 'sans-serif'],
      }
    },
  },
  plugins: [],
}