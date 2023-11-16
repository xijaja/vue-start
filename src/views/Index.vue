<script lang="ts" setup>
const cont = ref(0)
const value = ref('')
</script>

<template>
  <div>
    <h1 class="pb-4">这是首页！</h1>
    <button @click="cont++" class="btn btn-primary">
      计数器：{{ cont }}
    </button>

    
    <div class="flex gap-2 my-4">
      <input type="text" class="input input-bordered w-full max-w-xs" v-model="value" placeholder="请输入" />
      <button class="btn">按钮啊</button>
    </div>
  </div>
</template>
