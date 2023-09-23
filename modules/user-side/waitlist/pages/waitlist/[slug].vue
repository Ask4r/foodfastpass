<script setup lang="ts">

onMounted(() => {
  useEventListener(window, 'beforeunload', () => {
    window.scrollTop(0);
  });
});

</script>

<template>
  <article>

    <WaitlistHeader/>

    <AppIntro/>
    <AddToWaitlist/>
    <FrequentlyAskedQuestions/>

    <WaitlistFooter/>

  </article>
</template>

<style scoped lang="scss">

</style>