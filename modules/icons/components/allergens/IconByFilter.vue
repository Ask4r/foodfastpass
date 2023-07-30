<script setup lang="ts">

interface Props {
  filter: string;
}


const props = defineProps<Props>();

const filterToIconMap = new Map([
  [ 'Gluten/Wheat', 'icons/allergens/Wheat.svg' ],
  [ 'Shellfish', 'icons/allergens/Shellfish.svg' ],
  [ 'Eggs', 'icons/allergens/Eggs.svg' ],
  [ 'Soya', 'icons/allergens/Soya.svg' ],
  [ 'Nuts', 'icons/allergens/Nuts.svg' ],
  [ 'Dairy', 'icons/allergens/Dairy.svg' ],
  [ 'Peanut', 'icons/allergens/Peanuts.svg' ],
  [ 'Vegetarian', 'icons/allergens/Vegetarian.svg' ],
  [ 'Vegan', 'icons/allergens/Vegan.svg' ],
]);

</script>

<template>

  <img
    :src="useAsset(filterToIconMap.get(filter) ?? '')"
    alt="filter"
  >

</template>

<style scoped lang="scss">

</style>