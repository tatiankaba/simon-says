import 'domElementsCreation.js'

'use strict'

function checkChosenLevel() {
    const levelInput = document.querySelector('#level-list-label');
    return levelInput.value;
}

function removeStartBtn() {
    const startBtn = document.querySelector('start-btn');
    startBtn.remove();
}

function createStartWindow(appendTo) {
    const startWindow = document.createElement('div');
    const startWindowBlock = document.createElement('div');
    startWindow.classList.add('start-window')
    startWindowBlock.classList.add('start-window-block')
    appendTo.append(startWindow);
    startWindow.append(startWindowBlock);
    const startBtn = document.createElement('button');
    startBtn.classList.add('start-btn');
    startBtn.textContent = 'start';
    startWindowBlock.append(startBtn);
    createLevelChoiceList(startWindowBlock);

    startBtn.addEventListener('click', ()=> {
        const chosenLevel = checkChosenLevel();
        closeStartWindow();

        switch (chosenLevel) {
            case 'light': 
                openLightLevel();
                break; 
            case 'medium':
                openMediumLevel();
                break; 
            case 'hard':
                openHardLevel();
                break; 
            default:
                openLightLevel();
        }

    });
}