<script setup lang="ts">

import type { Dish } from '~/modules/menu/types';
import SpecialPropertyPlate from '~/modules/menu/components/main/SpecialPropertyPlate.vue';


interface Props {
  dish: Dish;
  isActive: boolean;
}

defineProps<Props>();

</script>

<template>
  <div class="dish" v-show="isActive">

    <picture>
      <source :srcset="dish.images[0]">
      <img
        src="~/assets/images/default-restaurant-card-image.png"
        alt=""
        class="dish__image"
      >
    </picture>

    <p class="dish__food-name">
      {{ dish.name }}
    </p>

    <div class="dish__bottom-info">

      <SpecialPropertyPlate :dish="dish"/>

      <span></span>

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

    color: #000;
    font-family: Inter, serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 2.4rem */

    word-break: break-word;
  }

  &__bottom-info {
    height: 2.16rem;

    display: inline-flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  &__price {
    margin: 0;

    color: var(--dark-color);
    font-family: Inter, serif;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 1.8rem */
  }
}

</style>