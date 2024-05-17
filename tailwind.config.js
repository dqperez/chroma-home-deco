/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      },
    colors:{
      'main': "#365649", //
      'sub': "#808080", //      
      'secondary': "#E0E0E0", //
      'white': "#FFFFFF",
      'gray': "#BDBDBD", //
      'disabled': "#F5F5F5", //
      'red': "#ED2121", //
      'yellow': "#F2C94C", //
      'green': "#27AE60", //
      'accent': "#488E6D",
    },
  },
  plugins: [],
}

