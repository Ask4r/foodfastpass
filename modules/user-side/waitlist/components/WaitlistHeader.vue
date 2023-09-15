<script setup lang="ts">

function scrollToAuth() {
  const element = document.getElementById('email-input-to-scroll');

  if (!element)
    return

  element.scrollIntoView({behavior: 'smooth', block: 'center'});

  setTimeout(() => {
    element.focus()
  }, 1000);
}

</script>

<template>
  <header class="header-container">

    <div class="gradient-container">
      <button onclick="window.location.reload()" class="logo-link">
        <MainLogo class="main-logo"/>
      </button>
      <h1 class="title">Order meals ahead<br>Skip the wait</h1>
    </div>

    <p class="description">
      Whether you're in a hurry or just looking to save time, this convenient
      new service lets you skip the wait and enjoy your meal on your own schedule.
    </p>

    <button class="join-button" @click="scrollToAuth">
      Get access
      <SharpArrow class="arrow"/>
    </button>

  </header>
</template>

<style scoped lang="scss">

.gradient-container {
  height: 28.8rem;
  background: linear-gradient(
      -80deg,
      #A96DDDFF,
      #6432F4FF,
      #A96DDDFF
  );
  background-size: 500% 500%;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 8.8rem), 0 100%);
  overflow: hidden;
  animation: gradient 10s linear infinite;
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


.logo-link {
  margin-top: 4.4rem;
  margin-left: 3rem;

  padding: 0;

  background: transparent;
  border: unset;
}

.main-logo {
  width: 6.8rem;
  height: 6.8rem;
}

.title {
  margin: 2rem 3rem 0 3rem;

  font-family: 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: min(calc((100vw - 6rem) * 0.1136), 4rem);
  line-height: 99%;
  letter-spacing: -0.04em;

  color: #FFFFFF;
  text-shadow: -1rem .4rem 8rem #FFFFFF;
}

.description {
  margin: 1.4rem 3rem 0 3rem;

  font-family: 'Helvetica Neue', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 144%;

  display: flex;
  align-items: flex-end;
  text-align: justify;

  color: #425466;

  mix-blend-mode: luminosity;
}


.join-button {
  float: right;

  padding: 1.35rem 1.2rem;
  margin: 2rem 3rem 8.8rem auto;

  white-space: nowrap;
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 100%;

  color: #FFFFFF;
  background-color: #11253E;
  border: none;
  border-radius: 50em;

  transition: all ease-out .1s;
}

.join-button:active {
  background-color: var(--primary-color);
  transform: scale(0.95);
}

.join-button .arrow {
  width: 0.612rem;
  height: 0.941rem;
  color: white;
  vertical-align: middle;
}

</style>