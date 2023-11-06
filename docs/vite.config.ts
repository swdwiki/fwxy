import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path';

export default defineConfig({
  build:{
    chunkSizeWarningLimit: 1000,
  },
  plugins: [
    Components({
      dirs: ['.vitepress/theme/components'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [ArcoResolver({ sideEffect: true, resolveIcons: true })]
    }),
  ],
  ssr: { noExternal: ['@arco-design/web-vue'] },
  resolve: {
    alias: {
      'mermaid': 'mermaid/dist/mermaid.esm.mjs',
      '@': resolve(__dirname, './docs/img'), // 把 @ 指向到 src 目录去
    },
  },
});
