<script setup lang="ts">

interface Props {
  isResettable: boolean;
}

interface Emits {
  reset: [];
}

defineProps<Props>();

const emits = defineEmits<Emits>();

</script>

<template>
  <header class="header">

    <p class="header__name">
      Filters
    </p>

    <transition name="reset">
      <FiltersReset
        v-if="isResettable"
        class="header__reset"
        @click="emits('reset')"
      />
    </transition>

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
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 1.6rem;

  &__name {
    margin: 0;
    color: #000;
    font: 400 normal 2.4rem/1.5 Inter, sans-serif;
  }

  &__reset {

  }
}


</style>