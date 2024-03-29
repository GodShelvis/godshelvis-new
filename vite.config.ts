import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { svgBuilder } from './src/plugins/svgBuilder';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    svgBuilder('./src/assets/icon/')
  ],
  resolve: {
    // 忽略后缀名的配置选项, 添加 .vue 选项时要记得原本默认忽略的选项也要手动写入
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  build: {
    outDir: 'ROOT'
  },
  server: {
    proxy: {
      '/bilibili/api': {
        target: 'http://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/bilibili\/api/, '')
      }
    }
  }
})
