<script setup lang="ts">

import Dairy from './Dairy.vue';
import Eggs from './Eggs.vue';
import Nuts from './Nuts.vue';
import Peanuts from './Peanuts.vue';
import Shellfish from './Shellfish.vue';
import Soy from './Soy.vue';
import Vegan from './Vegan.vue';
import Vegetarian from './Vegetarian.vue';
import Wheat from './Wheat.vue';


interface Props {
  filter: string;
}


const props = defineProps<Props>();

const filterToIcon = {
  'Gluten/Wheat': Wheat,
  Shellfish: Shellfish,
  Eggs: Eggs,
  Soya: Soy,
  Nuts: Nuts,
  Dairy: Dairy,
  Peanut: Peanuts,
  Vegetarian: Vegetarian,
  Vegan: Vegan,
};

</script>

<template>

  <component :is="filterToIcon[filter]"></component>

</template>

<style scoped lang="scss">

</style>