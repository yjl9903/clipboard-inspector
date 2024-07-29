import * as path from 'path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import Unocss from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

import Info from 'unplugin-info/vite';
import Analytics from 'unplugin-analytics/vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue/macros'],
      dirs: ['./src/composables/**'],
      vueTemplate: true,
      dts: './src/auto-imports.d.ts'
    }),
    Components({
      dts: './src/components.d.ts'
    }),
    Info(),
    Analytics(),
    Unocss()
  ]
});
