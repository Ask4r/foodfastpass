<script setup lang="ts">

import { Dish } from '~/modules/dish-card/types';
import CarouselArrow from '~/modules/icons/components/CarouselArrow.vue';


interface Props {
  dish: Dish;
}

defineProps<Props>();


const carousel = ref();

</script>

<template>
  <Carousel
    ref="carousel"
    :mouse-drag="false"
    :touch-drag="false"
    :wrap-around="true"
    class="images"
  >

    <Slide
      v-for="image in dish.images"
      :key="image"
      class="images__slide"
    >
      <img
        :src="image"
        alt="Image"
        class="images__image"
      >
    </Slide>

  </Carousel>

  <CarouselArrow
    class="images__arrow"
    @click="carousel.prev()"
  />
  <CarouselArrow
    class="images__arrow images__arrow_right"
    @click="carousel.next()"
  />

</template>

<style scoped lang="scss">

.images {
  width: 100%;
  height: 100%;

  position: relative;

  &__slide {
    display: grid;
    place-content: center;
  }

  &__image {
    width: calc(100% - 2 * 0.8rem);

    margin: 0 0.8rem;

    border-radius: 1.6rem;
  }

  &__arrow {
    position: absolute;
    top: 50%;
    left: 1.6rem;

    translate: 0 -50%;

    rotate: 180deg;

    &_right {
      left: auto;
      right: 1.6rem;

      rotate: 360deg;
    }
  }
}

</style>