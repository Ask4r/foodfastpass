<script setup lang="ts">

</script>

<template>
  <header class="header">

    <div class="header__title">
      <MainLogo class="header__logo"/>
      <p class="header__logo-text">FoodFastPass</p>
    </div>

    <p class="header__log-out" @click="navigateTo('/boh/auth')">Log out</p>

  </header>
</template>

<style scoped lang="scss">

.header {
  width: 100%;

  padding: 2.4rem;
  box-sizing: border-box;

  position: fixed;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 0 0 0.8rem 0.8rem;
  background: var(--white-color);

  /* shadow lg */
  box-shadow: 0 12px 16px -4px rgba(54, 54, 171, 0.08),
  0 4px 6px -2px rgba(54, 54, 171, 0.03);

  z-index: 2000;

  &__title{
    display: flex;
    align-items: center;
    gap: 0.8rem;
    overflow: visible;
  }

  &__logo {
    width: 5.4rem;
    height: 5.4rem;
  }

  &__logo-text {
    color: var(--black-color);
    font: 500 normal 2.4rem Inter, sans-serif;
  }

  &__log-out {
    color: var(--dark-color);
    font: 500 normal 2.4rem Inter, sans-serif;
  }
}

</style>
