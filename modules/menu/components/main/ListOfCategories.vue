<script setup lang="ts">

import type { Categories } from '~/modules/menu/types';


interface Props {
  categories: Ref<Categories>;
}

defineProps<Props>();


const menuList = ref();

const categoriesOffsets = {} as { [category: string]: number };

const { onHandCategorySet } = useCategoryScrollObserver();

const setScrollTop = inject('setScrollTop') as Function;


onHandCategorySet((category) => {
  setScrollTop(categoriesOffsets[category]);
});


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

function unFixPosition(element: HTMLElement) {
  element.style.top = 'auto';
  element.style.left = 'auto';
}

function beforeTransitionLeave(element: HTMLElement) {
  makeUnresizable(element);
  fixPosition(element);
}

function beforeTransitionEnter(element: HTMLElement) {
  returnResizable(element);
  unFixPosition(element);
}

</script>

<template>
  <main
    ref="menuList"
    class="menu-list"
  >

    <transition-group
      name="categories"
      @before-leave="beforeTransitionLeave"
      @before-enter="beforeTransitionEnter"
    >
      <CategoryTable
        v-for="(dishes, categoryName) in categories"
        :key="categoryName"
        :ref="(el) => { categoriesOffsets[categoryName] = el.$el.offsetTop }"
        :category-name="categoryName"
        :dishes="dishes"
        class="menu-list__card"
      />
    </transition-group>

  </main>
</template>

<style scoped lang="scss">


.categories {
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

.menu-list {
  position: relative;

  display: grid;
  grid: repeat(auto-fit, auto) / auto;
  gap: 4.8rem;

  transition: all .5s ease;
}

</style>