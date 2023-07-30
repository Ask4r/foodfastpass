<script setup lang="ts">

import { Dish } from '~/modules/menu/types';


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
  font-family: Inter, serif;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 1.8rem */

  border-radius: 10rem;
  border: 1px solid #FAC515;
  background: #FEEE95;
}

.vegan-plate {
  height: min-content;

  padding: 0.1rem 0.7rem;

  color: #3B7C0F;
  font-family: Inter, serif;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 1.8rem */

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