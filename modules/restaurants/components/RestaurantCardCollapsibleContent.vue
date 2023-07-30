<script setup lang="ts">

import { Collapse } from 'vue-collapsed';
import type { Restaurant } from '~/modules/restaurants/types';


interface Props {
  restaurant: Restaurant;
  isActive?: boolean;
}

const props = withDefaults(
  defineProps<Props>(),
  { isActive: false },
);


function toMenu(restaurantName: string) {
  navigateTo({
    path: `/menu/${restaurantName}`,
   /* name: 'menu',
    params: {
      restaurantName: restaurantName,
    },*/
  });
}

</script>

<template>
  <collapse
    :when="props.isActive"
    class="collapsible-content"
  >
    <div class="collapsible-content__content">

      <p
        v-if="restaurant.address"
        class="collapsible-content__address"
      >
        {{ restaurant.address }}
      </p>

      <p
        v-if="restaurant.description"
        class="collapsible-content__description"
      >
        {{ restaurant.description }}
      </p>

      <button
        class="collapsible-content__see-button"
        @click.stop="toMenu(restaurant.name)"
      >
        See menu
      </button>

    </div>
  </collapse>
</template>

<style scoped lang="scss">

.collapsible-content {
  transition: all ease .3s;

  &__content {
    padding-top: 1.6rem;
    box-sizing: border-box;
  }

  &__address, &__description, &__see-button {
    color: #FFF;
    font-size: 1.6rem;
    font-family: 'Helvetica Neue', sans-serif;
    font-weight: 550;
    line-height: 100%;
  }

  &__address {
    margin: 0 0 2rem 0;
  }

  &__description {
    margin: 0 0 4rem 0;
  }

  &__see-button {
    padding: .8rem 1.5rem;
    border: .2rem solid var(--primary-color);
    border-radius: 50em;
    background: transparent;

    transition: all ease .2s;

    &:active {
      background: var(--primary-color);
    }
  }

}

</style>