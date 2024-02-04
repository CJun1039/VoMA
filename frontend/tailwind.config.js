/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{html,js}',
    './src/components/**/*.{html,js}',
    './App.js'
  ],
  theme: {
    extend: {
      colors: {
        'orange-red': '#CC3401'
      },
      backgroundImage: {
        'background-vector': "url('/src/assets/background.jpg')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

