<script setup lang="ts">

const route = useRoute();

const userEmail = ref('');

// const emailError = ref(false);

const userIsRegistered = ref(false);

const shakeDisabled = ref(false);

const userAlreadyAdded = ref(false);

const emailInput = ref();

const emailButton = ref();


function sendEmail() {
  if (!/^.+@.+$/g.test(userEmail.value)) {
    warnDisabled();
    userIsRegistered.value = false;
    userAlreadyAdded.value = false;
    return;
  }

  emailInput.value.style.background = 'linear-gradient(white, white) padding-box, ' +
    'linear-gradient(to right, #A96DDD, #6432F4, #A96DDD) border-box';

  postEmail(userEmail.value, route.params.slug as string)
    .then(code => {

      switch (code) {
        case (2):
          userAlreadyAdded.value = true;
          inputDisable();
          userIsRegistered.value = false;
          break;
        case (1):
          userIsRegistered.value = true;
          inputDisable();
          userAlreadyAdded.value = false;
          break;
        case (0):
        default:
          warnDisabled();
          userIsRegistered.value = false;
          userAlreadyAdded.value = false;
      }
    })
    .catch(console.error);

}

function warnDisabled() {
  shakeDisabled.value = true;
  setTimeout(() => {
    shakeDisabled.value = false;
  }, 1500);
}

function inputDisable() {
  emailInput.value.style.background = 'linear-gradient(white, white) padding-box, #11253E border-box';

  emailInput.value.style.pointerEvents = 'none';
  emailButton.value.style.pointerEvents = 'none';

}
</script>

<template>
  <section class="form-container">

    <h2 class="title">Be the first to try it out!</h2>

    <input
      ref="emailInput"
      v-model="userEmail"
      id="email-input-to-scroll"
      type="email"
      placeholder="Enter your email address"
      autocomplete="off"
      class="email-input"
    />

    <button
      ref="emailButton"
      class="email-button"
      @click="sendEmail"
    >
      Join Waitlist
    </button>

    <div :class="{ shake: shakeDisabled }">

      <p
        v-if="shakeDisabled"
        key="invalid-email"
        class="message error-message"
      >
        Email is incorrect! Check it and try again.
      </p>

      <p
        v-else-if="userIsRegistered"
        key="registration-successful"
        class="message success"
      >
        Your email has been added!
      </p>

      <p
        v-else-if="userAlreadyAdded"
        key="registration-repeated"
        class="message success"
      >
        Your email has been added already!
      </p>

    </div>

  </section>
</template>

<style scoped lang="scss">

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-0.1rem, 0, 0);
  }
  20%, 80% {
    transform: translate3d(0.2rem, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-0.4rem, 0, 0);
  }
  40%, 60% {
    transform: translate3d(0.4rem, 0, 0);
  }
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  margin: 0 0 1.8rem 0;

  font-family: 'Helvetica Neue', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2.9rem;
  line-height: 100%;
  text-align: center;

  display: flex;
  align-self: center;
  letter-spacing: -0.04em;

  color: white;

  mix-blend-mode: normal;
  text-shadow: -2rem .4rem 5rem rgba(255, 255, 255, 0.3);
}

.email-input {
  width: min(26rem, 100vw - 6rem);
  height: 2.7rem;

  margin-top: 0;
  margin-bottom: 1.5rem;

  padding-left: 1em;

  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 100%;
  text-align: start;
  letter-spacing: -0.04em;

  background: linear-gradient(white, white) padding-box, #11253E border-box;
  border-radius: 35em;
  border: 0.3rem solid transparent;
  box-shadow: 0 0 1rem .2rem rgba(0, 0, 0, 0.2);

  &:focus {
    outline: none;
    background: linear-gradient(white, white) padding-box, #11253E border-box;
    border: .3rem solid transparent;
  }

}

.email-button {
  width: 9.4rem;
  height: 2.8rem;

  padding: 0;

  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: -0.04em;
  text-decoration: none;
  text-align: center;
  vertical-align: bottom;

  color: #FFFFFF;
  background: #11253E;
  border: none;
  border-radius: 50em;

  transition: all ease .2s;

  &:active {
    background: var(--primary-color);
    transform: scale(0.95);
  }
}


.message {
  position: absolute;
  margin: 1rem 0 0 0;
  font-family: 'Helvetica Neue', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 100%;
  letter-spacing: -0.04em;
  white-space: nowrap;
  transform: translateX(-50%);
}

.success {
  color: white;
}

</style>