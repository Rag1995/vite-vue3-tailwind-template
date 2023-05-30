const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
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
    extend: {
      colors: {
        light: {
          DEFAULT: colors.zinc[100],
          primary: colors.blue[500],
          secondary: colors.gray[500],
          success: colors.green[500],
          danger: colors.red[500],
          warning: colors.yellow[500],
          info: colors.cyan[500],
        },
        dark: {
          DEFAULT: colors.zinc[900],
          primary: colors.blue[300],
          secondary: colors.gray[300],
          success: colors.green[300],
          danger: colors.red[300],
          warning: colors.yellow[300],
          info: colors.cyan[300],
        },
      },
    },
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
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
