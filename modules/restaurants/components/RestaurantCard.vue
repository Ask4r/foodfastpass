<script setup lang="ts">

import type { Restaurant } from '~/modules/restaurants/types';


interface Props {
  restaurant: Restaurant;
  isActive?: boolean;
}

const props = withDefaults(
  defineProps<Props>(),
  { isActive: false },
);

const backgroundImageCssUrl = `url("${ props.restaurant.photo }")`;

</script>

<template>
  <div
    ref="restaurantCard"
    class="restaurant-card"
    :class="{'restaurant-card_active': isActive}"
  >
    <div class="restaurant-card__content">

      <h3 class="restaurant-card__restaurant-name">
        {{ restaurant.name }}
      </h3>

      <RestaurantCardCollapsibleContent
        :restaurant="restaurant"
        :is-active="isActive"
      />

    </div>
  </div>
</template>

<style scoped lang="scss">

.restaurant-card {
  width: 100%;
  aspect-ratio: 355 / 185;

  position: relative;

  background: v-bind(backgroundImageCssUrl) center / cover no-repeat,
  url("assets/images/default-restaurant-card-image.png") center / cover no-repeat;

  border-radius: 2.5rem;

  &::before {
    content: '';

    width: 100%;
    height: 100%;

    position: absolute;

    border-radius: 2.5rem;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.4)
    );

    transition: all linear .3s;
  }

  &__content {
    min-height: 100%;

    padding: 1.6rem;
    box-sizing: border-box;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  &__restaurant-name {
    margin: 0;

    color: #FFF;
    font-size: 3.2rem;
    font-family: 'Helvetica Neue', sans-serif;
    font-weight: 550;
    line-height: 100%;

  }

  &_active {
    &::before {
      background: rgba(0, 0, 0, 0.5);
    }
  }
}

</style>
