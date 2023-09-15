<script setup lang="ts">

import { Dish } from '~/modules/dish-card/types';


interface Props {
  dish: Dish;
}

defineProps<Props>();

</script>

<template>
  <div
    v-if="dish.foodProperties"
    class="properties"
  >

    <template
      v-for="(property, propertyName) in dish.foodProperties"
      :key="propertyName"
    >

      <p class="properties__attr properties__attr_name">
        {{ propertyName }}:
      </p>
      <p class="properties__attr properties__attr_value">
        {{ property.value ?? '--' }}
      </p>
      <p class="properties__attr properties__attr_unit">
        {{ property.unit }}
      </p>

    </template>

  </div>
</template>

<style scoped lang="scss">

.properties {
  display: grid;
  grid: repeat(auto-fit, 1lh) /
    auto min-content min-content;
  gap: 1.2rem 1ch;

  color: #000;
  font-family: Inter, serif;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 2.7rem */

  white-space: nowrap;

  &__attr {
    margin: 0;

    &_name {
      justify-self: start;
    }

    &_value {
      justify-self: end;
    }

    &_unit {
      justify-self: start;
    }
  }
}

</style>