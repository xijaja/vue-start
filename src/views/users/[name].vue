<script lang="ts" setup>
import { useRoute } from 'vue-router'

const { params } = useRoute() // 获取路由参数
const name = params.name
</script>

<template>
  <p>用户名：{{ name }}</p>
</template>
