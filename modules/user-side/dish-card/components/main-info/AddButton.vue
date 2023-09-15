<script setup lang="ts">

import { Dish } from '~/modules/dish-card/types';


interface Props {
  dish: Dish;
}

defineProps<Props>();


const { cart, add, remove } = useCartStore();

</script>

<template>

  <button
    v-if="(cart[dish.id]?.quantity ?? 0) === 0"
    class="button"
    @click="add(dish)"
  >
    <span>+</span>
    <span>Add</span>
  </button>

  <div
    v-else
    class="buttons-group"
  >
    <button class="button" @click="remove(dish)">-</button>
    <button class="button">{{ cart[dish.id].quantity }}</button>
    <button class="button" @click="add(dish)">+</button>
  </div>

</template>

<style scoped lang="scss">

.button {
  width: 100%;
  height: 4.2rem;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  color: #FFF;
  font: 500 normal 1.8rem Inter, sans-serif;

  border: none;
  border-radius: 0.8rem;
  background: var(--dark-color);
}

.buttons-group {
  display: grid;
  grid: 4.2rem / 4.2rem auto 4.2rem;
  gap: 0.8rem;
}

</style>