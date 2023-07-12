<script>
import * as myModule from '../TicTacToe.js';
import '../styleTicTacToe.css';
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