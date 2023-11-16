import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import ViteComponents from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), // vue3
    Pages({
      dirs: [{ dir: 'src/views', baseRoute: '/' }],
      importMode: 'async',
      extendRoute(route) {
        // if (route.path === '/') return { ...route, redirect: '/home' } // 首页重定向
        if (route.path === '/:id') route.path = '/:id(\\d+)'  // 给动态路由添加正则，仅限数字
        if (route.path === '/users/:name') route.path = '/users/:name([a-zA-Z0-9]+)'  // 给动态路由添加正则，仅限数字和字母
        // console.log(route)
        return route // 其他情况，返回路由
      }
    }), // 自动导入路由
    AutoImport({
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/auto-imports.d.ts',
      imports: ['vue', 'vue-router']
    }), // 自动导入依赖
    ViteComponents({
      dts: 'src/components.d.ts',
      resolvers: [VantResolver()]
    }) // 自动导入组件
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
