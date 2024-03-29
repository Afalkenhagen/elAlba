/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [
    require('tailwindcss-animated'),
    require('@tailwindcss/aspect-ratio'),
    require('daisyui')
  ],
}

