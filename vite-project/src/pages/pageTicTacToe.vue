<script>
import * as myModule from '../TicTacToe.js';
import '../styleTicTacToe.css';

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
        pollData() {

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
        <span class="nameGame">TIC-TAC-TOE</span>
        <div class="containerForGame">

            <div class="main">
                <div class="containerScore">
                    <div class="score">СЧЕТ ИГРЫ</div>
                    <div class="styleContainerScore">
                        <div>игрок</div>
                        <div class="infoBlock"></div>
                        <div>бот</div>
                    </div>
                </div>
                <div class="contentGame">
                    <div class="wrap">
                        <div>
                            <div class="cell" data-num="0"></div>
                            <div class="cell" data-num="1"></div>
                            <div class="cell" data-num="2"></div>
                        </div>
                        <div>
                            <div class="cell" data-num="3"></div>
                            <div class="cell" data-num="4"></div>
                            <div class="cell" data-num="5"></div>
                        </div>
                        <div>
                            <div class="cell" data-num="6"></div>
                            <div class="cell" data-num="7"></div>
                            <div class="cell" data-num="8"></div>
                        </div>
                    </div>
                </div>
                <button 
                    @click="restartGame()" 
                    class="buttonAgainInGame">
                    Еще раз!
                </button>
            </div>

        </div>
        <button class="btn" v-on:click="startGame()" v-if="isPaused && isAlive">Start</button>
        <button class="btn" v-on:click="stopGame()" v-if="!isPaused && isAlive">Pause</button>
        <button class="btn" v-on:click="restartGame()" v-if="!isAlive">Restart</button>
    </div>
</template>

<style>

@import url("https://fonts.google.com/?query=Press+Start+2P");

</style>