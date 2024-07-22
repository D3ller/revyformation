<script setup lang="ts">
defineProps({
  direction: {
    type: Boolean,
    required: true,
  }
})
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none" class="chevron" :class="direction ? 'reverse' : ''">
    <path d="M3.5 4.5L6.5 7.5L9.5 4.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<style scoped>

</style>