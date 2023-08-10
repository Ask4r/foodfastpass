<script setup lang="ts">

const router = useRouter();

</script>

<template>
  <header class="header">

    <BurgerMenu
      class="header__burger"
    />

    <h1 class="header__title">
      Restaurants
    </h1>

    <ReturnArrow
      class="header__return"
      @click="router.go(-1)"
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

  z-index: 2000;

  &__title {
    margin: 0;

    color: #000;
    font-family: Inter, serif;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
}

</style>