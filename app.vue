<template>
<NuxtLayout>
  <NuxtPage/>
</NuxtLayout>
</template>

<script setup>
const width = ref(0);
const height = ref(0);
const breakpoint = ref('');
const breakpoints = {
  sm: '100%',
  md: 768,
  lg: 992,
  xl: 1440,
};

const updateContainerSize = () => {
  const el = document.documentElement;
  width.value = el.clientWidth;
  height.value = el.clientHeight;
  updateBreakpoint();
};

const updateBreakpoint = () => {
  const widthValue = width.value;
  if (widthValue >= breakpoints.xl) {
    breakpoint.value = 'xl';
  } else if (widthValue >= breakpoints.lg) {
    breakpoint.value = 'lg';
  } else if (widthValue >= breakpoints.md) {
    breakpoint.value = 'md';
  } else {
    breakpoint.value = 'sm';
  }
  console.log(breakpoint.value);
};

onMounted(() => {
  updateContainerSize();
  window.addEventListener('resize', updateContainerSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateContainerSize);
});
</script>