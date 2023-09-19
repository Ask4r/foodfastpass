<script setup lang="ts">

defineProps<{
  isResettable: boolean;
}>();

const emits = defineEmits<{
  reset: [];
  exit: [];
}>();

</script>

<template>
  <header class="header">

    <p class="header__name">
      Filters
    </p>

    <span style="height: 2rem;">
    <transition name="reset">
        <ResetIcon
          v-if="isResettable"
          class="header__reset"
          @click="emits('reset')"
        />
    </transition>
    </span>

    <CrossIcon
      class="header__exit"
      @click="emits('exit')"
    />

  </header>
</template>

<style scoped lang="scss">

.reset {
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-enter-active {
    transition: opacity .1s ease;
    animation: rotation .2s;
  }

  &-leave-active {
    transition: opacity .1s ease .1s;
    animation: rotation .2s;
  }
}

@keyframes rotation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(180deg);
  }
}


.header {
  display: grid;
  grid: auto / max-content auto min-content;
  place-items: center start;
  gap: 1.6rem;

  &__name {
    color: var(--black-color);
    font: 400 normal 2.4rem/1.5 Inter, sans-serif;
  }

  &__reset {

  }

  &__exit {

  }
}


</style>