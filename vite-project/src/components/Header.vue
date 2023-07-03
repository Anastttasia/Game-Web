<script setup>
import { ref } from 'vue'
import Logo  from './Logo.vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
    <div class="header">
        <div class="slotHeader">
          <Logo></Logo>
        <div class="navBar">
            <div class="navigationMenu">
                <a class="btnNav">NEW</a>
            </div>
            <div class="navigationMenu">
                <a class="btnNav">GAME</a>
            </div>
            <div class="navigationMenu">
                <a class="btnNav">NEW</a>
            </div>
            <div class="navigationMenu">
                <a class="btnNav">GAME</a>
            </div>
        </div>
        </div>
        <div>
          <button class="btn">Sign Up</button>
          <button class="btn">Log in</button>
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
  justify-content:space-between;
  align-items: center;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
  z-index: 2;
  margin-bottom: 60px;
  padding: 1rem 8rem 2px 8rem;
  color: white;
}
.slotHeader{
  display:flex;
  flex-direction: row;
  align-items: center;
  /* margin-left: 5rem; */
}

.navBar {
  display: flex;
  flex-flow: row nowrap;
  /* margin-left: 100px; */
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

/* .navgationLink {
  text-decoration: none;
  color: white;
  background: transparent;
  border: none;
}

.navgationLink:hover {
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
} */
.btn{
  border: 1px solid #A50ABE;
  font-weight: 100;
  font-size: 1rem;
  margin: 0 0.5rem 0 0.5rem;
  text-shadow: 
    0 0 1px #A50ABE,
    0 0 2px #A50ABE,
    0 0 5px #A50ABE,
    0 0 11px #A50ABE,
    0 0 20px #A50ABE,
    0 0 30px #A50ABE,
    0 0 55px #A50ABE,
    0 0 80px #A50ABE;
}
</style>
