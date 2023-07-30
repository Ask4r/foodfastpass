<script setup lang="ts">

interface Props {
  rating: number;
  isStatic: boolean;
  isChanged: boolean;
  ratingValue: number;
}

interface Emits {
  'update:isChanged': [value: boolean];
  'update:ratingValue': [rate: number];
}

const props = withDefaults(
  defineProps<Props>(),
  {
    rating: 5,
    ratingValue: 0,
    isStatic: false,
  },
);

const emits = defineEmits<Emits>();


function starClick(rate: number) {
  if (props.isStatic) return;

  emits('update:isChanged', true);
  emits('update:ratingValue', rate);
}

</script>


<template>
  <div
    class="star-rating"
    :class="{'star-rating_static': isStatic}"
  >
    <svg
      v-for="num in rating"
      :key="num"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      class="star-rating__star"
      :class="{'star-rating__star_active': ratingValue >= num}"
      @click="starClick(num)"
    >
      <g>
        <path
          d="
          m10.201,.758
          l2.478,5.865 6.344,.545
          c0.44,0.038 0.619,0.587 0.285,0.876
          l-4.812,4.169 1.442,6.202
          c0.1,0.431-0.367,0.77-0.745,0.541
          l-5.452-3.288-5.452,3.288
          c-0.379,0.228-0.845-0.111-0.745-0.541
          l1.442-6.202-4.813-4.17
          c-0.334-0.289-0.156-0.838 0.285-0.876
          l6.344-.545 2.478-5.864
          c0.172-0.408 0.749-0.408 0.921,0
          z
          "
        />
      </g>
    </svg>
  </div>
</template>

<style scoped lang="scss">

.star-rating {
  --star-color: #F3D11E;

  display: flex;
  gap: 0.5rem;

  &_static {
    --star-color: var(--medium-color);
  }

  &__star {
    width: 2.4rem;
    height: 2.4rem;

    fill: transparent;
    stroke: var(--star-color);
    stroke-width: 0.2rem;

    transition: all ease .2s;

    &_active {
      fill: var(--star-color);
    }
  }
}

</style>