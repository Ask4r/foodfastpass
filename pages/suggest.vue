<script setup lang="ts">

const { textarea, input } = useTextareaAutosize();


const sent = ref(false);

async function share() {
  const content = input.value.trim();

  if (content.length === 0)
    return;

  await useCustomFetch(
    '/menu/postMessage/',
    {
      method: 'POST',
      body: {
        pk: 0,
        message: content,
      },
    },
  );

  input.value = '';

  sent.value = true;
}

</script>

<template>
  <article class="suggest">

    <div class="suggest__top">
      <SuggestIcon/>
      <p class="suggest__header">suggest</p>
    </div>

    <h1 class="suggest__title">Get in touch</h1>

    <p class="suggest__description">Our friendly team would love to hear from you.</p>

    <textarea
      v-if="!sent"
      ref="textarea"
      v-model="input"
      class="suggest__textarea"
      placeholder="Leave us a message..."
    />

    <p
      v-else
      class="suggest__thanks"
    >
      Thank you!
    </p>

    <button
      class="suggest__button suggest__button_share"
      :class="{'suggest__button_active': input !== '' && input !== undefined && !sent}"
      @click="share"
    >
      Share
    </button>

    <button
      class="suggest__button suggest__button_go-back"
      @click="$router.go(-1)"
    >
      <ButtonArrow/>
      Go back
    </button>

  </article>
</template>

<style scoped lang="scss">

.suggest {
  margin: 6.4rem 2.4rem 0 2.4rem;

  &__top {
    margin-bottom: 1.2rem;

    display: inline-flex;
    gap: 0.8rem;
    align-items: center;
  }

  &__header {
    margin: 0;

    color: var(--dark-color);
    font-family: Inter, serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 2.4rem */
  }

  &__title {
    margin: 0 0 1.6rem 0;

    color: #000;
    font-family: Inter, serif;
    font-size: 3.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; /* 4.32rem */
  }

  &__description {
    margin: 0 0 3.2rem 0;

    color: var(--dark-color);
    font-family: Inter, serif;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 2.7rem */
  }

  &__textarea {
    width: 100%;
    min-height: 11rem;

    margin-bottom: 2rem;

    padding: 1.2rem 1.4rem;
    box-sizing: border-box;

    color: #000;
    font-family: Inter, serif;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 2.7rem */

    border-radius: 0.8rem;
    border: 1px solid var(--light-color);

    resize: none;

    //transition: all ease .2s;

    &::placeholder {
      color: var(--medium-color);
      font-family: Inter, serif;
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 2.7rem */
    }

    &:focus {
      outline: none;
      border: 1px solid var(--light-color);
    }
  }

  &__thanks {
    margin: 0 0 10.3rem 0;

    color: #000;
    font-family: Inter, serif;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 2.7rem */
  }

  &__button {
    width: 100%;

    margin-bottom: 1.2rem;

    padding: 1.2rem 2rem;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    border: none;
    border-radius: 0.8rem;

    font-family: Inter, serif;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 2.7rem */

    transition: all ease .2s;

    &_share {
      color: var(--white-color);
      background: var(--medium-color);
    }

    &_active {
      background: var(--dark-color);
    }

    &_go-back {
      color: var(--dark-color);
      background: var(--light-color);
    }

  }
}

</style>