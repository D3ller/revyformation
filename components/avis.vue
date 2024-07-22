<script setup lang="ts">
import fs from "fs";

const props = defineProps({
  nom: {
    type: String,
    default: "Anonyme",
  },
  note: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    default: "Aucune description",
  },
})
</script>

<template>
<div class="avis" v-if="note > 4">
  <div class="avis-header">
    <NuxtImg class="rounded-full" :src="'https://placehold.co/40x40?text='+ props.nom.slice(0, 1)" width="40" height="40" :alt="props.nom"/>
    <h3>{{ props.nom }}</h3></div>

  <div class="avis-content">
    <div class="avis-note">
      <span v-for="i in 5" :key="i" :class="i <= props.note ? 'full' : 'empty'">★</span>
    </div>
    <p>{{ props.description.slice(0, 200) }}...</p>
  </div>
</div>
</template>

<style scoped>

</style>