'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // game constants

  let errorCounter = 0;
  let pressCounter = 0;
  let numberOfRounds = 5;
  let roundCounter = 1;

  //create dom elements

  function createStartBtn() {
    const startBtn = document.createElement('button');
    startBtn.classList.add('btn');
    startBtn.classList.add('start-btn');
    startBtn.textContent = 'start';
    return startBtn;
  }

  function createNewGameBtn() {
    const newGameBtn = document.createElement('button');
    newGameBtn.classList.add('btn');
    newGameBtn.classList.add('new-game-btn');
    newGameBtn.textContent = 'new game';
    return newGameBtn;
  }

  function createRepeatTheSequency() {
    const repeatTheSequencyBtn = document.createElement('button');
    repeatTheSequencyBtn.classList.add('btn');
    repeatTheSequencyBtn.classList.add('repeat-the-sequency-btn');
    repeatTheSequencyBtn.textContent = 'repeat the sequency';
    return repeatTheSequencyBtn;
  }

  function createNextBtn() {
    const nextBtn = document.createElement('button');
    nextBtn.classList.add('btn');
    nextBtn.classList.add('next-btn');
    nextBtn.textContent = 'next';
    return nextBtn;
  }

  function createRoundInput() {
    const labelForRoundInput = document.createElement('label');
    labelForRoundInput.classList.add('label-for-roundInput');
    labelForRoundInput.textContent = 'Round:';
    const roundInput = document.createElement('input');
    roundInput.type = 'number';
    roundInput.value = 1;
    roundInput.classList.add('round-input');
    roundInput.setAttribute('disabled', '');
    roundInput.setAttribute('id', 'round-input');
    labelForRoundInput.setAttribute('for', 'round-input');
    labelForRoundInput.append(roundInput);
    return labelForRoundInput;
  }

  function createSequencyInput() {
    const labelForSequencyInput = document.createElement('label');
    labelForSequencyInput.classList.add('label-for-sequencyInput');
    labelForSequencyInput.textContent = 'Your sequency:';
    const sequencyInput = document.createElement('input');
    sequencyInput.classList.add('sequency-input');
    sequencyInput.type = 'text';
    sequencyInput.setAttribute('disabled', '');
    labelForSequencyInput.setAttribute('for', 'sequency-input');
    sequencyInput.setAttribute('id', 'sequency-input');
    labelForSequencyInput.append(sequencyInput);
    return labelForSequencyInput;
  }

  function createVirtualKeyboardContainer() {
    const virtualKeyboardContainer = document.createElement('div');
    virtualKeyboardContainer.classList.add('keyboard-container');
    return virtualKeyboardContainer;
  }

  function createVirtualNumberKeyboard() {
    const numberBlock = document.createElement('div');
    numberBlock.classList.add('number-keyboard');
    const numberArray = '0123456789'.split('');
    numberArray.forEach((number) => {
      const num = document.createElement('div');
      num.classList.add('key');
      num.textContent = `${number}`;
      numberBlock.append(num);
    });
    return numberBlock;
  }

  function createVirtualLettersKeyboard() {
    const lettersBlock = document.createElement('div');
    lettersBlock.classList.add('letters-keyboard');
    const lettersArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    lettersArray.forEach((letter) => {
      const letterUnit = document.createElement('div');
      letterUnit.classList.add('key');
      letterUnit.textContent = `${letter.toUpperCase()}`;
      lettersBlock.append(letterUnit);
    });
    return lettersBlock;
  }

  function createLevelsDropdownList() {
    const label = document.createElement('label');
    const levelInput = document.createElement('select');
    const firstOption = document.createElement('option');
    const secondOption = document.createElement('option');
    const thirdOption = document.createElement('option');

    label.setAttribute('for', 'level-dropdown-list ');
    label.classList.add('label-for-levels');
    label.textContent = 'Choose your level:';

    levelInput.id = 'level-dropdown-list ';
    levelInput.name = 'levels';

    firstOption.value = 'easy';
    firstOption.textContent = 'easy';
    firstOption.setAttribute('selected', '');

    secondOption.value = 'medium';
    secondOption.textContent = 'medium';

    thirdOption.value = 'hard';
    thirdOption.textContent = 'hard';

    label.append(levelInput);
    levelInput.append(firstOption);
    levelInput.append(secondOption);
    levelInput.append(thirdOption);
    return label;
  }

  function createGameContainer() {
    const body = document.querySelector('body');
    const gameContainer = document.createElement('div');
    gameContainer.classList.add('container');
    body.append(gameContainer);
  }

  function createFeedbackBlock() {
    const feedbackBlock = document.createElement('div');
    feedbackBlock.classList.add('feedback-block');
    feedbackBlock.textContent = 'Press Start to launch the game';
    return feedbackBlock;
  }

  //manipulate dom elements

  function renewRoundCounterInput(roundCounter) {
    const roundCounterInput = document.querySelector('.round-input');
    roundCounterInput.value = roundCounter;
  }

  function clearSequencyInput() {
    const sequenceInput = document.querySelector('.sequency-input');
    sequenceInput.value = '';
  }

  function changeSequenceInput(clickedKey) {
    const sequenceInput = document.querySelector('.sequency-input');
    sequenceInput.value += String(clickedKey);
  }

  function disableNewGameBtn() {
    const newGameBtn = document.querySelector('.new-game-btn');
    newGameBtn.disabled = true;
  }

  function enableNewGameBtn() {
    const newGameBtn = document.querySelector('.new-game-btn');
    newGameBtn.disabled = false;
  }

  function disableVirtualKeyboard() {
    const keys = Array.from(document.getElementsByClassName('key'));
    keys.forEach((key) => {
      key.style.pointerEvents = 'none';
    });
  }

  function enableVirtualKeyboard() {
    const keys = Array.from(document.getElementsByClassName('key'));
    keys.forEach((key) => {
      key.style.pointerEvents = 'auto';
    });
  }

  function disableRepeatTheSequencyBtn() {
    const repeatBtn = document.querySelector('.repeat-the-sequency-btn');
    repeatBtn.disabled = true;
  }

  function enableRepeatTheSequencyBtn() {
    const repeatBtn = document.querySelector('.repeat-the-sequency-btn');
    repeatBtn.disabled = false;
  }

  function checkChosenLevel() {
    const levelInput = document.querySelector('select');
    return levelInput.value;
  }

  function removeStartBtn() {
    const startBtn = document.querySelector('.start-btn');
    startBtn.remove();
  }

  function listenLevelDropdownChange() {
    const levelDropdown = document.querySelector('select');
    levelDropdown.addEventListener('change', () => {
      let chosenLevel = document.querySelector('select option:checked');
      openLevel(chosenLevel);
    });
  }

  function changeFeedBackBlock(text) {
    const feedbackBlock = document.querySelector('.feedback-block');
    feedbackBlock.textContent = text;
  }

  function disableLevelDropdownList() {
    const dropdownLevelList = document.querySelector('select');
    dropdownLevelList.setAttribute('disabled', '');
  }

  function openLevel(level) {
    const levelBlock = document.querySelector('.keyboard-container');
    while (levelBlock.firstChild) {
      levelBlock.removeChild(levelBlock.firstChild);
    }
    level = checkChosenLevel();
    switch (level) {
      case 'easy':
        levelBlock.append(createVirtualNumberKeyboard());
        break;
      case 'medium':
        levelBlock.append(createVirtualLettersKeyboard());
        break;
      case 'hard':
        levelBlock.append(createVirtualNumberKeyboard());
        levelBlock.append(createVirtualLettersKeyboard());
        break;
    }
  }

  function replaceRepeatBtnWithNextBtn() {
    const repeatBtn = document.querySelector('.repeat-the-sequency-btn');
    const btnContainer = document.querySelector('.start-btn-block');
    btnContainer.replaceChild(createNextBtn(), repeatBtn);
  }

  function replaceNextBtnWithRepeatBtn() {
    const nextBtn = document.querySelector('.next-btn');
    const btnContainer = document.querySelector('.start-btn-block');
    btnContainer.replaceChild(createRepeatTheSequency(), nextBtn);
  }

  // work with event listeners

  function blockKeyboard() {
    const sequencyInput = document.querySelector('.sequency-input');
    let preventDefaultHandler = (event) => {
      if (/^[a-zA-Z0-9]$/.test(event.key)) {
        event.preventDefault();
      }
    };
    document.addEventListener('keydown', preventDefaultHandler);
    sequencyInput.addEventListener('keydown', preventDefaultHandler);
    document.addEventListener('keyup', preventDefaultHandler);
    sequencyInput.addEventListener('keyup', preventDefaultHandler);
  }

  function addEventListenerToKeys(clickHandler) {
    const keyboardContainer = document.querySelector('.keyboard-container');
    keyboardContainer.addEventListener('click', clickHandler);
  }

  function removeEventListenerToKeys(clickHandler) {
    const keyboardContainer = document.querySelector('.keyboard-container');
    keyboardContainer.removeEventListener('click', clickHandler);
  }

  function addEventListenerToKeyboard(keyDownHandler, keyUpHandler) {
    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);
  }

  function removeEventListenerToKeyboard(keyDownHandler, keyUpHandler) {
    document.removeEventListener('keydown', keyDownHandler);
    document.removeEventListener('keyup', keyUpHandler);
  }

  // assemle main play page

  function createStartWindow(appendTo, level) {
    const startManageGameBlock = document.createElement('div');
    startManageGameBlock.classList.add('game-manage-block');

    const startBtnBlock = document.createElement('div');
    startBtnBlock.classList.add('start-btn-block');

    const startLevelsBlock = document.createElement('div');
    startLevelsBlock.classList.add('start-levels-block');

    appendTo.append(startManageGameBlock);
    startManageGameBlock.append(startBtnBlock);
    startBtnBlock.append(createStartBtn());
    startManageGameBlock.append(createLevelsDropdownList());

    if (level !== 'easy') {
      const dropdownLevelList = document.querySelector('select');
      dropdownLevelList
        .querySelector(`option[value = ${level}]`)
        .setAttribute('selected', '');
    }

    appendTo.append(startLevelsBlock);
    startLevelsBlock.append(createFeedbackBlock());
    startLevelsBlock.append(createSequencyInput());
    startLevelsBlock.append(createVirtualKeyboardContainer());

    openLevel(level);
    listenLevelDropdownChange();
    disableVirtualKeyboard();
    blockKeyboard();

    const startBtn = document.querySelector('.start-btn');
    startBtn.addEventListener('click', () => {
      changeFeedBackBlock('Simon says:');
      removeStartBtn();
      disableLevelDropdownList();
      level = checkChosenLevel();
      startBtnBlock.append(createNewGameBtn());
      startBtnBlock.append(createRepeatTheSequency());
      startBtnBlock.append(createRoundInput());
      pressCounter = 0;
      errorCounter = 0;
      roundCounter = 1;
      startGame(roundCounter);
    });
  }

  // laucnh game

  createGameContainer();
  const gameContainer = document.querySelector('.container');
  createStartWindow(gameContainer, 'easy');

  // create round

  async function startGame(roundCounter = '1') {
    const newGameBtn = document.querySelector('.new-game-btn');
    let currentLevel = checkChosenLevel();

    newGameBtn.addEventListener('click', () => {
      while (gameContainer.firstChild) {
        gameContainer.removeChild(gameContainer.firstChild);
      }
      document.removeEventListener('keydown', keyDownHandler);
      document.removeEventListener('keydown', keyUpHandler);
      createStartWindow(gameContainer, currentLevel);
    });

    const sequency = await createSequency(roundCounter);
    pressCounter = 0;
    errorCounter = 0;
    const repeatTheSequencyBtn = document.querySelector(
      '.repeat-the-sequency-btn',
    );
    let isKeyPressed = false;

    const repeatSequency = async () => {
      pressCounter = 0;
      clearSequencyInput();
      repeatTheSequencyBtn.disabled = true;
      repeatTheSequencyBtn.classList.add('disabled');
      disableRepeatTheSequencyBtn();
      removeEventListenerToKeys(clickHandler);
      removeEventListenerToKeyboard(keyDownHandler, keyUpHandler, isKeyPressed);
      repeatTheSequencyBtn.removeEventListener('click', repeatSequency);
      await launchSequency(sequency);
      addEventListenerToKeys(clickHandler);
      addEventListenerToKeyboard(keyDownHandler, keyUpHandler, isKeyPressed);
      return Promise.resolve();
    };

    // activity handlers
    let clickHandler = async (event) => {
      await new Promise((resolve) => {
        if (event.target.classList.contains('key')) {
          let clickedKey = event.target.textContent.toUpperCase();
          compareClickedKeysWithSequency(
            sequency,
            clickedKey,
            clickHandler,
            keyDownHandler,
            keyUpHandler,
          );
          resolve();
        }
      });
    };
    let keyDownHandler = (event) => {
      if (isKeyPressed) {
        event.preventDefault();
        return;
      }
      let pressedKey;
      if (currentLevel === 'easy') {
        isKeyPressed = true;
        if (/^[0-9]$/.test(event.key)) {
          pressedKey = event.key;
        } else {
          event.preventDefault();
          return;
        }
      } else if (currentLevel === 'medium') {
        isKeyPressed = true;
        if (/^[a-zA-Z]$/.test(event.key)) {
          pressedKey = event.key.toUpperCase();
        } else {
          event.preventDefault();
          return;
        }
      } else if (currentLevel === 'hard') {
        isKeyPressed = true;
        if (/^[a-zA-Z0-9]$/.test(event.key)) {
          pressedKey = event.key.toUpperCase();
        } else {
          event.preventDefault();
          return;
        }
      } else {
        event.preventDefault();
        return;
      }
      highlightPressedKey(pressedKey);
      compareClickedKeysWithSequency(
        sequency,
        pressedKey,
        clickHandler,
        keyDownHandler,
        keyUpHandler,
      );
    };

    let keyUpHandler = () => {
      isKeyPressed = false;
    };

    await launchSequency(sequency);
    addEventListenerToKeys(clickHandler);
    addEventListenerToKeyboard(keyDownHandler, keyUpHandler, isKeyPressed);
    repeatTheSequencyBtn.addEventListener('click', repeatSequency);
  }

  // round assemble functions

  function highlightPressedKey(pressedKey) {
    const keys = Array.from(document.getElementsByClassName('key'));
    const keyID = keys.findIndex((key) => key.textContent === pressedKey);
    keys[keyID].classList.add('active');
    setTimeout(() => {
      keys[keyID].classList.remove('active');
    }, 100);
  }

  async function launchSequency(sequency) {
    changeFeedBackBlock('Simon Says:');
    const keys = Array.from(document.getElementsByClassName('key'));
    disableVirtualKeyboard();
    blockKeyboard();
    disableRepeatTheSequencyBtn();
    disableNewGameBtn();
    for (let sign of sequency) {
      await new Promise((resolve) => {
        const keyID = keys.findIndex(
          (key) => key.textContent.toUpperCase() === sign.toUpperCase(),
        );
        setTimeout(() => {
          if (keyID !== -1) {
            keys[keyID].classList.add('active');
            setTimeout(() => {
              keys[keyID].classList.remove('active');
              resolve();
            }, 3000);
          } else {
            resolve();
          }
        }, 1000);
      });
    }
    console.log(sequency);
    enableVirtualKeyboard();
    enableRepeatTheSequencyBtn();
    enableNewGameBtn();
    changeFeedBackBlock('your turn:');
  }

  async function compareClickedKeysWithSequency(
    sequency,
    clickedKey,
    clickHandler,
    keyDownHandler,
    keyUpHandler,
  ) {
    changeSequenceInput(clickedKey);
    if (clickedKey === sequency[pressCounter]) {
      pressCounter += 1;
      changeFeedBackBlock('Continue:');
      if (pressCounter === sequency.length) {
        changeFeedBackBlock('you won the round');
        removeEventListenerToKeys(clickHandler);
        removeEventListenerToKeyboard(keyDownHandler, keyUpHandler);
        return startNewRound();
      }
    } else {
      if (errorCounter >= 1) {
        changeFeedBackBlock('You lost the game');
        disableVirtualKeyboard();
        blockKeyboard();
        disableRepeatTheSequencyBtn();
        removeEventListenerToKeys(clickHandler);
        removeEventListenerToKeyboard(keyDownHandler, keyUpHandler);
        return;
      } else {
        const oneAction = async () => {
          return new Promise((resolve) => {
            blockKeyboard();
            disableVirtualKeyboard();
            removeEventListenerToKeyboard(keyDownHandler, keyUpHandler);
            errorCounter += 1;
            changeFeedBackBlock('Mistake');
            disableRepeatTheSequencyBtn();
            pressCounter = 0;
            setTimeout(() => {
              enableVirtualKeyboard();
              enableRepeatTheSequencyBtn();
              addEventListenerToKeyboard(keyDownHandler, keyUpHandler);
              resolve();
            }, 1000);
          });
        };
        await oneAction();
        clearSequencyInput();
        changeFeedBackBlock('Last try: ');
      }
    }
  }
  function startNewRound() {
    if (roundCounter === numberOfRounds) {
      changeFeedBackBlock('you won the game');
      disableVirtualKeyboard();
      blockKeyboard();
      disableRepeatTheSequencyBtn();
      return;
    }
    disableVirtualKeyboard();
    blockKeyboard();
    replaceRepeatBtnWithNextBtn();
    const nextBtn = document.querySelector('.next-btn');
    nextBtn.addEventListener('click', () => {
      roundCounter += 1;
      renewRoundCounterInput(roundCounter);
      replaceNextBtnWithRepeatBtn();
      clearSequencyInput();
      enableVirtualKeyboard();
      startGame(roundCounter);
    });
  }

  async function createSequency(roundCounter) {
    return new Promise((resolve) => {
      const sequenceArray = [];
      const keys = Array.from(document.getElementsByClassName('key'));
      let keysID;
      let randomKeysID = [];
      for (let i = 0; i < roundCounter * 2; i++) {
        keysID = Math.floor(Math.random() * keys.length);
        randomKeysID.push(keysID);
      }
      randomKeysID.forEach((ID) => {
        sequenceArray.push(keys[ID].textContent);
      });
      resolve(sequenceArray);
    });
  }
});
