<script setup lang="ts">

import { Order } from '~/modules/user-side/order/types';
import { Restaurant } from '~/modules/user-side/restaurants/types';


defineProps<{
  order: Order;
}>();


const restaurants = await getRestaurants();


function restaurantById(restaurantId: number): Restaurant | undefined {
  for (const restaurant of restaurants)
    if (restaurant.id === restaurantId)
      return restaurant;
}

</script>

<template>
  <section class="order">

    <ImgDefault
      :src="restaurantById(Number(order.rest))?.photo"
      :alt="restaurantById(Number(order.rest))?.name"
      class="order__image"
    />

    <p class="order__name">
      {{ restaurantById(Number(order.rest))?.name }}
    </p>

    <p class="order__timeslot">
      Pickup at {{ order?.timeSlot }}
    </p>

    <p class="order__id">
      #{{ order.id }}
    </p>

  </section>
</template>

<style scoped lang="scss">

.order {
  margin: 0 2.4rem;
  padding: 0.8rem;

  display: grid;
  grid: "image name id" auto
        "image timeslot id" auto
        / 5.4rem auto max-content;
  gap: 0 1.2rem;
  place-items: center start;

  background: var(--white-color);
  /* shadow md */
  box-shadow: 0 4px 8px -2px rgba(54, 54, 171, 0.10),
  0 2px 4px -2px rgba(54, 54, 171, 0.06);
  border-radius: 0.8rem;


  &__image {
    grid-area: image;
    width: 100%;
    aspect-ratio: 1;
    border-radius: 50em;
  }

  &__name {
    grid-area: name;
    color: var(--black-color);
    font: 500 normal 2rem/1.2 Inter, sans-serif;
    //word-break: break-word;
  }

  &__timeslot {
    grid-area: timeslot;
    color: var(--dark-gray-color);
    font: 500 normal 1.6rem/1.5 Inter, sans-serif;
  }

  &__id {
    grid-area: id;
    color: var(--black-color);
    font: 500 normal 1.6rem/1.5 Inter, sans-serif;
  }
}

</style>