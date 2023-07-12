<script setup>
import { ref } from 'vue'
import Logo from './Logo.vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="header">
    <div class="slotHeader">
      <router-link :to="{ name: 'Home' }">
        <Logo></Logo>
      </router-link>
      <div class="navBar">
        <router-link :to="{ name: 'Home' }">
        <div class="navigationMenu">
          <a class="btnNav">HOME</a>
        </div>
      </router-link>
        <router-link :to="{ name: 'Dino' }">
        <div class="navigationMenu">
          <a class="btnNav">DINO</a>
        </div>
      </router-link>
      <router-link :to="{ name: 'TicTacToe' }">
        <div class="navigationMenu">
          <a class="btnNav">YIC-TAC-TOE</a>
        </div>
      </router-link>
      </div>
    </div>
    <div>
      <router-link :to="{ name: 'SignUp' }">
        <button class="btn">Sign Up</button>
      </router-link>
      <router-link :to="{ name: 'LogIn' }">
        <button class="btn">Log in</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  background-color: #0D0407;
  max-width: 100vw;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
  z-index: 2;
  padding: 1rem 8rem 2px 8rem;
  color: white;
}

.slotHeader {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.navBar {
  display: flex;
  flex-flow: row nowrap;
}

.btnNav {
  height: 55px;
  display: flex;
  align-items: center;
  border-bottom: solid 4px #0D0407;
  margin: 0 20px 0 20px;
  font-size: 15px;
}

.btnNav:hover {
  border-bottom: 3px solid #A50ABE;
}

.btn {
  border: 1px solid #A50ABE;
  font-weight: 100;
  font-size: 1rem;
  margin: 0 0.5rem 0 0.5rem;
  box-shadow:
    0 0 1px #A50ABE,
    0 0 2px #A50ABE,
    0 0 5px #A50ABE,
    0 0 11px #A50ABE;
}
</style>
