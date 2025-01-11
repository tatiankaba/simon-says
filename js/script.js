'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');

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
    repeatTheSequencyBtn.classList.add('start-btn');
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
    const roundInput = document.createElement('input');
    roundInput.classList.add('round-input');
    roundInput.setAttribute('disabled', '');
    roundInput.setAttribute('placeholder', 'Here will be your typed sequency');
    appendTo.append(roundInput);
  }
});
