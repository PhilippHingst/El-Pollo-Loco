let canvas;
let world;
let keyboard = new Keyboard();
let game_sound = new Audio('audio/Mexican Music (Mariachi).mp3');
game_sound.volume = 0.02;
game_sound.loop = true;

function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    // game_sound.play();
    

    console.log('My Character is', world.character);
}

window.addEventListener("keydown", (e) =>{
    if(e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if(e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if(e.keyCode == 38) {
        keyboard.UP = true;
    }
    if(e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if(e.keyCode == 32) {
        keyboard.SPACE = true;
    }
})

window.addEventListener("keyup", (e) =>{
    if(e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if(e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if(e.keyCode == 38) {
        keyboard.UP = false;
    }
    if(e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if(e.keyCode == 32) {
        keyboard.SPACE = false;
    }
})