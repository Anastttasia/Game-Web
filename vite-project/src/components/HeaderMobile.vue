<script>
import { ref } from 'vue'
import Logo from './Logo.vue'

export default {
    data() {
    },
    components: { Logo },
    emits: ['updateTotal'],
    methods: {
        update() {
            this.$emit('updateTotal');
        },
    }
};

// defineProps({
//   msg: String,
// })

const count = ref(0)


function openNavBar() {
  let bgMobileNavBar = document.getElementById('bgMobileNavBar');
  bgMobileNavBar.classList.add('bgMobileNavBar');
  let navBarMobileBlock = document.getElementById('mobileNavBar');
  navBarMobileBlock.classList.add('showNavBarMobile');
  let openModalBlock = document.getElementById('openModal');
  console.log(openModalBlock.style.display)
  openModalBlock.style.display = 'none';
}
function closeNavBar() {
  let bgMobileNavBar = document.getElementById('bgMobileNavBar');
  bgMobileNavBar.classList.remove('bgMobileNavBar');
  let navBarMobileBlock = document.getElementById('mobileNavBar');
  navBarMobileBlock.classList.remove('showNavBarMobile');
  navBarMobileBlock.classList.add('closeMobileNavBar');
  let openModalBlock = document.getElementById('openModal');
  openModalBlock.style.display = '';
}
</script>

<template>
  <div id="bgMobileNavBar"></div>


  <div class="header">
    <div class="slotHeader">
      <Logo></Logo>

      <button 
        @click="openNavBar()" 
        id="openModal" 
        class="buttonNavBar" 
        type="submit">
        <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg">
          <g fill="#ffffff" fill-rule="evenodd">
            <path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" />
            <path d="M0 0h40v3H0z" />
          </g>
        </svg>
    </button>

      <div id="mobileNavBar" class="navBarMobile">
        <button 
          @click="closeNavBar()"
          class="buttonNavBar buttonClose" 
          type="submit">
          <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg">
            <g fill="#ffffff" fill-rule="evenodd">
              <path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" />
              <path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" />
            </g>
          </svg>
        </button>
        <div class="ulNavBarMobile">
          <span class="navSlotHeader">NEW</span>
          <span class="navSlotHeader">GAME</span>
          <span class="navSlotHeader">NEW</span>
        </div>
        <div class="btnBlockMobile" >
          <button class="btn">Sign Up</button>
          <button class="btn">Log in</button>
        </div>
      </div>

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
    <div class="btnBlockDecstop" >
      <button class="btn">Sign Up</button>
      <button class="btn">Log in</button>
    </div>
  </div>
</template>

<style scoped>
.navBarMobile {
  display: none;
}

.buttonNavBar {
  display: none;
}

.ulNavBarMobile {
  display: none;
}

.btnBlockMobile{
  display: none;
}

.nav {
  width: 35%;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
}

.navSlotHeader {
  color: rgba(0, 0, 0, 0.7);
}

.navSlotHeader:hover {
  color: red;
}

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

/* .navgationLink {
  text-decoration: none;
  color: white;
  background: transparent;
  border: none;
}

.navgationLink:hover {
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
} */
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

@media screen and (orientation: portrait) {

  body {
    padding: 0 1rem 0 1rem;
  }

  .navBar {
  display: none;
}
.btnBlockDecstop{
  display: none;
}

  .bgMobileNavBar {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 3;
    background-color: rgba(93, 95, 121, 0.7);
  }

  .navBarMobile {
    position: fixed;
    z-index: 5;
    right: 0;
    top: 0;
    width: calc(100vw - 30%);
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    transition: all 1s;
  }

  .showNavBarMobile {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  .buttonNavBar {
    display: block;
    border: none;
    background: transparent;
    background-color: transparent;
  }

  .buttonClose {
    position: fixed;
    top: 0;
    right: 0;
    margin: 2rem 2rem 0 0;
  }

  .ulNavBarMobile {
    display: flex;
    flex-direction: column;
    padding: 5rem 0 0 1rem;
  }

  .navSlotHeader {
    padding: 0.75rem;
    color: #0c0912;
  }

  .header {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 20px 0;
  }

  .nav {
    display: none;
  }
}
</style>
