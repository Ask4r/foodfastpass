<script setup lang="ts">

const {
  currentCategory,
  handSetCategory,
  onScrollCategorySet,
} = useCategoryScrollObserver();

const slider = ref();

const categories = useCategories();

const { areFiltersApproved } = useFilters();

const categoriesScrolls = {} as { [category: string]: number };


onScrollCategorySet((category) => {
  slider.value.scrollLeft = categoriesScrolls[category] - 24 - 24;
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
  <div
    ref="slider"
    class="slider"
  >

    <div
      v-for="(dishes, category) in categories"
      :key="category"
      :ref="(el) => { categoriesScrolls[category] = el.offsetLeft }"
      v-show="dishes.some(dish => areFiltersApproved(dish))"
      class="slider__category"
      :class="{'slider__category_active': currentCategory === category}"
      @click="handSetCategory(category)"
    >
      {{ category }}
    </div>

  </div>
</template>

<style scoped lang="scss">

.slider {
  width: 100%;

  display: flex;
  flex-flow: row nowrap;

  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  scroll-behavior: smooth;

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