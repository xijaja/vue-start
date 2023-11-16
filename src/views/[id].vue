<script lang="ts" setup>
import { useRoute } from 'vue-router';

const { params } = useRoute(); // 获取路由参数
const id = params.id;
</script>

<template>
  <section>
    <p>{{ id }}</p>
  </section>
</template>
