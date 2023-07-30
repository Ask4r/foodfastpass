<script setup lang="ts">

const route = useRoute();

const restaurantName = route.params.restaurantName as string;

const categories = useCategories(restaurantName);

const dishCard = ref();

const isSidebarActive = ref(false);

const areFiltersActive = ref(false);


provide(
  'showDishCard',
  showDishCard,
);


function showDishCard() {
  dishCard.value.showContent();
}

</script>

<template>
  <article
    class="menu"
  >

    <TheMenuHeader
      :restaurant-name="restaurantName"
      v-model:is-side-bar-active="isSidebarActive"
      v-model:are-filters-active="areFiltersActive"
    />

    <SideBar
      v-model:is-active="isSidebarActive"
      v-model:are-filters-active="areFiltersActive"
    />

    <ListOfCategories
      :categories="categories"
      class="menu__main-content"
    />

    <Teleport to="body">
      <DishCard
        ref="dishCard"
        :dish="useCurrentDish()"
      />
    </Teleport>

    <TheMenuFooter/>

  </article>
</template>

<style scoped lang="scss">

.menu {
  --header-height: 7.5rem;

  height: 100dvh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow-y: scroll;

  &__main-content {
    margin: calc(var(--header-height) + 2.4rem)  1.6rem 9.6rem 1.5rem;
  }
}

</style>