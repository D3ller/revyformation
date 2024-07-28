<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  image: {
    type: Object,
    required: true,
  },
  list: {
    type: Array,
    required: false,
  },
  to: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div class="card">
    <NuxtImg class="card-img" :src="image.img" :alt="image.alt" />
    <div class="card-text">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-subtitle">{{ subtitle }}</p>
    </div>
    <ul class="card-list">
      <li>- Evaluation de départ <tag>OFFERTE</tag></li>
      <li>- Frais administratifs <tag>OFFERTS</tag></li>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>

    <div class="mt-5">
      <buttons :to="to" :type="'secondary'">En savoir plus +</buttons>
    </div>
  </div>
</template>

<style scoped>

</style>