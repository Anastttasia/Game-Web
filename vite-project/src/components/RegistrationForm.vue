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


function showPassword() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
</script>

<template>
  <!-- <h1>{{ title }}</h1> -->

  <div v-if="errors.length > 0">
    <div v-for="(error, index) in errors" :key="index" style="color: red;">
      <small>{{ error }}</small>
    </div>

  </div>
  <div>
    <label for="username" class="nameSlote">Username:</label>
    <input id="username" ref="inputUsername" class="registrationSlot">
  </div>
  <div>
    <label for="password" class="nameSlote">Password:</label>
    <input id="password" ref="inputPassword" class="registrationSlot" type="password">

  </div>
  <div class="registrationCheckbox">
    <input type="checkbox" @click="showPassword()">Show Password
  </div>

  <div>
    <label for="confirm" class="nameSlote">Confirm:</label>
    <input id="confirm" ref="inputConfirm" class="registrationSlot" type="password">
  </div>
  <div class="registrationCheckbox">
    <input type="checkbox" @click="showPassword()">Show Password
  </div>
  <div style="margin: 1rem 0;">
    <button class="btn" @click="onSendClick">
      Send
    </button>
  </div>
  <div>
  </div>
</template>

<style scoped>

</style>