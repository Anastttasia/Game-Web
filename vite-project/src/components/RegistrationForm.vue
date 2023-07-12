<script setup>
import { ref } from 'vue';

const props = defineProps({
  registration: { type: Boolean, default: false },
  title: { type: String, default: '' },
  errors: { type: Array, default: () => [] },
});

const emit = defineEmits(['login', 'register']);

const inputUsername = ref(null);
const inputPassword = ref(null);
const inputConfirm = ref(null);

const checkPasswordsMatch = () => inputPassword.value.value === inputConfirm.value?.value;

const onSendClick = async () => {
  const username = inputUsername.value.value || '';
  const password = inputPassword.value.value || '';
  const dto = { username, password };
  const canRegister = props.registration && checkPasswordsMatch();
  console.log('> RegistrationForm -> onSendClick', canRegister);
  if (canRegister) {
    emit('register', dto);
  } else {
    emit('login', dto);
  }
};
</script>

<template>
  <h1>{{ title }}</h1>

  <div v-if="errors.length > 0">
    <div
      v-for="(error, index) in errors"
      :key="index"
      style="color: red;"
    >
      <small>{{ error }}</small>
    </div>

  </div>
  <div>
    <label for="username" class="nameSlote">Username:</label>
    <input
      id="username"
      ref="inputUsername"
      class="registrationSlot"
    >
  </div>
  <div>
    <label for="password" class="nameSlote">Password:</label>
    <input
      id="password"
      ref="inputPassword"
      class="registrationSlot"
    >
  </div>
  <div v-if="registration">
    <label for="confirm" class="nameSlote">Confirm:</label>
    <input
      id="confirm"
      ref="inputConfirm"
      class="registrationSlot"
    >
  </div>
  <div style="margin: 1rem 0;">
    <button
        class="btn"
        @click="onSendClick">
      Send
    </button>
  </div>
  <div>
  </div>
</template>

<style scoped>

.registrationSlot{
    width: 20rem;
    height: 3rem;
    border: 1px solid #A50ABE;
    font-weight: 100;
    font-size: 1rem;
    margin: 2rem;
    box-shadow: 
        0 0 1px #A50ABE,
        0 0 2px #A50ABE,
        0 0 5px #A50ABE,
        0 0 11px #A50ABE,
        0 0 20px #A50ABE,
        0 0 30px #A50ABE;
      }

    .nameSlote{
        font-size: 1.5rem;
    }
</style>