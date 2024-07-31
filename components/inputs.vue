<script setup lang="ts">
let props = defineProps({
  type: {
    type: String,
    default: 'text',
    required: false,
  },
  placeholder: {
    type: String,
    default: '',
    required: false,
  },
  value: {
    type: String,
    default: '',
    required: false,
  },
  inputortextarea: {
    type: Boolean,
    default: true,
    required: false,
  },
  label: {
    type: String,
    default: '',
    required: false,
  },
})

let emit = defineEmits(['update:value'])
</script>

<template>

  <input class="input" :type="type" :placeholder="placeholder" :value="value" @input="emit('update:value', $event.target.value)" v-if="inputortextarea">
  <textarea class="input" :placeholder="placeholder" :value="value" @input="emit('update:value', $event.target.value)" v-else></textarea>
</template>

<style scoped>

</style>