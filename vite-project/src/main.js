import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/pageMain.vue';
import Dino from './pages/pageGameDino.vue';
import SignUp from './pages/pageSignUp.vue'
import LogIn from './pages/pageLogIn.vue'


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
    ],
    history: createWebHistory()
  })

  const app = createApp(App);
  app.use(router);
  app.mount('#app');
