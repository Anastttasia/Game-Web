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
  <h1>{{ title }}</h1>

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


  <div style="margin: 1rem 0;">
    <button class="btn" @click="onSendClick" style="width: 8rem;">
      Sign in
    </button>
  </div>
</template>

<style scoped>
/* .password {
	width: 300px;
	margin: 15px auto;
	position: relative;
}
#password-input {
	width: 100%;
	padding: 5px 0;
	height: 30px;
	line-height: 40px;
	text-indent: 10px;
	margin: 0 0 15px 0;
	border-radius: 5px;
	border: 1px solid #999;
	font-size: 18px;
} */
.password-control {
  position: absolute;
  top: 11px;
  right: 6px;
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(https://snipp.ru/demo/495/view.svg) 0 0 no-repeat;
}

.password-control.view {
  background: url(https://snipp.ru/demo/495/no-view.svg) 0 0 no-repeat;
}

.registrationSlot {
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


.registrationCheckbox {
  width: 20rem;
  height: 3rem;
  border: none;
  font-weight: 100;
  font-size: 1rem;
  margin-left: 2rem;
}

.nameSlote {
  font-size: 1.5rem;
}
</style>