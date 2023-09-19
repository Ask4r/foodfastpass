<script setup lang="ts">

/*
* mama_pomogi2
* mai.karaskas@gmail.com
* abrakadabra911
* */



const isEmailInCheck = ref(false);

const username = ref('');
const email = ref('');
const password = ref('');
const passwordRepeat = ref('');


const isSubmitReady = computed(() => {
  const isNotEmpty = username.value !== ''
    && email.value !== ''
    && password.value !== ''
    && passwordRepeat.value !== '';

  const isEmailValid = /^.+@.+$/g.test(email.value);

  const isPasswordRepeated = password.value === passwordRepeat.value;

  return isNotEmpty
    && isEmailValid
    && isPasswordRepeated;
});


onBeforeUnmount(() => {
  isEmailInCheck.value = false;
});


async function submit() {
  if (!isSubmitReady)
    return;

  const response = await registerUser(
    email.value.trim(),
    username.value.trim(),
    password.value.trim(),
  );

  if (response === null)
    isEmailInCheck.value = true;
}

</script>

<template>
  <article>
    <HeaderForAccount/>

    <section class="registration">

      <div class="registration__section">
        <p class="registration__title">Username</p>
        <input v-model="username" type="text" placeholder="Enter your username" class="registration__field">
      </div>

      <div class="registration__section">
        <p class="registration__title">Email</p>
        <input v-model="email" type="email" placeholder="Enter your email" class="registration__field">
      </div>

      <div class="registration__section">
        <p class="registration__title">Password</p>
        <input v-model="password" type="password" placeholder="••••••••" class="registration__field">
      </div>

      <div class="registration__section">
        <p class="registration__title">Repeat password</p>
        <input v-model="passwordRepeat" type="password" placeholder="••••••••" class="registration__field">
      </div>

      <button
        :class="['registration__sign-up', {'registration__sign-up_disabled': !isSubmitReady}]"
        @click="submit"
      >
        Sign up
      </button>

      <p
        v-if="isEmailInCheck"
        class="registration__bottom-text"
      >
        The verification mail has been sent. Please check you mailbox.
      </p>

    </section>

  </article>
</template>

<style scoped lang="scss">

.registration {
  margin-top: 12.4rem;
  padding: 0 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  &__section {
    padding-bottom: 0.4rem;

    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  &__title {
    color: var(--dark-gray-color);
    font: 400 normal 1.2rem/1.5 Inter, sans-serif;
    text-wrap: balance;
  }

  &__field {
    padding: 1rem 1.4rem;

    color: var(--black-color);
    font: 400 normal 1.6rem/1.5 Inter, sans-serif;

    border-radius: 0.8rem;
    border: var(--light-color) 1px solid;
    outline-color: transparent;


    transition: all .2s ease;

    &:focus {
      outline-color: var(--dark-color);
    }
  }

  &__sign-up {
    padding: 1rem 1.8rem;
    color: var(--white-color);
    font: 600 normal 1.6rem/1.5 Inter, sans-serif;
    background: var(--dark-color);
    border: none;
    border-radius: 0.8rem;

    &_disabled {
      background: var(--medium-color);
    }
  }

  &__bottom-text {
    color: var(--dark-color);
    font: 400 normal 1.6rem/1.5 Inter, sans-serif;
    text-wrap: balance;
  }
}

</style>