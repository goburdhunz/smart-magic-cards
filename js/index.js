const suits = ['hearts', 'clubs', 'diamonds', 'spades'];

const cardsWrapper = document.querySelector('.cards-wrapper');
const buttonWrapper = document.querySelector('.btn-wrapper');
const startButton = document.querySelector('#start-game');
const cardList = document.querySelectorAll('.cards-wrapper');


const shuffleButton = document.createElement('Button');
const showHideButton = document.createElement('Button');
const magicButton = document.createElement('Button');


const cards = [];

function createCardObjects() {
  // Create an array with objects containing the value and the suit of each card
  suits.forEach((suit) => {
    for (let i = 1; i <= 13; i += 1) {
      const cardObject = {
        value: i,
        suit,
      };
      cards.push(cardObject);
    }
  });
}

// For each dataObject, create a new card and append it to the DOM
function createCard(array) {
  array.forEach((card, i) => {
    const positionFromLeft = i * 30;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

// Function to shuffle cards and then call createCard with the shuffledList as an argument
function shuffleAction() {
  const shuffledList = cards.slice().sort(() => Math.random() - 0.5);
  return createCard(shuffledList);
}

// Collect the nodeslist of the car wrapper and add the .hidden class to each
function showAndHide() {
  cardList.forEach((card) => card.classList.toggle('hidden'));
}

// Call createCard wuth the original cards array as an argument
function magicMove() {
  return createCard(cards);
}


// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  startButton.remove();

  shuffleButton.setAttribute('type', 'button');
  shuffleButton.innerHTML = 'Shuffle';
  shuffleButton.classList.add('btn', 'btn-lg', 'btn-secondary');
  shuffleButton.style.marginRight = '20px';
  buttonWrapper.append(shuffleButton);
  shuffleButton.addEventListener('click', shuffleAction);

  showHideButton.setAttribute('type', 'button');
  showHideButton.innerHTML = 'Show/Hide';
  showHideButton.classList.add('btn', 'btn-lg', 'btn-secondary');
  showHideButton.style.marginRight = '20px';
  buttonWrapper.append(showHideButton);
  showHideButton.addEventListener('click', showAndHide);

  magicButton.setAttribute('type', 'button');
  magicButton.innerHTML = 'Magic';
  magicButton.classList.add('btn', 'btn-lg', 'btn-secondary');
  buttonWrapper.append(magicButton);
  magicButton.addEventListener('click', magicMove);
}


// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCardObjects();
  createCard(cards);
}

startButton.addEventListener('click', startGame);
