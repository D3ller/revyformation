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
  href: {
    type: String,
    required: false,
  }
})
</script>

<template>
  <button v-if="type === 'submit'" class="button" type="submit">
    <slot></slot>
  </button>

  <template v-else>
    <a v-if="!to" :href="href" :class="type === '' ? 'button' : 'button-' + type">
      <slot></slot>
      <arrow-right v-if="type === 'arrows'"></arrow-right>
    </a>
    <router-link v-else :to="to" :class="type === '' ? 'button' : 'button-' + type">
      <slot></slot>
      <arrow-right v-if="type === 'arrows'"></arrow-right>
    </router-link>
  </template>

</template>

<style scoped>

</style>