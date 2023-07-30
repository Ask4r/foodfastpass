<script setup lang="ts">

const restaurants = useRestaurants();

</script>

<template>
  <article class="restaurants-list">

    <TheRestaurantsHeader/>

    <ListOfCards :restaurants="restaurants"/>

  </article>
</template>
