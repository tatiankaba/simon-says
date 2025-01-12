'use strict';

document.addEventListener('DOMContentLoaded', () => {
  //creation of dom elements

  function createStartBtn(appendTo) {
    const startBtn = document.createElement('button');
    startBtn.classList.add('btn');
    startBtn.classList.add('start-btn');
    startBtn.textContent = 'start';
    appendTo.append(startBtn);
  }

  function createNewGameBtn(appendTo) {
    const newGameBtn = document.createElement('button');
    newGameBtn.classList.add('btn');
    startBtn.classList.add('new-game-btn');
    newGameBtn.textContent = 'new game';
    appendTo.append(newGameBtn);
  }

  function createRepeatTheSequency(appendTo) {
    const repeatTheSequencyBtn = document.createElement('button');
    repeatTheSequencyBtn.classList.add('btn');
    repeatTheSequencyBtn.classList.add('repeat-the-sequency-btn');
    repeatTheSequencyBtn.textContent = 'repeat the sequency';
    appendTo.append(repeatTheSequencyBtn);
  }

  function createNextBtn(appendTo) {
    const nextBtn = document.createElement('button');
    nextBtn.classList.add('btn');
    nextBtn.classList.add('next-btn');
    nextBtn.textContent = 'next';
    appendTo.append(nextBtn);
  }

  function createRoundInput(appendTo) {
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
    appendTo.append(labelForRoundInput);
  }

  function createSequencyInput(appendTo) {
    const labelForSequencyInput = document.createElement('label');
    labelForSequencyInput.classList.add('label-for-sequencyInput');
    labelForSequencyInput.textContent = 'Your sequency:';
    const sequencyInput = document.createElement('input');
    sequencyInput.classList.add('sequency-input');
    sequencyInput.setAttribute('disabled', '');
    labelForSequencyInput.setAttribute('for', 'sequency-input' )
    sequencyInput.setAttribute('id', 'sequency-input');
    labelForSequencyInput.append(sequencyInput);
    appendTo.append(labelForSequencyInput);
  }

  function createVirtualKeyboardContainer(appendTo) {
    const virtualKeyboardContainer = document.querySelector('div');
    virtualKeyboardContainer.classList.add('keyboard-container');
    appendTo.append(virtualKeyboardContainer);
  }

  function createVirtualNumberKeyboard(appendTo) {
    const numberBlock = document.createElement('div');
    numberBlock.classList.add('number-keyboard');
    const numberArray = '0123456789'.split('');
    numberArray.forEach((number) => {
      const num = document.createElement('div');
      num.classList.add('key');
      num.textContent = `${number}`;
      numberBlock.append(num);
    });
    appendTo.append(numberBlock);
  }

  function createVirtualLettersKeyboard(appendTo) {
    const lettersBlock = document.createElement('div');
    lettersBlock.classList.add('letters-keyboard');
    const lettersArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    lettersArray.forEach((letter) => {
      const letterUnit = document.createElement('div');
      letterUnit.classList.add('key');
      letterUnit.textContent = `${letter.toUpperCase()}`;
      lettersBlock.append(letterUnit);
    });
    appendTo.append(lettersBlock);
  }

  function createLevesDropdownList(appendTo) {
    const levelOptionBlock = document.createElement('div');
    const label = document.createElement('label');
    const levelInput = document.createElement('select');
    const firstOption = document.createElement('option');
    const secondOption = document.createElement('option');
    const thirdOption = document.createElement('option');

    label.setAttribute('for', 'level-list-label');
    label.classList.add('label-for-levels');
    label.textContent = 'Choose your level:';

    levelInput.id = 'level-list-label';
    levelInput.name = 'levels';

    firstOption.value = 'easy';
    firstOption.textContent = 'easy';
    firstOption.setAttribute('selected', '');

    secondOption.value = 'medium';
    secondOption.textContent = 'medium';

    thirdOption.value = 'hard';
    thirdOption.textContent = 'hard';

    levelOptionBlock.append(label);
    levelOptionBlock.append(levelInput);
    levelInput.append(firstOption);
    levelInput.append(secondOption);
    levelInput.append(thirdOption);
    appendTo.append(levelOptionBlock);
  }



});
