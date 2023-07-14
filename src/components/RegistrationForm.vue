<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import { useRouter } from 'vue-router';

const props = defineProps({
  registration: { type: Boolean, default: false },
});

const router = useRouter();

const email = ref("")
const password = ref("")

const emit = defineEmits(['register']);

const register = async () => {
  
  if (props.registration) {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("REGANULSYA")
      router.push("/")
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    })
  }
  else {
    console.log("LOG IN");
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("LOGINULSYA")
      router.push("/")
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    })
  }
};


function showPassword() {
  let password = document.getElementById("password");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}
</script>

<template>

  <div>
    <label for="email" class="nameSlote">Email:</label>
    <input 
      id="email" 
      class="registrationSlot" 
      placeholder="Your email"
      v-model="email"
    >
  </div>
  <div>
    <label for="password" class="nameSlote">PSWD:</label>
    <input 
      id="password" 
      class="registrationSlot" 
      type="password"
      v-model="password"
      placeholder="Password must be 5-10 numbers"
    >
  </div>

  <div class="registrationCheckbox">
    <input type="checkbox" @click="showPassword()">Show Password
  </div>
  <div style="margin: 1rem 0;">
    <button class="btn" @click="register">
      Send
    </button>
  </div>
  <div>
  </div>
</template>

<style scoped>

</style>