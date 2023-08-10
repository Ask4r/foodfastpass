<script setup lang="ts">

interface Props {
  sectionIndex: number;
}

interface Emits {
  'update:sectionIndex': [ sectionId: number ];
}

defineProps<Props>();

const emits = defineEmits<Emits>();

</script>

<template>
  <nav class="nav">

    <div
      class="nav__item-wrapper"
      @click="emits('update:sectionIndex', 0)"
    >
      <CardNavigationImages
        :is-active=" sectionIndex === 0"
        class="nav__item"
      />
    </div>

    <div
      class="nav__item-wrapper"
      @click="emits('update:sectionIndex', 1)"
    >
      <CardNavigationMain
        :is-active=" sectionIndex === 1"
        class="nav__item"
      />
    </div>

    <div
      class="nav__item-wrapper"
      @click="emits('update:sectionIndex', 2)"
    >
      <CardNavigationAdditional
        :is-active=" sectionIndex === 2"
        class="nav__item"
      />
    </div>

  </nav>
</template>

<style scoped lang="scss">

.nav {
  width: calc(100% - 2 * 2.4rem);
  height: 7.2rem;

  display: grid;
  grid: auto / repeat(3, 1fr);

  background: var(--white-color);

  &__item-wrapper {
    display: grid;
    place-items: center;
  }

  &__item {
    width: 2.4rem;
    height: 2.4rem;

    margin: 0;

    color: #000;
    font-size: 1.2rem;
    font-family: Cerebri Sans Pro, serif;
    font-weight: 400;
    line-height: 100%;

    text-align: center;
  }
}

</style>