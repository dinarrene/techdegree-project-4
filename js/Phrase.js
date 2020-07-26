/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        let letterBoxes = this.phrase.split('');
        for(let i = 0; i < letterBoxes.length; i++){
            let ul = document.querySelector('#phrase ul');
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = letterBoxes[i];
            if(letterBoxes[i] === ' '){
                li.setAttribute('class', 'space');
            } else {
                li.setAttribute('class', `hide letter ${letterBoxes[i]}`);
            }
        }
    };


    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        if(this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        if(this.checkLetter) {
            let listItems = document.querySelectorAll('#phrase ul li');
            for(let i = 0; i < listItems.length; i++) {
                if(listItems[i].textContent === letter) {
                    listItems[i].classList.replace('hide', 'show');
                }
            }                                     
        }
    };
 }