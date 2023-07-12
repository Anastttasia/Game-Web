<script>
import * as myModule from '../dinoGame.js';
import { watch } from 'vue';

export default {
    props: [],
    data() {
        return {
            isPaused: myModule.isPaused,
            isAlive: myModule.isAlive,
            message: ''
        };
    },
    emits: [],
    methods: {
        startGame() {
            myModule.play();
            this.isPaused = myModule.isPaused;
            this.isAlive = myModule.isAlive
        },
        stopGame() {
            myModule.pause();
            this.isPaused = myModule.isPaused;
            this.isAlive = myModule.isAlive
        },
        restartGame() {
            myModule.restart();
            this.isPaused = myModule.isPaused;
            this.isAlive = myModule.isAlive
        },
        pollData () {

            this.isPaused = myModule.isPaused;
            this.isAlive = myModule.isAlive;
	    }
    },
    mounted() {
        myModule.init();
        this.isPaused = myModule.isPaused;
        this.isAlive = myModule.isAlive;
        setInterval(() => {

            this.isPaused = myModule.isPaused;
            this.isAlive = myModule.isAlive;
        }, 100)
    }
}

</script>

<template>
    <div class="content">
        <span class="nameGame">DINO</span>
        <div class="containerForGame">

            <canvas id="infoCanvas" width="600" height="30"></canvas>
            <canvas id="gamePlayCanvas" width="600" height="200"></canvas>
            <canvas id="gameOverCanvas" width="600" height="120"></canvas>
            <div class="centerContainer">
                <button id="restartButton"><img src="../image/DinoAssets/restart.png" alt="Перезагрузка"></button>
            </div>

        </div>
        <button class="btn" v-on:click="startGame()" v-if="isPaused && isAlive">Start</button>
        <button class="btn" v-on:click="stopGame()" v-if="!isPaused && isAlive">Pause</button>
        <button class="btn" v-on:click="restartGame()" v-if="!isAlive">Restart</button>
    </div>


</template>

<style>

@import url("https://fonts.google.com/?query=Press+Start+2P");

#infoCanvas{
    margin:auto;
    display: flex;
    justify-content: center;
}

#gamePlayCanvas{
    border-bottom: 1px solid;
    margin:auto;
    display: flex;
    justify-content: center;
}

#gameOverCanvas {
    font-family: 'Courier New', Courier, monospace;
    margin:auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

img{
    width: 45px;
    height: 45px;
}

.centerContainer{
    width: 600px;
    height: 60px;
    margin:auto;
    display: flex;
    justify-content: center;
}


#restartButton{
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    background: transparent ;
    border: transparent;
}

#restartButton:hover{
    background: #D6D7D7;
    box-shadow: 3px 3px 3px #B2ADA9;
}

.content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ;
}

.nameGame{
    color: white;
    font-weight: 100;
    margin-bottom: 4rem;
    font-size: 3rem;
    line-height: 95%;
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
.containerForGame{
    width: 60%;
    height: 50%;
    border: 1px solid #A50ABE;
    font-weight: 100;
    font-size: 1rem;
    margin: 0 0.5rem 0 0.5rem;
    background-color: #684f86;
    box-shadow: 
        0 0 1px #A50ABE,
        0 0 2px #A50ABE,
        0 0 5px #A50ABE,
        0 0 11px #A50ABE,
        0 0 20px #A50ABE,
        0 0 30px #A50ABE,
        0 0 55px #A50ABE;
}

.btn{
    width: 6rem;
    border: 1px solid #A50ABE;
    font-weight: 100;
    font-size: 1.2rem;
    margin-top: 4rem;
    box-shadow: 
        0 0 1px #A50ABE,
        0 0 2px #A50ABE,
        0 0 5px #A50ABE,
        0 0 11px #A50ABE;
}
</style>