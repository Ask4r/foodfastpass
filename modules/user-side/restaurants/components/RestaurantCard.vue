<script setup lang="ts">

import type { Restaurant } from '~/modules/user-side/restaurants/types';


const props = defineProps<{
  restaurant: Restaurant;
}>();

const backgroundImageCssUrl = `url("${ props.restaurant.photo }")`;

</script>

<template>
  <div
    ref="restaurantCard"
    class="restaurant-card"
  >

    <h3 class="restaurant-card__restaurant-name">
      {{ restaurant.name }}
    </h3>

  </div>
</template>

<style scoped lang="scss">

.restaurant-card {
  width: 100%;
  height: 16rem;

  position: relative;

  background: v-bind(backgroundImageCssUrl) center / cover no-repeat,
  url("/default-restaurant-card-image.png") center / cover no-repeat;

  border-radius: 16px;

  box-shadow: 0 4px 8px -2px rgba(54, 54, 171, 0.10),
  0 2px 4px -2px rgba(54, 54, 171, 0.06);

  &__restaurant-name {
    margin: 0;
    padding: 1.2rem 1.6rem;

    position: absolute;
    bottom: 0;
    left: 0;

    color: #000;
    font-family: Inter, serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;

    background-color: var(--white-color);
    border-radius: 0 8px 0 16px;
  }
}

</style>
