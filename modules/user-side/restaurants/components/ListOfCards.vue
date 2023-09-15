<script setup lang="ts">

import type { Restaurant } from '~/modules/restaurants/types';

interface Props {
  restaurants: Restaurant[];
}

defineProps<Props>();


function handleCardClick(restaurantName: string) {
  useRouter().push(`/menu/${restaurantName}`)
}

</script>

<template>
  <main class="cards-list">

    <RestaurantCard
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :restaurant="restaurant"
      @click="handleCardClick(restaurant.name)"
    />

  </main>
</template>

<style scoped lang="scss">

.cards-list {
  margin: 0 2rem 9.6rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

</style>