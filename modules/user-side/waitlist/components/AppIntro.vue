<script setup lang="ts">

</script>

<template>
  <section class="content-container">
    <img src="~assets/images/canteen-on-the-fly.png" alt="Canteen on fly" class="phone">
    <h2 class="title">Get ready to skip queues!</h2>
    <p class="description">
      Don't waste a single minute of your break time waiting in line for food. Our platform lets
      you order and pay for your meal in advance, so you can pick it up quickly and easily when you
      arrive. With customizable options and a stress-free checkout process, you'll wonder how you
      ever survived without it. Give it a try and see how much more you can enjoy your lunch break!
    </p>
  </section>
</template>

<style scoped lang="scss">

.phone {
  margin-left: 3rem;
  width: calc(100% - 6rem);
}

.title {
  margin: 9.2rem 3rem 0 3rem;

  font-family: 'Helvetica Neue', serif;
  font-style: normal;
  font-weight: 700;
  font-size: calc((100vw - 6rem) * 32 / 355);
  line-height: 100%;
  letter-spacing: -0.045em;
  white-space: nowrap;
  text-align: center;

  color: #2D0F44FF;
  mix-blend-mode: normal;
  text-shadow: -2.0rem .4rem 5rem rgba(255, 255, 255, 0.3);
}

.description {
  margin: 3.2rem 3rem 8.8rem 3rem;
  font-family: 'Helvetica Neue', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 164%;

  text-align: justify;
  color: #425466;
  mix-blend-mode: luminosity;
}

</style>