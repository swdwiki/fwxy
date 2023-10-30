/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './docs/.vitepress/**/*.{vue,js,ts}',
    './docs/**/*.md',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        teal: colors.teal,
      },
      spacing: {
        160: '40rem',
        200: '50rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}