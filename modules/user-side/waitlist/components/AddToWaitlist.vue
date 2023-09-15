<script setup lang="ts">

</script>

<template>
  <section class="main-container">
    <div class="gradient-container"></div>
    <div class="phone-images">
      <img src="~assets/images/Canteen-on-the-fly-2.png" alt="" class="phone">
      <img src="~assets/images/Canteen-on-the-fly-3.png" alt="" class="phone">
    </div>
    <EmailSubmitForm class="form"/>
  </section>
</template>

<style scoped lang="scss">

.main-container {
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 8.8rem;
  margin-bottom: 13rem;
}

.gradient-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -100;
  clip-path: polygon(0 13.2rem, 100% 4.4rem, 100% calc(100% - 8.8rem), 0 100%);
  background: linear-gradient(
      -80deg,
      #A96DDDFF,
      #6432F4FF,
      #A96DDDFF
  );
  background-size: 500% 500%;
  animation: gradient 10s ease-in-out infinite;
}

@keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

.phone-images {
  display: flex;
  justify-content: space-around;
}

.phone {
  max-width: calc((100% - 9rem) / 2);
}

.form {
  margin: 16rem auto 16rem auto;
}

</style>