<script setup lang="ts">

import type { Dish } from '~/modules/user-side/menu/types';


defineProps<{
  dish: Dish;
  isActive: boolean;
}>();

</script>

<template>
  <div class="dish" v-show="isActive">

    <ImgDefault
      :src="dish.images[0]"
      :alt="dish.name"
      class="dish__image"
    />

    <p class="dish__food-name">
      {{ dish.name }}
    </p>

    <div class="dish__bottom-info">

      <SpecialPropertyPlate :dish="dish"/>

      <p class="dish__price">
        {{ dish.price }}
      </p>

    </div>

  </div>
</template>

<style scoped lang="scss">

.dish {
  padding: 0.8rem;
  box-sizing: border-box;

  display: grid;
  grid: min-content auto min-content / auto;
  gap: 2rem;

  border-radius: 1.6rem;
  background: var(--white-color);

  /* shadow md */
  box-shadow: 0 4px 8px -2px rgba(54, 54, 171, 0.10),
  0 2px 4px -2px rgba(54, 54, 171, 0.06);

  &__image {
    width: 100%;
    aspect-ratio: 1;

    border-radius: 0.8rem;
    object-fit: cover;
  }

  &__food-name {
    width: 100%;

    margin: 0;

    color: var(--black-color);
    font: 400 normal 1.6rem/1.5 Inter, sans-serif;

    word-break: break-word;
  }

  &__bottom-info {
    height: 2.16rem;

    display: inline-flex;
    justify-content: space-between;
    align-content: flex-end;
  }

  &__price {
    margin: 0;
    color: var(--dark-color);
    font: 600 normal 1.8rem/1.5 Inter, sans-serif;
  }
}

</style>