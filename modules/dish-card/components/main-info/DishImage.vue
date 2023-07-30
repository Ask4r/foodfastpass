<script setup lang="ts">

import { Dish } from '~/modules/dish-card/types';


interface Props {
  dish: Dish;
}

defineProps<Props>();

</script>

<template>
  <picture class="picture">
    <source :srcset="dish.images[0]">
    <img
      src="~/assets/images/default-restaurant-card-image.png"
      alt="Dish image"
      class="image"
    >
  </picture>
</template>

<style scoped lang="scss">

.image {
  width: calc(100% - 2 * 0.8rem);
  height: 18.5rem;

  margin: .8rem .8rem 0 .8rem;

  background: var(--white-color);
  border-radius: 1.6rem 1.6rem 0.8rem 0.8rem;

  object-fit: cover;
}

.picture {
  min-height: 10rem;
  background: var(--white-color);
}

</style>