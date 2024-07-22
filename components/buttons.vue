<script setup lang="ts">
import ArrowRight from "~/components/icon/arrow-right.vue";

defineProps({
  type: {
    type: String,
    default: "primary",
  },
  to: {
    type: String,
    default: "",
  },
})
</script>

<template>
  <a class="button" v-if="type === 'primary'">
    <slot></slot>
  </a>
  <router-link class="button-border" to="" v-if="type === 'border'">
    <slot></slot>
  </router-link>

  <a class="button-secondary" v-if="type === 'secondary'">
    <slot></slot>
  </a>

  <a class="button-arrows" v-if="type === 'arrow'">
    <slot></slot><arrow-right></arrow-right>
  </a>

</template>

<style scoped>

</style>