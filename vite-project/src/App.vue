<script >
import Header from './components/Header.vue'
import Home from './pages/pageMain.vue';

export default {

data() {
    return {
        total: 0,
        itemsCount: 0
    };
},
components: { Header, Home },
methods: {
},
mounted() {
}
};
</script>

<template>
  <Header></Header>
  <div class="mainContainer">
    <router-view/>
  </div>
</template>

<style scoped>
.mainContainer{
  width: 80vw;
  height: 100vh;
  background-color: rgba(34, 22, 38, 0.42) ;
  margin: auto;
}

@media screen and (max-width: 1270px) {
  .mainContainer{
    width: 90vw;
  }
}
</style>
