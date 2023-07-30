<script setup lang="ts">

interface Props {
  isActive: boolean,
  filterName: string,
}

withDefaults(
  defineProps<Props>(),
  { isActive: false },
);

</script>

<template>
  <p
    class="filter"
    :class="{'filter_active': isActive}"
  >
    {{ filterName }}
  </p>
</template>

<style scoped lang="scss">

.filter {
  margin: 0;

  color: #000;
  font-family: Inter, serif;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 2.4rem */

  transition: all ease .2s;

  text-decoration: underline;

  &_active {
    color: var(--dark-color);
  }
}

</style>
