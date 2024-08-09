<script setup lang="ts">
import { apiPath, callApi } from '@/lib/apis'

async function GetUserList() {
  const res = await callApi.get(apiPath.getUserList)
  console.log(res)
}
</script>

<template>
  <div>TheWelcome</div>
  <button @click="GetUserList">GetUserList</button>
</template>
