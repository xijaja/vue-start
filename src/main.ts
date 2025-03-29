import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import routers from "virtual:generated-pages"

// 创建应用
const app = createApp(App)

// 使用 Pinia 状态管理
app.use(createPinia())

// 使用路由
const router = createRouter({
  history: createWebHistory(),
  routes: routers
})
router.beforeEach((to, _from, next) => {
  // 设置标题
  document.title = to.meta.title as string || 'VueStarter';
  // 设置描述
  const description = document.querySelector('meta[name="description"]');
  description?.setAttribute('content', to.meta.description as string || 'VueStarter');
  next();
});
app.use(router)

// 挂载应用
app.mount('#app')
