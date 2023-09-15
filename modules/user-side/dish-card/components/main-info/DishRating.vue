<script setup lang="ts">

import type { Dish } from '~/modules/menu/types';


const props = defineProps<{
  dish: Dish;
}>();


const starRate = ref();

const isChanged = ref(false);

const submits = useDishSubmits();

const currentSetRating = ref<number>(0);


watch(
  () => props.dish.id,
  () => {
    currentSetRating.value = submits[props.dish.id] ?? 0;
    isChanged.value = false;
  },
);


function submit() {
  if (!isChanged.value || submits[props.dish.id])
    return;

  postDishRating(
    props.dish.id,
    currentSetRating.value,
  );

  submits[props.dish.id] = currentSetRating.value;
}

</script>

<template>
  <div class="rating">

    <StarRate
      ref="starRate"
      :rating="5"
      :is-static="submits[props.dish.id] !== undefined"
      v-model:is-changed="isChanged"
      v-model:rating-value="currentSetRating"
    />

    <ConfirmIcon @click="submit"/>

  </div>
</template>

<style scoped lang="scss">

.rating {
  display: flex;
  gap: 1rem;
}

</style>