<script setup lang="ts">

import type { Dish } from '~/modules/user-side/menu/types';


interface Props {
  dish: Dish;
}

const props = defineProps<Props>();

</script>

<template>
  <section class="main-info">

    <DishImage
      :dish="dish"
      class="main-info__image"
    />

    <div class="main-info__info-row">
      <p class="main-info__price">{{ dish.price }}</p>
      <DishRating :dish="dish"/>
    </div>

    <h3 class="main-info__dish-name">
      {{ dish.name }}
    </h3>

    <p class="main-info__description">
      {{ dish.description }}
    </p>

    <AddButton
      :dish="dish"
      class="main-info__add-button"
    />

  </section>
</template>

<style scoped lang="scss">

.main-info {
  width: 100%;
  height: 100%;

  position: relative;

  &__info-row {
    margin: 1.2rem 0.8rem 1.2rem 0.8rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
    gap: 0.4rem;
  }

  &__price {
    margin: 0;
    color: var(--dark-color);
    font: 600 normal 3rem/1.5 Inter, sans-serif;
  }

  &__rating {
    margin: 0;
  }

  &__dish-name {
    margin: 0 0.8rem 0.8rem 0.8rem;

    color: var(--black-color);
    font: 400 normal 2.4rem/1.2 Inter, sans-serif;

    text-align: start;
    word-break: break-word;
  }

  &__description {
    margin: 0 0.8rem;

    color: var(--black-color);
    font: 300 normal 1.8rem/1.5 Inter, sans-serif;

    text-align: start;
    white-space: pre-wrap;
  }

  &__add-button {
    width: calc(100% - 0.8rem * 2);
    position: absolute;
    bottom: 0;
    left: 0.8rem;
  }
}

</style>