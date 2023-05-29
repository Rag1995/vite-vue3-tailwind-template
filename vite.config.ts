import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Autoprefixer from 'autoprefixer'
import Tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages(),
    Components({
      directoryAsNamespace: true,
      collapseSamePrefixes: true,
      dts: true,
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        'pinia',
        // type import
        {
          from: 'vue-router',
          imports: ['RouteLocationRaw'],
          type: true,
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, './src')}/`,
      '@cp/': `${resolve(__dirname, './src/components')}/`,
    },
    extensions: ['.vue', '.js', '.ts'],
  },
  css: {
    postcss: {
      plugins: [Autoprefixer, Tailwindcss],
    },
  },
})
