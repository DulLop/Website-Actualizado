/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": '"Raleway", sans-serif',
      },
      colors: {
        'dl-gray-dark': '#100F14',
        'dl-gray-light': '#29282E',
        'dl-purple-blue': '#3B48CB',
        'dl-purple-dark': '#252F9C',
      }
    },
  },
  plugins: [],
}

