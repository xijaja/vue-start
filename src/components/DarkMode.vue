<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  attribute: 'data-theme',
  valueLight: 'light',
  valueDark: 'dark'
})
const toggleMode = useToggle(isDark)
</script>

<template>
  <button @click="toggleMode()" class="text-2xl">
    <span v-if="isDark"><Icon icon="line-md:sunny-outline-to-moon-loop-transition" /></span>
    <span v-else><Icon icon="line-md:moon-to-sunny-outline-transition" /></span>
  </button>
</template>
