<script setup lang="ts">

const restaurants = useRestaurants();

const isSidebarActive = ref(false);


provide('showSideBar', showSideBar);


function showSideBar() {
  isSidebarActive.value = true;
}

</script>

<template>
  <article class="restaurants-list">

    <TheRestaurantsHeader/>

    <SideBar
      v-model:is-active="isSidebarActive"
    />

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
