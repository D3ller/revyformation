<script setup lang="ts">
import ArrowRight from "~/components/icon/arrow-right.vue";

defineProps({
  type: {
    type: String,
    required: false,
    default: ''
  },
  to: {
    type: String,
    required: false,
  },
})
</script>

<template>


  <a v-if="!to" :class="type === '' ? 'button' : 'button-' + type">
    <slot></slot><arrow-right v-if="type === 'arrows'"></arrow-right>
  </a>
  <router-link :to="to" v-else-if="to" :class="type === '' ? 'button' : 'button-' + type">
    <slot></slot><arrow-right v-if="type === 'arrows'"></arrow-right>
  </router-link>

</template>

<style scoped>

</style>