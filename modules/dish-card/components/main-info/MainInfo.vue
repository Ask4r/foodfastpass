<script setup lang="ts">

import type { Dish } from '~/modules/dish-card/types';


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

  </section>
</template>

<style scoped lang="scss">

.main-info {
  width: 100%;

  &__info-row {
    margin: 1.2rem 0.8rem 1.2rem 0.8rem;

    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  &__price {
    margin: 0;

    color: var(--dark-color);
    font-family: Inter, serif;
    font-size: 3rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 4.5rem */
  }

  &__rating {
    margin: 0;
  }

  &__dish-name {
    margin: 0 0.8rem 0.8rem 0.8rem;

    color: #000;
    font-family: Inter, serif;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 4.32rem */

    text-align: start;
    word-break: break-word;
  }

  &__description {
    margin: 0 0.8rem;

    color: #000;
    font-family: Inter, serif;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 300;
    line-height: 150%; /* 2.7rem */

    text-align: start;
    white-space: pre-wrap;
  }

}

</style>