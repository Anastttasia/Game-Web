<script>
import * as myModule from '../dinoGame.js';
import { watch } from 'vue';

export default {
    props: [],
    data() {
        return {
            isPaused: myModule.isPaused,
            isAlive: myModule.isAlive,
            id: 0
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
    activated() {
        myModule.init();
        this.isPaused = myModule.isPaused;
        this.isAlive = myModule.isAlive;
        this.id = setInterval(() => {

            this.isPaused = myModule.isPaused;
            this.isAlive = myModule.isAlive;
        }, 100)
    },
    deactivated() {
        myModule.stop();
        clearInterval(this.id);
    },
    mounted() {
        myModule.init();
        this.isPaused = myModule.isPaused;
        this.isAlive = myModule.isAlive;
        this.id = setInterval(() => {

            this.isPaused = myModule.isPaused;
            this.isAlive = myModule.isAlive;
        }, 100)
    },
    unmounted() {
        myModule.stop();
        clearInterval(this.id);
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

</style>