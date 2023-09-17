<script setup lang="ts">

const restaurants = useRestaurants();

</script>

<template>
  <article class="restaurants-list">

    <TheRestaurantsHeader/>

    <main class="restaurants-list__main">

      <client-only>
        <ListOfOrders />
      </client-only>

      <ListOfCards :restaurants="restaurants"/>

    </main>

    <TheFooter />

  </article>
</template>

<style scoped lang="scss">

.restaurants-list {

  &__main {
    margin-top: 10.8rem;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }


}

</style>
