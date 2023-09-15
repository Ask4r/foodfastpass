<script setup lang="ts">

interface Props {
  restaurantName: string;
  isSideBarActive: boolean;
}

interface Emits {
  'update:isSideBarActive': [ value: boolean ];
}

defineProps<Props>();

const emits = defineEmits<Emits>();

</script>

<template>
  <header class="header">

    <h1 class="header__title">
      {{ restaurantName }}
    </h1>

    <BurgerMenu
      class="header__menu"
      @click="emits('update:isSideBarActive', true)"
    />

    <CategoriesSlider class="header__slider"/>

  </header>
</template>

<style scoped lang="scss">

.header {
  width: 100%;

  padding: 2.4rem 2.4rem 0.8rem 2.4rem;
  box-sizing: border-box;

  position: fixed;
  top: 0;

  display: grid;
  grid: "title menu"
    "slider slider" / auto 2rem;
  align-items: center;
  gap: 1.6rem;

  border-radius: 0 0 1.6rem 1.6rem;
  background: var(--white-color);

  /* shadow lg */
  box-shadow: 0 12px 16px -4px rgba(54, 54, 171, 0.08),
  0 4px 6px -2px rgba(54, 54, 171, 0.03);

  z-index: 2000;
  user-select: none;

  &__title {
    margin: 0;
    color: #000;
    font: 500 normal 2.4rem/1.5 Inter, sans-serif;

    grid-area: title;
  }

  &__menu {
    grid-area: menu;
  }

  &__slider {
    grid-area: slider;
    place-self: center start;
  }
}

</style>