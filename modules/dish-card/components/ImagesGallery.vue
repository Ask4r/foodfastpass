<script setup lang="ts">

import { Dish } from '~/modules/dish-card/types';


interface Props {
  dish: Dish;
}

defineProps<Props>();

</script>

<template>
  <div class="images">

    <img
      v-for="image in dish.images"
      :key="image"
      :src="image"
      alt="Image"
      class="images__image"
    >

  </div>
</template>

<style scoped lang="scss">

.images {
  width: 100%;
  height: 80%;

  margin: 0.5rem;

  display: grid;
  grid: 2fr 1fr / 1fr 1fr;
  grid-template-areas:
    "first first"
    "second third";
  gap: 0.5rem;

  :nth-child(1) { grid-area: first }
  :nth-child(2) { grid-area: second }
  :nth-child(3) { grid-area: third }

  &__image {
    width: 100%;
    height: 100%;

    border-radius: 1.5rem;

    object-fit: cover;
  }
}

</style>