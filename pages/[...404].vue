<template>
  <article class="not-found">

    <p class="not-found__code">404 error</p>

    <h1 class="not-found__title">We can't find that page</h1>

    <p class="not-found__description">Sorry, the page you are looking for doesn’t exist or has been moved.</p>


    <nuxt-link
      is="button"
      to="/"
      class="not-found__button not-found__button_dark"
    >
      Take me home
    </nuxt-link>

    <button
      class="not-found__button not-found__button_light"
      @click="$router.go(-1)"
    >
      <ButtonArrow/>
      Go back
    </button>

  </article>
</template>

<style scoped lang="scss">

.not-found {
  margin: 6.4rem 2.4rem 0 2.4rem;

  &__code {
    margin: 0 0 1.2rem 0;

    color: var(--dark-color);
    font-family: Inter, serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 2.4rem */
  }

  &__title {
    margin: 0 0 1.6rem 0;

    color: #000;
    font-family: Inter, serif;
    font-size: 3.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; /* 4.32rem */
  }

  &__description {
    margin: 0 0 3.2rem 0;

    color: var(--medium-color);
    font-family: Inter, serif;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 2.7rem */
  }

  &__button {
    width: 100%;

    margin-bottom: 1.2rem;

    padding: 1.2rem 2rem;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    border: none;
    border-radius: 0.8rem;

    font: 600 normal 1.6rem/1.5 Inter, sans-serif;

    text-decoration: none;

    &_dark {
      color: var(--white-color);
      background: var(--dark-color);
    }

    &_light {
      color: var(--dark-color);
      background: var(--white-color);
      border: solid 1px var(--medium-color);
    }
  }
}

</style>
<script setup lang="ts">
</script>