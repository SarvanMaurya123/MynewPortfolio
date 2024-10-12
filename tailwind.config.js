/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',

  theme: {
    extend: {
      'custom-left': '10px 10px 15px black',
    },
  },
  plugins: [],
}