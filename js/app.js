/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */document.addEventListener('keydown', (e) => {
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

