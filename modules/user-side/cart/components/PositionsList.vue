<script setup lang="ts">

const { cart: dishes } = useCartStore();

</script>

<template>
  <ul class="dishes">

    <QuantityPosition
      v-for="(position, id) in dishes"
      :key="id"
      :dish-id="Number(id)"
    />

  </ul>
</template>

<style scoped lang="scss">

.dishes {
  width: 100%;

  padding-bottom: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  border-bottom: 1.5px solid var(--light-color);

  list-style: none;
}
</style>