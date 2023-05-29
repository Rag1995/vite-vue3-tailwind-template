const plugin = require('tailwindcss/plugin')
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
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
