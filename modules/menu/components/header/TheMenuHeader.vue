<script setup lang="ts">

import { vOnClickOutside } from '@vueuse/components';


interface Props {
  restaurantName: string;
  isSideBarActive: boolean;
  areFiltersActive: boolean;
}

interface Emits {
  'update:isSideBarActive': [ value: boolean ];
  'update:areFiltersActive': [ value: boolean ];
}

defineProps<Props>();

const emits = defineEmits<Emits>();

</script>

<template>
  <header class="header">

    <BurgerMenu
      class="header__burger"
      @click="emits('update:isSideBarActive', true)"
    />

    <h1 class="header__title">
      {{ restaurantName }}
    </h1>

    <ReturnArrow
      class="header__return"
      @click="$router.go(-1)"
    />

    <FiltersDropdown
      :is-active="areFiltersActive"
      v-on-click-outside="() => { if (areFiltersActive) emits('update:areFiltersActive', false)}"
      @hide="emits('update:areFiltersActive', false)"
    />

  </header>
</template>

<style scoped lang="scss">

.header {
  width: 100%;

  padding: 2.4rem;
  box-sizing: border-box;

  position: fixed;
  top: 0;

  display: grid;
  grid: auto / 2rem auto 2rem;
  place-items: center;

  border-radius: 0 0 0.8rem 0.8rem;
  background: var(--white-color);

  /* shadow lg */
  box-shadow: 0 12px 16px -4px rgba(54, 54, 171, 0.08),
  0 4px 6px -2px rgba(54, 54, 171, 0.03);

  &__title {
    margin: 0;

    color: #000;
    font-family: Inter, serif;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
}

</style>