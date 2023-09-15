<script setup lang="ts">

import type { Order } from '~/modules/b-o-h-side/orders/types';
import GiveAwayArrow from '~/modules/icons/components/arrows/GiveAwayArrow.vue';


defineProps<{
  order: Order,
}>();


</script>

<template>
  <section class="order">

    <div class="order__info">

      <p class="order__number">#{{ order.orderId }}</p>

      <div class="order__dishes">
        <div
          v-for="position in order.orderCart"
          :key="position.dishName"
          class="order__position"
        >
          <p class="order__quantity">{{ position.quantity }}x</p>
          <p class="order__dish-name">{{ position.dishName }}</p>
        </div>
      </div>

    </div>

    <button class="order__submit">
      <span>Hand over</span>
      <GiveAwayArrow/>
    </button>

  </section>
</template>

<style scoped lang="scss">

.order {
  padding: 2.4rem;

  border-radius: 1.6rem;
  background: var(--white-color);

  /* shadow lg */
  box-shadow: 0 12px 16px -4px rgba(54, 54, 171, 0.08),
  0 4px 6px -2px rgba(54, 54, 171, 0.03);

  &__info {
    margin-bottom: 5.4rem;

    display: grid;
    grid: auto / 6.4rem auto 6.4rem;
    place-content: space-between;
  }

  &__number {
    color: var(--green-color);
    font: 400 normal 3.6rem Inter, sans-serif;
  }

  &__dishes {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  &__position {
    display: flex;
    gap: 1.2rem;
  }

  &__quantity {
    color: var(--dark-gray-color);
    font: 400 normal 1.6rem/1.5 Inter, sans-serif;
  }

  &__dish-name {
    color: var(--black-color);
    font: 400 normal 1.6rem/1.5 Inter, sans-serif;
  }

  &__submit {
    padding: 0.8rem 1.6rem;

    display: flex;
    align-items: center;
    gap: 0.8rem;

    color: var(--white-color);
    font: 400 normal 1.6rem/1.5 Inter, sans-serif;

    border-radius: 0.8rem;
    border: none;
    background: var(--green-color);
  }
}

</style>