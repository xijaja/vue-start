<script lang="ts" setup>
import { useMeta } from '@/lib/meta'
import { useCounterStore } from '@/stores/counter'

// 设置页面标题和描述
useMeta({
  title: '首页',
  description: '这是首页的描述'
})

const num = useCounterStore()
</script>

<template>
  <div>
    <h1 class="pb-4">这是首页！</h1>
    <button @click="num.count++" class="btn btn-primary">计数器：{{ num.count }}</button>

    <div class="flex gap-2 my-4">
      <input
        type="text"
        class="input input-bordered w-full max-w-xs"
        v-model="num.count"
        placeholder="请输入"
      />
      <button class="btn">按钮啊</button>
    </div>
  </div>
</template>
