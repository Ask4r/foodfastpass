<script setup lang="ts">

import type { Dish } from '~/modules/menu/types';


interface Props {
  categoryName: string;
  dishes: Dish[];
}

const props = defineProps<Props>();


const table = ref();

const { areFiltersApproved } = useFilters();

const { scrollSetCategory } = useCategoryScrollObserver();

const showDishCard = inject('showDishCard') as Function;

const onMenuScroll = inject('onMenuScroll') as Function;


onMenuScroll((scroll: number) => {
  const top = table.value.offsetTop - scroll;
  const bottom = top + table.value.clientHeight;

  if (top < 150 && 150 < bottom)
    scrollSetCategory(props.categoryName)
});


function handleDishSelect(dish: Dish) {
  useCurrentDish(dish);
  showDishCard();
}

function makeUnresizable(element: HTMLElement) {
  const width = element.clientWidth;
  const height = element.clientHeight;
  element.style.width = width + 'px';
  element.style.height = height + 'px';
}

function returnResizable(element: HTMLElement) {
  element.style.width = 'auto';
  element.style.height = 'auto';
}

function fixPosition(element: HTMLElement) {
  const top = element.offsetTop;
  const left = element.offsetLeft;
  element.style.top = top + 'px';
  element.style.left = left + 'px';
}

function beforeTransitionLeave(element: HTMLElement) {
  makeUnresizable(element);
  fixPosition(element);
}

function beforeTransitionEnter(element: HTMLElement) {
  returnResizable(element);
}

</script>

<template>
    <section
      ref="table"
      v-show="dishes.some(dish => areFiltersApproved(dish))"
      class="table"
    >

      <header class="table__table-name">
        {{ categoryName }}
      </header>

      <main class="table__dishes">

        <transition-group
          name="dish"
          @before-leave="beforeTransitionLeave"
          @before-enter="beforeTransitionEnter"
        >
          <DishPreview
            v-for="dish in dishes"
            :key="dish.id"
            :dish="dish"
            :is-active="areFiltersApproved(dish)"
            @click="handleDishSelect(dish)"
          />

        </transition-group>

      </main>

    </section>
</template>

<style scoped lang="scss">

.dish {
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-move,
  &-leave-active {
    transition: all .5s ease;
  }

  &-enter-active {
    transition: opacity .5s ease;
  }

  &-leave-active {
    position: absolute;
  }
}


.table {
  width: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  &__table-name {
    height: min-content;

    padding: 0.2rem 0.8rem;

    color: #000;
    font-family: Inter, serif;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 300;
    line-height: 150%; /* 2.7rem */

    white-space: nowrap;

    border-radius: 1.6rem 1.6rem 0.8rem 0;
    border: 1.5px solid var(--light-color);
  }

  &__dishes {
    width: 100%;

    padding: 0.8rem;
    box-sizing: border-box;

    display: grid;
    grid: auto / repeat(auto-fill, minmax(13rem, 1fr));
    gap: 1.2rem;

    border-left: 1.5px solid var(--light-color);
  }
}

</style>