<script setup lang="ts">

import { Dish } from '~/modules/user-side/menu/types';


interface Props {
  dish: Dish;
}

const props = defineProps<Props>();

const shuffledFilters = computed(() => {
  return props.dish.filters.sort(() => {
    return Math.random() > 0.5 ? 1 : -1;
  }).slice(0, 3);
});

</script>

<template>

  <div
    v-if="dish.rating > 4.5"
    class="popular-plate"
  >
    Popular
  </div>

  <div
    v-else-if="dish.filters.includes('Vegan')"
    class="vegan-plate"
  >
    Vegan
  </div>

  <div
    v-else
    class="filters-plate"
  >
    <IconByFilter
      v-for="filter in shuffledFilters"
      :key="filter"
      :filter="filter"
      class="filters-plate__icon"
    />
  </div>

</template>

<style scoped lang="scss">

.popular-plate {
  height: min-content;

  padding: 0.1rem 0.7rem;

  color: #A15C07;
  font: 500 normal 1.2rem/1.5 Inter, sans-serif;

  border-radius: 10rem;
  border: 1px solid var(--yellow-color);
  background: #FEEE95;
}

.vegan-plate {
  height: min-content;

  padding: 0.1rem 0.7rem;

  color: var(--green-color);
  font: 500 normal 1.2rem/1.5 Inter, sans-serif;

  border-radius: 10rem;
  border: 1px solid #66C61C;
  background: #D0F8AB;
}

.filters-plate {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  &__icon {
    width: 1.8rem;
    height: 1.8rem;
  }
}

</style>