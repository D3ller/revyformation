<script setup lang="ts">
import Navbar from "~/components/layouts/navbar.vue";
</script>

<template>
  <body class="overflow-x-hidden">
<navbar></navbar>

  <main>
    <div class="mt-10">
    <slot></slot>
    </div>
  </main>

  <layouts-footer></layouts-footer>
  </body>


</template>

<style scoped></style>
