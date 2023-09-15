<script setup lang="ts">

import { Dish } from '~/modules/dish-card/types';


interface Props {
  dish: Dish;
}

defineProps<Props>();

</script>

<template>
  <img
    :src="dish.images[0]"
    alt="Dish image"
    class="image"
    @error="event => {event.target.src = '/_nuxt/assets/images/default-restaurant-card-image.png'}"
  >
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

</style>