import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/pageMain.vue';
import Dino from './pages/pageGameDino.vue';
import TicTacToe from './pages/pageTicTacToe.vue';
import SignUp from './pages/pageSignUp.vue'
import LogIn from './pages/pageLogIn.vue'

import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCsBe_eXYLJWY2gmAJsT5QwSS7HWu-FLto",
  authDomain: "gameplatform-177f8.firebaseapp.com",
  projectId: "gameplatform-177f8",
  storageBucket: "gameplatform-177f8.appspot.com",
  messagingSenderId: "429360091394",
  appId: "1:429360091394:web:382ac07c5b7a8ae30e721b"
};

const app = initializeApp(firebaseConfig);

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
            meta: {
                requiresAuth: true,
            }
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
            component: TicTacToe,
            meta: {
                requiresAuth: true,
            }
        },
    ],
    history: createWebHistory()
  });

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (getAuth().currentUser) {
            next();
        } else {
            alert("Please Sign Up or Sign In before play!");
            next('/');
        }
    }
    else {
        next();
    }
});

createApp(App)
.use(router)
.mount('#app')
    
