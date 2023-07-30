<script setup lang="ts">

interface Props {
  filter: string;
}


const props = defineProps<Props>();


const filterToIconMap = new Map([
  [ 'Gluten/Wheat', '/_nuxt/assets/icons/allergens/Wheat.svg' ],
  [ 'Shellfish', '/_nuxt/assets/icons/allergens/Shellfish.svg' ],
  [ 'Eggs', '/_nuxt/assets/icons/allergens/Eggs.svg' ],
  [ 'Soya', '/_nuxt/assets/icons/allergens/Soya.svg' ],
  [ 'Nuts', '/_nuxt/assets/icons/allergens/Nuts.svg' ],
  [ 'Dairy', '/_nuxt/assets/icons/allergens/Dairy.svg' ],
  [ 'Peanut', '/_nuxt/assets/icons/allergens/Peanuts.svg' ],
  [ 'Vegetarian', '/_nuxt/assets/icons/allergens/Vegetarian.svg' ],
  [ 'Vegan', '/_nuxt/assets/icons/allergens/Vegan.svg' ],
]);

</script>

<template>

  <img
    :src="filterToIconMap.get(filter) ?? ''"
    alt="filter"
  >

</template>

<style scoped lang="scss">

</style>