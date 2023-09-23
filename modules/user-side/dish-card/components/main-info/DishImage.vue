<script setup lang="ts">

import { Dish } from '~/modules/user-side/menu/types';
import DishCardCross from '~/modules/icons/components/DishCardCross.vue';


defineProps<{
  dish: Dish;
}>();


const hideCard = inject('hideCard');

</script>

<template>
  <div class="container">

    <ImgDefault
      :src="dish.images[0]"
      alt="Dish image"
      class="image"
    />

    <DishCardCross
      class="cross"
      @click="hideCard"
    />

  </div>
</template>

<style scoped lang="scss">

.container {
  position: relative;
}

.image {
  width: calc(100% - 2 * 0.8rem);
  height: 18.5rem;

  margin: .8rem .8rem 0 .8rem;

  background: var(--white-color);
  border-radius: 1.6rem 1.6rem 0.8rem 0.8rem;

  object-fit: cover;
}

.cross {
  position: absolute;
  top: 2rem;
  right: 2rem;
}

</style>