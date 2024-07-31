<script setup lang="ts">
let props = defineProps({
  trueorfalse: {
    type: Boolean,
    default: false,
    required: true,
  },
  title: {
    type: String,
    default: '',
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
    required: true,
  },
  description: {
    type: String,
    default: '',
    required: true,
  },
})
</script>

<template>
<div class="idee" :class="{trueorfalse}">
    <h1 class="mb-10">{{ title }}</h1>
    <h2 class="mb-10">{{ subtitle }}</h2>
    <p>{{ description }}</p>
</div>
</template>

<style scoped>

</style>