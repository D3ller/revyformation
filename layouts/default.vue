<script setup lang="ts">
import Navbar from "~/components/layouts/navbar.vue";
</script>

<template>

<navbar></navbar>

  <main>
    <div class="mt-10">
    <slot></slot>
    </div>
  </main>

<logo-list/>


  <layouts-footer></layouts-footer>


</template>

<style scoped></style>
