<script setup lang="ts">

import { vOnClickOutside } from '@vueuse/components';
import { Collapse } from 'vue-collapsed';


interface Props {
  mealType: string;
}

interface Emits {
  'update:mealType': [ meal: string ];
}

defineProps<Props>();

const emits = defineEmits<Emits>();


const isExpanded = ref(false);


function toggleMealTypes() {
  isExpanded.value = !isExpanded.value;
}

</script>

<template>
  <div class="meal">

    <p class="meal__title">Today's menu</p>

    <div
      class="meal__dropdown"
      @click="toggleMealTypes"
      v-on-click-outside="() => { if (isExpanded) toggleMealTypes()}"
    >

      <div class="meal__current-meal">
        <span class="meal__meal-type">{{ mealType }}</span>
        <DropdownArrow
          class="meal__toggle-arrow"
          :class="{'meal__toggle-arrow_active': isExpanded}"
        />
      </div>

      <Collapse
        :when="isExpanded"
        :style="{transition: 'all .2s ease', paddingTop: '0.1rem'}">
        <div class="meal__available-meals">
          <span
            v-for="possibleMeal in ['Breakfast', 'Lunch', 'Dinner']"
            :key="possibleMeal"
            class="meal__meal-type"
            :class="{'meal__meal-type_active': mealType === possibleMeal}"
            @click="emits('update:mealType', possibleMeal)"
          >{{ possibleMeal }}</span>
        </div>
      </Collapse>

    </div>

  </div>
</template>

<style scoped lang="scss">

.meal {
  height: 3.6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &__title {
    margin: 0;
    color: #000;
    font: 500 normal 2.4rem/1.5 Inter, sans-serif;
  }

  &__dropdown {
    width: 11.2rem;

    margin-top: 0.2rem;

    position: relative;

    display: flex;
    flex-flow: column nowrap;
    gap: 0.8rem;
    align-self: flex-start;
    z-index: 1000;
  }

  &__current-meal {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0.2rem 0.8rem;
    box-sizing: border-box;

    border-radius: 0.8rem;
    border: 1.5px solid var(--light-color);
    background: var(--white-color);
  }

  &__available-meals {
    padding: 0.2rem 0.8rem;
    box-sizing: border-box;

    display: flex;
    flex-flow: column nowrap;
    gap: 0.2rem;

    border-radius: 0.8rem;
    border: 1.5px solid var(--light-color);
    background: var(--white-color);
  }

  &__meal-type {
    color: #000;
    font: 400 normal 1.6rem/1.5 Inter, sans-serif;

    &_active {
      color: var(--dark-color);
      font-weight: 500;
    }
  }

  &__toggle-arrow {
    transition: all .2s ease;

    &_active {
      transform: rotateX(180deg);
    }
  }
}

</style>