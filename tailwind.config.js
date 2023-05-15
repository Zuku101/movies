/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.{vue,js,ts,jsx,tsx}",
    "./templates/**/*.{html,twig}"
  ],
  theme: {
    extend: {
      padding: {
        '1/3': '33.33333%',
        '2/3': '66.66667%',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}

