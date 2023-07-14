//FISRT INIT STEPS
let infoCanvas = null;
let infoCanvasContext = null;

let gamePlayCanvas = null;
let gamePlayCanvasContext = null;

let gameOverCanvas = null;
let gameOverCanvasContext = null;

let isEnded = false;

//CONSTANTS
const IMG_SIZE = 50;
let FLOOR_GAME_Y = IMG_SIZE;

const GRAVITY_SPEED = 0.15;
let JUMP_SPEED = 0;


let CACTUS_START_X_POS = 0;
let CACTUS_X_SPEED = 5;
const MAX_CACTUS_X_SPEED = 50;

//VARS
let dino = new Image();
let dinoY;

let cactus = new Image();
let cactusX;

let score;

let lastTime = Date.now();

export let isAlive = false;
export let isPaused = true;

function drawGame() {

    let thisTime = Date.now();
    let loopTime = thisTime - lastTime;

    infoCanvasContext.clearRect(0, 0, infoCanvas.width, infoCanvas.height);
        
    gamePlayCanvasContext.clearRect(0, 0, gamePlayCanvas.width, gamePlayCanvas.height);
    gameOverCanvasContext.clearRect(0, 0,  gameOverCanvas.width, gameOverCanvas.height);

    if (loopTime > 10) {

        if (dinoY < IMG_SIZE && cactusX < IMG_SIZE && cactusX > 0 - IMG_SIZE) {
            isAlive = false;
            isPaused = true;
        }

        if(isAlive && !isPaused) {
            score +=1;
            dinoY += JUMP_SPEED;
            //GAME PLAY
            if (dinoY > 0) {
                JUMP_SPEED -= GRAVITY_SPEED;
            }
            else {
                dinoY = 0;
                JUMP_SPEED = 0;
            }

            //SPEED CACTUS
            if(cactusX + IMG_SIZE > 0){
                cactusX -= CACTUS_X_SPEED;
            }
            else {
                cactusX = CACTUS_START_X_POS + CACTUS_X_SPEED;
            }
            
        }
        else if (!isAlive) {
            //GAME OVER BLOCK DRAW
            gameOverCanvasContext.fillText("GAME OVER", 120, 100);
        }
        else if (isPaused) {
            //GAME OVER BLOCK DRAW
            gameOverCanvasContext.fillText("GAME PAUSED", 120, 100);
        }
        
        lastTime = thisTime;
        if (CACTUS_X_SPEED < MAX_CACTUS_X_SPEED) {
            CACTUS_X_SPEED = CACTUS_X_SPEED + 0.001;
        }
        
    }
        
    //TOP BLOCK DRAW
    infoCanvasContext.fillText("Счёт:" + score, 450, 25);
    
    //BOTTOM BLOCK DRAW
    gamePlayCanvasContext.drawImage(dino, 0, FLOOR_GAME_Y - dinoY, IMG_SIZE, IMG_SIZE);
    gamePlayCanvasContext.drawImage(cactus, cactusX, FLOOR_GAME_Y, IMG_SIZE, IMG_SIZE);


    if (isEnded) return;
    window.requestAnimationFrame(drawGame);
}

function jump() {
    if (JUMP_SPEED == 0) {
        JUMP_SPEED = 6;
    }
}

export function init(){

    infoCanvas = document.getElementById("infoCanvas");
    infoCanvasContext = infoCanvas.getContext("2d");

    gamePlayCanvas = document.getElementById("gamePlayCanvas");
    gamePlayCanvasContext = gamePlayCanvas.getContext("2d");

    gameOverCanvas = document.getElementById("gameOverCanvas");
    gameOverCanvasContext = gameOverCanvas.getContext("2d");

    FLOOR_GAME_Y = gamePlayCanvas.height - IMG_SIZE;

    CACTUS_START_X_POS = gamePlayCanvas.width;

    dino.src = "./src/image/DinoAssets/dino.png";
    cactus.src = "./src/image/DinoAssets/cactus.png";

    gameOverCanvasContext.fillStyle = "#000";
    gameOverCanvasContext.font = '65px Courier New';
    
    infoCanvasContext.fillStyle = "#000";
    infoCanvasContext.font = '25px Courier New';
    
    document.addEventListener("keydown", jump);

    setDefaults();

    window.requestAnimationFrame(drawGame);
}

function setDefaults() {

    dinoY = 0;
    cactusX = CACTUS_START_X_POS;
    score = 0;
    isAlive = true;
    CACTUS_X_SPEED = 5;
    JUMP_SPEED = 0;
    isEnded = false;
}

export function play() {
    isPaused = false;
    isAlive = true;
}

export function pause() {
    isPaused = true;
}

export function restart() {
    setDefaults();
    play();
}

export function stop() {
    isEnded = true;
    document.removeEventListener("keydown", jump);
}

export default init
