<script setup lang="ts">

function copyText(text: string) {
  navigator.clipboard.writeText(text);
}
</script>

<template>
  <section class="faq-container">
    <h3 class="faq-title">FAQ</h3>
    <hr class="line">

    <f-a-q-collapse :is-collapsed="false">
      <template #question>
        When will this platform be accessible?
      </template>
      <template #answer>
        Platform is planned to be launched at the beginning of the 2023/24 academic year.
        Follow our
        <a href="https://www.instagram.com/foodfastpass/" class="special-link"
        >social media</a>
        to stay tuned!
      </template>
    </f-a-q-collapse>

    <f-a-q-collapse>
      <template #question>
        Who is developing this platform?
      </template>
      <template #answer>
        Our platform is being developed by UCD students. If you're interested in contributing
        to our project, please email us at
        <span class="special-link" @click="copyText('foodfastpass.ie@gmail.com')"
        >foodfastpass.ie@gmail.com</span>
        to learn more.
      </template>
    </f-a-q-collapse>

    <f-a-q-collapse>
      <template #question>
        Which of the UCD on-campus outlets will be supporting this system?
      </template>
      <template #answer>
        We are excited to announce that our platform will be working with Gather&Gather Main
        Restaurant at the Gerard Manley Hopkins building from the beginning. Our goal is to
        eventually unify all on-campus food outlets in one place.
      </template>
    </f-a-q-collapse>

    <f-a-q-collapse>
      <template #question>
        How can we get our campus food outlet integrated into your system?
      </template>
      <template #answer>
        Our goal is to unify all on-campus food outlets in one place. For more information on
        how to be featured on the platform, please contact us at
        <span class="special-link" @click="copyText('foodfastpass.ie@gmail.com')"
        >foodfastpass.ie@gmail.com</span>.
      </template>
    </f-a-q-collapse>

  </section>
</template>

<style scoped lang="scss">


.faq-container {
  margin-bottom: 13rem;
  padding: 0 3rem;
}


.faq-title {
  margin: 0 auto 1.2rem 0;

  font-family: 'Helvetica Neue', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 100%;
  letter-spacing: -0.04em;

  color: var(--accent-color);
  text-shadow: -2rem .4rem 5rem rgba(255, 255, 255, 0.3);
}

hr {
  margin: 0;
  border: .2rem solid var(--primary-color);
  border-radius: 50em;
}

.special-link {
  color: #2D0F44FF;
  text-decoration: underline;
  transition: all ease .2s;
}

.special-link:active {
  color: white;
  background-color: var(--primary-color);
}

</style>