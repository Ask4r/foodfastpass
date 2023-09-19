<script setup lang="ts">

const emits = defineEmits<{
  exit: [];
}>();

</script>

<template>
  <header class="header">

    <CrossIcon @click="emits('exit')"/>

    <h2 class="header__title">FoodFastPass</h2>

    <MainLogo class="header__main-logo"/>

  </header>
</template>

<style scoped lang="scss">

.header {
  padding: 2.4rem;

  display: grid;
  grid: auto / 3.2rem max-content 3.6rem;
  place-items: center start;
  gap: 0.8rem;

  box-shadow: 0 32px 64px -12px rgba(54, 54, 171, 0.14);

  &__title {
    color: var(--black-color);
    font: 500 normal 2rem/1 Inter, sans-serif;
  }

  &__main-logo {
    width: 3.6rem;
    height: 3.6rem;
  }
}

</style>