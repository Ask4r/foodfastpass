<script setup lang="ts">

import { Dish } from '~/modules/user-side/menu/types';


defineProps<{
  dish: Dish;
}>();

</script>

<template>
  <ImgDefault
    :src="dish.images[0]"
    alt="Dish image"
    class="image"
  />
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