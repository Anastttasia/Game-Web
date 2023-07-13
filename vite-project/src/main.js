import { createApp } from 'vue'
import { provide } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/pageMain.vue';
import Dino from './pages/pageGameDino.vue';
import TicTacToe from './pages/pageTicTacToe.vue';
import SignUp from './pages/pageSignUp.vue'
import LogIn from './pages/pageLogIn.vue'
import PocketBase from 'pocketbase';
import PROVIDE from './constants/provides.js';

const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/Dino',
            name: 'Dino',
            component: Dino,
        },
        {
            path: '/SignUp',
            name: 'SignUp',
            component: SignUp
        },
        {
            path: '/LogIn',
            name: 'LogIn',
            component: LogIn,
        },
        {
            path: '/TicTacToe',
            name: 'TicTacToe',
            component: TicTacToe
        },
    ],
    history: createWebHistory()
  });



const pb = new PocketBase('http://127.0.0.1:8090');
// const user = ref(pb.authStore.model);
// pb.authStore.onChange(() => {
//   console.log('> App -> authStore.onChange', pb.authStore.onChange.model);
//   user.value = pb.authStore.model;
// });
// const hasUser = computed(() => !!user.value);

  const app = createApp(App);
  app
    .provide(PROVIDE.PB, pb)
    .use(router)
    .mount('#app')
    
