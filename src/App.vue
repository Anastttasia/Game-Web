<script >
import Header from './components/Header.vue'
import Home from './pages/pageMain.vue';
import Footer from './components/Footer.vue';
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"
import { useRouter } from 'vue-router';

let router;

let auth;


export default {

data() {
    return {
        isLoggedIn: false
    };
},
components: { Header, Home, Footer },
methods: {
  handleSignOut() {
    signOut(auth).then(() => {
      router.push("/");
    });
  }
},
mounted() {
  router = useRouter();
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    console.log("onAuthStateChanged")
    if (user) {
      this.isLoggedIn = true;
    }
    else {
      this.isLoggedIn = false;
    }
  });
}
};
</script>

<template>
  <Header v-on:sign-out="handleSignOut()" :isLoggedIn="isLoggedIn"></Header>
  <div class="mainContainer">
    <router-view :isLoggedIn="isLoggedIn"/>
  </div>
  <Footer></Footer>
</template>

<style scoped>
.mainContainer{
  width: 80vw;
  height: 80vh;
  background-color: rgba(34, 22, 38, 0.42) ;
  margin: auto;
}

@media screen and (max-width: 1270px) {
  .mainContainer{
    width: 90vw;
  }
}
</style>
