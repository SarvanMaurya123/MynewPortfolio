/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',

  theme: {
    extend: {
      boxShadow: {
        'glass-soft': '0 12px 30px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}