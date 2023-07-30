<script setup lang="ts">

import { Dish } from '~/modules/dish-card/types';


interface Props {
  dish: Dish;
}

defineProps<Props>();

</script>

<template>
  <section class="additional">

    <NetProperties
      :dish="dish"
      class="additional__properties"
    />

    <AllergensIcons
      :dish="dish"
      class="additional__icons"
    />

  </section>
</template>

<style scoped lang="scss">

.additional {
  width: 100%;

  margin: 0.8rem 0.8rem 3.2rem 0.8rem;

  &__icons {
    margin-bottom: 4rem;
  }

  &__properties {
    margin-bottom: 4rem;
  }
}

</style>