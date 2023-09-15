<script setup lang="ts">

withDefaults(
  defineProps<{
    src: string | undefined;
    alt?: string;
    defaultSrc?: string;
  }>(),
  {
    defaultSrc: '/_nuxt/assets/images/default-restaurant-card-image.png',
  },
);

</script>

<template>
  <img
    :src="src ?? defaultSrc"
    :alt="alt"
    @error="event => {event.target.src = defaultSrc}"
  >
</template>

<style scoped lang="scss">

</style>