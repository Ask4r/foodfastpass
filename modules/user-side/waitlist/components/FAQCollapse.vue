<script setup lang="ts">

import { Collapse } from 'vue-collapsed';


const props = withDefaults(
  defineProps<{
    isCollapsed?: boolean;
  }>(),
  {
    isCollapsed: true,
  },
);

const folded = ref(props.isCollapsed);


function toggleFold() {
  folded.value = !folded.value;
}

</script>

<template>
  <div class="question-container">

    <div class="question-title" @click="toggleFold">

      <p class="question-body">
        <slot name="question"></slot>
      </p>

      <transition name="rotate">
        <SoftArrow
          class="arrow"
          :style="{transform: folded ?  'rotate(0deg)' : 'rotate(180deg)'}"
        />
      </transition>

    </div>

    <collapse :when="!folded" class="collapse">
      <p class="question-answer">
        <slot name="answer"></slot>
      </p>
    </collapse>

  </div>
</template>

<style scoped lang="scss">

.question-container {
  margin: 0;
}

.question-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;

}

.question-body {
  width: calc(100% - 5.46rem);
  margin: 1.2rem 0 1.6rem 0;

  font-family: 'Helvetica Neue', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 100%;
  letter-spacing: -0.04em;

  color: #000000;
}

.rotate-enter-active {
  animation: rotate 0.2s;
}

.rotate-leave-active {
  animation: rotate 0.2s reverse;
}

@keyframes rotate {
  0% {
    opacity: 0;
    transform: rotate(0deg);
  }
  100% {
    opacity: 1;
    transform: rotate(-180deg);
  }
}

.arrow {
  width: 1.5rem;
  height: 1rem;
  transform: rotate(180deg);
  transition: all ease .2s;
}

.collapse {
  transition: height .2s cubic-bezier(0.3, 0, 0.6, 1);
}

.question-answer {
  width: 100%;

  padding-bottom: 1.8rem;
  margin: 0;

  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 143%;
  text-align: justify;
  letter-spacing: -0.04em;

  color: #2D0F44FF;
  mix-blend-mode: luminosity;
}

</style>