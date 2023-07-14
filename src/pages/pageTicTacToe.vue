<script>
import * as myModule from '../TicTacToe.js';
import '../styleTicTacToe.css';

export default {
    props: [],
    data() {
        return {
        };
    },
    emits: [],
    methods: {
        restartGame() {
            myModule.restartGame();

        }
    },
    activated() {
        myModule.init();
    },
    deactivated() {
        myModule.stopGame();
    },
    mounted() {
        myModule.init();
    },
    unmounted() {
        myModule.stopGame();
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
            </div>

        </div>
       <button class="btn" v-on:click="restartGame()" v-if="!isAlive">Restart</button>
    </div>
</template>

<style>

@import url("https://fonts.google.com/?query=Press+Start+2P");

</style>