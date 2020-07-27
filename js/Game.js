/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
      this.missed = 0;
      this.phrases = this.createPhrases();
      this.activePhrase = null;
    }


    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game
     */

    createPhrases() {
        let phrases = ['Paint the town red', 'Cut to the chase', 'Go for the gold', 'Bite the bullet', 'Call it a day'];
        
        phrases = phrases.map((str) => (new Phrase(str)));
        return phrases;
    };


    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */

    getRandomPhrase() {
        let randNum = Math.floor(Math.random() * this.phrases.length);
        let randomPhrase = this.phrases[randNum]; 
        return randomPhrase;
    };


    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() { 
        this.resetGame()   
        document.getElementById('overlay').style.display = 'none'; 
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        
    };


    /**
    * Reset game keys & hearts to original StartGame state
    */
    resetGame() {
        let keys = document.querySelectorAll('.wrong, .chosen');
        let hearts = document.getElementsByClassName('tries');
        let listItems = document.querySelectorAll('#phrase ul li');
        if(listItems){
            for(let i = 0; i < listItems.length; i++) {
            listItems[i].remove();
                }
            } 
        for(let i = 0; i < keys.length; i++) {
            keys[i].className = 'key';
            keys[i].disabled = false;
        }
        for(let i = 0; i < hearts.length; i++) {
            hearts[i].innerHTML = '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">'
        }

    }
        

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
   checkForWin() {
        let listItems = document.getElementsByClassName('hide');
        if(listItems.length === 0) {
            return true;
        } else {
            return false;
        }
   };

   /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        let hearts = document.getElementsByClassName('tries');
        hearts[this.missed].innerHTML = '<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">'
        this.missed += 1; 
        if(game.missed === 5) {
            this.gameOver(false);
        } 
    };
    

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        let div = document.getElementById('overlay');
        let h1 = document.getElementById('game-over-message');
        if(gameWon) {
            div.removeAttribute('style');
            div.setAttribute('class', 'win');
            h1.innerText = 'Congrats! You Won!';
        } else {
            div.removeAttribute('style');
            div.setAttribute('class', 'lose');
            h1.innerText = 'Game Over. Try Again!';
        }
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        button.disabled = true;
        if(!this.activePhrase.checkLetter(button.textContent)){
            button.setAttribute('class', 'wrong');
            this.removeLife();
        } else {
            button.setAttribute('class', 'chosen');
            this.activePhrase.showMatchedLetter(button.textContent);
            if(this.checkForWin()) {
                this.gameOver(true);
            }
        }
    };
}