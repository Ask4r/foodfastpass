<script setup lang="ts">

import type { Dish } from '~/modules/menu/types';


interface Props {
  categoryName: string;
  dishes: Dish[];
}

defineProps<Props>();


const { areFiltersApproved } = useFilters();

const showDishCard = inject('showDishCard') as Function;


function handleDishSelect(dish: Dish) {
  useCurrentDish(dish);
  showDishCard();
}

</script>

<template>
  <section
    v-if="dishes.some(dish => areFiltersApproved(dish.filters))"
    class="table"
  >

    <header class="table__table-name">
      {{ categoryName }}
    </header>

    <main class="table__dishes">

      <DishPreview
        v-for="dish in dishes"
        :key="dish.id"
        :dish="dish"
        :is-active="areFiltersApproved(dish.filters)"
        @click="handleDishSelect(dish)"
      />

    </main>

  </section>
</template>

<style scoped lang="scss">

.table {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  &__table-name {
    height: min-content;

    padding: 0.2rem 0.8rem;

    color: #000;
    font-family: Inter, serif;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 300;
    line-height: 150%; /* 2.7rem */

    white-space: nowrap;

    border-radius: 1.6rem 1.6rem 0.8rem 0;
    border: 1.5px solid var(--light-color);
  }

  &__dishes {
    width: 100%;

    padding: 0.8rem;
    box-sizing: border-box;

    display: grid;
    grid: auto / repeat(auto-fill, minmax(13.5rem, 1fr));
    gap: 1.2rem;

    border-left: 1.5px solid var(--light-color);
  }
}

</style>