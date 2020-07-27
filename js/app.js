/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = ''; 

let startButton = document.getElementById('btn__reset');
let keyboard = document.getElementById('qwerty');
let currentPhrase = '';
let letter = '';

startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
    
    /****** */
    console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
    /***** */

    currentPhrase = game.activePhrase.phrase;
});

keyboard.addEventListener('click', (e) => {
    button = e.target; 
        if(button.classList.contains("key")) {
        game.handleInteraction(button);
    }
});

let disabledKeys = [];

document.addEventListener('keydown', (e) => {
    let pressedKey = e.key;
    let keys = document.querySelectorAll('.keyrow button');
    let button;

    for(let i = 0; i < keys.length; i++){
        if(!disabledKeys.includes(pressedKey) && pressedKey === keys[i].textContent) {
            disabledKeys.push(pressedKey);
            button = keys[i];
        }
    }
 
    console.log(button);
    console.log(disabledKeys);

    game.handleInteraction(button);


    
});

