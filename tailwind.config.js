/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      'nunito': ['Nunito', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
