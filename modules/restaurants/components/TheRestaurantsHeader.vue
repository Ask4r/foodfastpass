<template>
  <header class="header">

    <img
      src="~/assets/icons/main-logo.svg"
      alt="Logo"
      class="header__logo">

    <h1 class="header__title">
      FoodFastPass
    </h1>

  </header>
</template>

<style scoped lang="scss">

.header {
  width: 100%;
  height: 8rem;

  position: fixed;
  top: 0;

  background-color: white;
  z-index: 1000;

  &__logo {
    width: 4.8rem;
    height: 4.8rem;

    position: fixed;
    top: 1.6rem;
    left: 2rem;
  }

  &__title {
    margin: 0;

    position: fixed;
    top: 3rem;
    left: 50%;
    translate: -50%;

    color: var(--primary-color);
    font-size: 2rem;
    font-family: 'Helvetica Neue', serif;
    font-weight: 400;
    line-height: 100%;
    text-align: center;
  }

}
</style>