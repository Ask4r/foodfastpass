<script setup lang="ts">

import { Collapse } from 'vue-collapsed';
import FiltersHide from '~/modules/icons/components/FiltersHide.vue';


interface Props {
  isActive: boolean;
}

interface Emits {
  hide: [];
}

defineProps<Props>();

const emits = defineEmits<Emits>();


const firstFilters = [
  'Vegan',
  'Vegetarian',
];

const secondFilters = [
  'Dairy free',
  'Gluten/Wheat free',
  'Shellfish free',
  'Eggs free',
  'Soy free',
  'Peanuts free',
  'Nuts free',
];

const verboseFiltersMap = new Map([
  [ 'Gluten/Wheat free', 'Gluten/Wheat' ],
  [ 'Shellfish free', 'Shellfish' ],
  [ 'Eggs free', 'Eggs' ],
  [ 'Soy free', 'Soya' ],
  [ 'Nuts free', 'Nuts' ],
  [ 'Dairy free', 'Diary' ],
  [ 'Peanuts free', 'Peanut' ],
  [ 'Vegetarian', 'Vegetarian' ],
  [ 'Vegan', 'Vegan' ],
]);


const {
  chosenInclusiveFilters,
  chosenExclusiveFilters,
  toggleFilter,
} = useFilters();


function filterToggle(filter: string) {
  const filterValue = verboseFiltersMap.get(filter);

  toggleFilter(filterValue ?? '');
}

function refreshFilters() {
  chosenInclusiveFilters.splice(0);
  chosenExclusiveFilters.splice(0);
}

</script>

<template>
  <collapse
    :when="isActive"
    class="filters"
  >
    <div>

      <div class="filters__title-container">
        <p class="filters__title">
          Filters
        </p>
        <FiltersReset
          v-if="chosenInclusiveFilters.length > 0 || chosenExclusiveFilters.length > 0"
          class="filters__reset"
          @click="refreshFilters"
        />
        <FiltersHide
          class="filters__hide"
          @click="emits('hide')"
        />
      </div>

      <nav class="filters__row">

        <FilterChoiceButton
          v-for="filter in firstFilters"
          :key="filter"
          :is-active="chosenInclusiveFilters.includes(verboseFiltersMap.get(filter))"
          :filter-name="filter"
          @click="filterToggle(filter)"
        />

      </nav>

      <nav class="filters__row filters__row_second">

        <FilterChoiceButton
          v-for="filter in secondFilters"
          :key="filter"
          :is-active="chosenExclusiveFilters.includes(verboseFiltersMap.get(filter))"
          :filter-name="filter"
          @click="filterToggle(filter)"
        />

      </nav>
    </div>
  </collapse>
</template>

<style scoped lang="scss">

.filters {
  --header-height: 7.5rem;

  width: 100%;

  position: fixed;
  top: var(--header-height);
  left: 0;

  background: var(--white-color);
  border-radius: 0 0 0.8rem 0.8rem;

  /* shadow lg */
  box-shadow: 0 12px 16px -4px rgba(54, 54, 171, 0.08),
  0 4px 6px -2px rgba(54, 54, 171, 0.03);

  transition: all ease .2s;

  &__title-container {
    width: calc(100% - 2 * 2.4rem);

    margin: 0 2.4rem 0 2.4rem;

    display: grid;
    grid: auto / min-content auto min-content;
    grid-template-areas: "title reset hide";
    gap: 1.2rem;
    align-items: end;

    border-top: 1px solid var(--light-color);
  }

  &__title {
    margin: 1.6rem 0 0 0;

    grid-area: title;

    color: #000;
    font-family: Inter, serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 3rem */
  }

  &__reset {
    margin-bottom: 0.5rem;

    grid-area: reset;
  }

  &__hide {
    margin-bottom: 0.5rem;

    grid-area: hide;
  }

  &__row {
    margin: 2.4rem;
    display: flex;
    flex-flow: row wrap;
    gap: 1.6rem;
  }
}

</style>