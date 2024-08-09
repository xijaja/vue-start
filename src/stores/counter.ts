import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // 创建一个 ref
  const count = ref(10)
  // 创建一个计算属性
  const doubleCount = computed(() => count.value * 2)
  // 增加方法
  function increment() {
    count.value++
  }
  // 减少方法
  function decrement() {
    count.value--
  }
  // 返回数据和方法
  return { count, doubleCount, increment, decrement }
})
