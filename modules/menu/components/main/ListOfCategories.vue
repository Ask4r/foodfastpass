<script setup lang="ts">

import type { Categories } from '~/modules/menu/types';

interface Props {
  categories: Categories;
}

defineProps<Props>();

</script>

<template>
  <main
    ref="menu-list"
    class="menu-list"
  >

    <CategoryTable
      v-for="(dishes, categoryName) in categories"
      :key="categoryName"
      :category-name="categoryName"
      :dishes="dishes"
      class="menu-list__card"
    />

<!--    <p v-show="false" class="menu-list__empty-text">
      Seems like nothing for you is here yet...
    </p>-->


  </main>
</template>

<style scoped lang="scss">

.menu-list {
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  &__empty-text {
    position: fixed;
    top: 50%;
    left: 50%;

    translate: -50% -50%;

    color: var(--accent-color);
    font-size: 2rem;
    font-family: Cerebri Sans Pro, serif;
    font-weight: 600;
    text-align: center;
  }
}

</style>