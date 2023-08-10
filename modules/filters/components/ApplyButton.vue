<script setup lang="ts">

</script>

<template>
  <button class="button">
    Apply
  </button>
</template>

<style scoped lang="scss">

.button {
  width: 100%;

  padding: 1.2rem 1.4rem;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  color: var(--white-color);
  background: var(--dark-color);

  border: none;
  border-radius: 0.8rem;

  font: 500 normal 1.6rem/1.5 Inter, sans-serif;

  transition: all .2s ease;

  &:active {
   background: var(--primary-color);
  }
}

</style>