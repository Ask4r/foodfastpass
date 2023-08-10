<script setup lang="ts">

const amount = ref(0);
</script>

<template>

  <button
    v-if="amount === 0"
    class="button"
    @click="amount++"
  >
    <span>+</span>
    <span>Add</span>
  </button>

  <div
    v-else
    class="buttons-group"
  >
    <button
      class="button"
      @click="amount--"
    >-</button>
    <button
      class="button"
      @click=""
    >{{ amount }}</button>
    <button
      class="button"
      @click="amount++"
    >+</button>
  </div>

</template>

<style scoped lang="scss">

.button {
  width: 100%;
  height: 4.2rem;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  color: #FFF;
  font: 500 normal 1.8rem Inter, sans-serif;

  border: none;
  border-radius: 0.8rem;
  background: var(--dark-color);
}

.buttons-group {
  display: grid;
  grid: 4.2rem / 4.2rem auto 4.2rem;
  gap: 0.8rem;
}

</style>