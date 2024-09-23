import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [vue(), AutoImport({
    imports: [
      'vue',
      '@vueuse/core',
      'vitest',
    ],
    dts: 'src/auto-imports.d.ts',
    dirs: [
      'src/stores',
    ],
    vueTemplate: true,
  }), Components({
    extensions: ['vue'],
    include: [/\.vue$/, /\.vue\?vue/],
    dts: 'src/components.d.ts',
  }), vueDevTools(
    // 根据需求修改
    { launchEditor: 'code' },
  )],

})
