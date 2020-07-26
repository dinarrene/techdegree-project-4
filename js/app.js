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

document.addEventListener('keydown', (e) => {
    let allKeys = document.querySelectorAll('.key');
    let button = e.key;
    console.log(button);

    for(let i = 0; i < allKeys.length; i++) {
        if(button === allKeys[i].textContent) {
            button = allKeys[i];
        }
    }

    if(button.code === 13 || button.code === 'Enter') {
        startButton.click();
    }


    game.handleInteraction(button);


});

