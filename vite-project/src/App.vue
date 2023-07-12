<script >
import Header from './components/Header.vue'
import Home from './pages/pageMain.vue';
// import game from './pages/pageGame.vue'
// import signUp from './pages/pageSignUp.vue'
// import mainPage from './pages/pageMain.vue'
import * as myModule from './main.js';

export default {

data() {
    return {
        total: 0,
        itemsCount: 0
    };
},
components: { Header, Home },
methods: {
    updateCart() {
        let cartData = myModule._getCartData()
        
        let counterTotal = 0;
        let itemsCount = 0;

        for (let key in cartData) {
            if (cartData[key]) {
                counterTotal = counterTotal + Number(cartData[key].itemData.price * cartData[key].count);
                itemsCount = itemsCount + cartData[key].count;
            }
        }
        
        this.total = Math.ceil(counterTotal);
        this.itemsCount = itemsCount;
    },
},
mounted() {
    this.updateCart();
}
};
</script>

<template>
  <Header></Header>
  <div class="mainContainer">
    <router-view v-on:updateTotal="updateCart()"/>
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
