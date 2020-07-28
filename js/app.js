/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = ''; 

let startButton = document.getElementById('btn__reset');
let keyboard = document.getElementById('qwerty');
let currentPhrase = '';
let letter = '';
let disabledKeys = [];

/**
* Listens for mouse click on start button and inititates new game
*/
startButton.addEventListener('click', () => {
    disabledKeys = [];
    game = new Game();
    game.startGame();
    currentPhrase = game.activePhrase.phrase;
    
    /****** cheat code ;) */
    console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
    /***** */

    
});

/**
* Listens for mouse clicks on UI keyboard
*/
keyboard.addEventListener('click', (e) => {
    button = e.target; 
        if(button.classList.contains("key")) {
        game.handleInteraction(button);
    }
});

/**
* Listens for keypress on user keyboard
*/
document.addEventListener('keydown', (e) => {
    let pressedKey = e.key;
    let keys = document.querySelectorAll('.keyrow button');
    let startScreen = document.querySelector('#overlay').style.display;
    let button;

    for(let i = 0; i < keys.length; i++){
        if(!disabledKeys.includes(pressedKey) && pressedKey === keys[i].textContent) {
            disabledKeys.push(pressedKey);
            button = keys[i];
            game.handleInteraction(button);  
        }
    }

    if(e.key === 'Enter' && startScreen !== 'none') {
        startButton.click();    
    }
});

