<script setup lang="ts">

defineProps<{
  sectionIndex: number;
}>();

const emits = defineEmits<{
  'update:sectionIndex': [ sectionId: number ];
}>();

</script>

<template>
  <nav class="nav">

    <div
      class="nav__item-wrapper"
      @click="emits('update:sectionIndex', 0)"
    >
      <ImageIcon
        :color="sectionIndex === 0 ? 'var(--dark-color)' : 'var(--dark-gray-color)'"
        class="nav__item"
      />
    </div>

    <div
      class="nav__item-wrapper"
      @click="emits('update:sectionIndex', 1)"
    >
      <MainContentIcon
        :color="sectionIndex === 1 ? 'var(--dark-color)' : 'var(--dark-gray-color)'"
        class="nav__item"
      />
    </div>

    <div
      class="nav__item-wrapper"
      @click="emits('update:sectionIndex', 2)"
    >
      <InfoIcon
        :color="sectionIndex === 2 ? 'var(--dark-color)' : 'var(--dark-gray-color)'"
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
  }
}

</style>