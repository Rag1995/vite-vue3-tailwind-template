const plugin = require('tailwindcss/plugin')
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {},
    container: {
      center: true,
      padding: '2rem',
      screens: {},
    },
    extend: {},
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('current', '&.active')
      addVariant('link-active', '&.router-link-active')
      addVariant('link-exact', '&.router-link-exact-active')
    }),
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(['mdi', 'ic']),
    }),
  ],
}
