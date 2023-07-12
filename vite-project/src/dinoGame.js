//FISRT INIT STEPS
let infoCanvas = null;
let infoCanvasContext = null;

let gamePlayCanvas = null;
let gamePlayCanvasContext = null;

let gameOverCanvas = null;
let gameOverCanvasContext = null;

let restartButton = null;

//CONSTANTS
const IMG_SIZE = 50;
let FLOOR_GAME_Y = IMG_SIZE;

const GRAVITY_SPEED = 1.1;
const JUMP_SPEED = 10;

let CACTUS_START_X_POS = 0;
const CACTUS_X_SPEED = 5;

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
            restartButton.style.display = "inline-block";
        }

        if(isAlive && !isPaused) {
            score +=1;

            //GAME PLAY
            if (dinoY > 0) {
                dinoY -= GRAVITY_SPEED;
            }
            else {
                dinoY = 0;
            }

            //SPEED CACTUS
            if(cactusX + IMG_SIZE > 0){
                cactusX -= CACTUS_X_SPEED;
            }
            else {
                cactusX = CACTUS_START_X_POS;
            }
            
        }
        else {
            //GAME OVER BLOCK DRAW
            gameOverCanvasContext.fillText("GAME OVER", 120, 100);
        }
        lastTime = thisTime;
    }
        
    //TOP BLOCK DRAW
    infoCanvasContext.fillText("Счёт:" + score, 450, 25);
    
    //BOTTOM BLOCK DRAW
    gamePlayCanvasContext.drawImage(dino, 0, FLOOR_GAME_Y - dinoY, IMG_SIZE, IMG_SIZE);
    gamePlayCanvasContext.drawImage(cactus, cactusX, FLOOR_GAME_Y, IMG_SIZE, IMG_SIZE);

    window.requestAnimationFrame(drawGame);
}

function jump() {

    let id = setInterval( function() {
        if (dinoY > IMG_SIZE * 1.5) {
            clearInterval(id);
        }
        else{
            dinoY += JUMP_SPEED;
        }
    }, 5)

}

export function init(){

    infoCanvas = document.getElementById("infoCanvas");
    infoCanvasContext = infoCanvas.getContext("2d");

    gamePlayCanvas = document.getElementById("gamePlayCanvas");
    gamePlayCanvasContext = gamePlayCanvas.getContext("2d");

    gameOverCanvas = document.getElementById("gameOverCanvas");
    gameOverCanvasContext = gameOverCanvas.getContext("2d");

    restartButton = document.getElementById("restartButton");

    FLOOR_GAME_Y = gamePlayCanvas.height - IMG_SIZE;

    CACTUS_START_X_POS = gamePlayCanvas.width;

    dino.src = "./src/image/DinoAssets/dino.png";
    cactus.src = "./src/image/DinoAssets/cactus.png";

    gameOverCanvasContext.fillStyle = "#000";
    gameOverCanvasContext.font = '65px Courier New';
    
    infoCanvasContext.fillStyle = "#000";
    infoCanvasContext.font = '25px Courier New';
    
    restartButton.addEventListener("click", setDefaults);
    document.addEventListener("keydown", jump);

    setDefaults();

    window.requestAnimationFrame(drawGame);
}

function setDefaults() {

    dinoY = 0;
    cactusX = CACTUS_START_X_POS;
    score = 0;
    isAlive = true;

    restartButton.style.display = "none";
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

export default init
