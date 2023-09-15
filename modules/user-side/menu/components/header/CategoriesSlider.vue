<script setup lang="ts">

const {
  currentCategory,
  handSetCategory,
  onScrollCategorySet,
} = useCategoryScrollObserver();

const slider = ref();

const categories = useCategories();

const {
  areFiltersApproved,
  onFiltersChange,
} = useFilters();

const categoriesTitlesEls = {} as { [category: string]: HTMLElement };


onScrollCategorySet((category) => {
  slider.value.scrollLeft = categoriesTitlesEls[category].offsetLeft - 24 - 24;
});

onFiltersChange(() => {
  const categoriesNames = Object.keys(categories);

  const firstCategory = categoriesNames.filter((categoryName) => {
    const dishes = categories[categoryName];
    return dishes.some(dish => areFiltersApproved(dish));
  })[0];

  currentCategory.value = firstCategory;
});


(function checkCategories() {
  if (Object.keys(categories).length === 0) {
    setTimeout(checkCategories, 100);
  } else {
    currentCategory.value = Object.keys(categories)[0];
  }
})();

</script>

<template>
  <ul
    ref="slider"
    class="slider"
  >

    <li
      v-for="(dishes, category) in categories"
      :key="category"
      :ref="(el) => { categoriesTitlesEls[category] = el }"
      v-show="dishes.some(dish => areFiltersApproved(dish))"
      class="slider__category"
      :class="{'slider__category_active': currentCategory === category}"
      @click="handSetCategory(category)"
    >
      {{ category }}
    </li>

  </ul>
</template>

<style scoped lang="scss">

.slider {
  width: 100%;

  display: flex;
  flex-flow: row nowrap;

  padding: 0;

  overflow-x: scroll;
  scroll-behavior: smooth;
  list-style: none;
  user-select: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &__category {
    margin: 0;

    padding: 0.4rem 1.2rem;

    color: var(--medium-color);
    border-radius: 50em;

    font: 400 normal 1.6rem/1.5 Inter, sans-serif;
    white-space: nowrap;

    transition: all .2s ease;

    &_active {
      color: var(--white-color);
      background-color: var(--dark-color);
    }
  }
}

</style>