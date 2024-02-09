/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{html,js}',
    './src/components/**/*.{html,js}',
    './App.js',
    './node_modules/@uc-react-ui/multiselect/**/*.{js,ts,jsx,tsx}'
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

