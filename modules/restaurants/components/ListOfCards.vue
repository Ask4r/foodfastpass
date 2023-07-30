<script setup lang="ts">

import type { Restaurant } from '~/modules/restaurants/types';

interface Props {
  restaurants: Restaurant[];
}

defineProps<Props>();


const activeCardId = ref<number | null>(null);


function handleCardClick(event: MouseEvent, restaurantId: number) {
  setActiveCard(restaurantId);
  scrollToElement(event.target as HTMLElement);
}

function setActiveCard(restaurantId: number) {
  restaurantId === activeCardId.value
    ? activeCardId.value = null
    : activeCardId.value = restaurantId;
}

function scrollToElement(element: HTMLElement) {
  const elementRect = element.getBoundingClientRect();
  const elementCenterY = elementRect.top + elementRect.height * 0.5;
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;

  window.scrollTo({
    top: scroll + elementCenterY - windowHeight * 0.5,
    behavior: 'smooth',
  });
}

</script>

<template>
  <main class="cards-list">

    <RestaurantCard
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :restaurant="restaurant"
      :is-active="restaurant.id === activeCardId"
      @click="event => handleCardClick(event, restaurant.id)"
    />

  </main>
</template>

<style scoped lang="scss">

.cards-list {
  margin: 8rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

</style>