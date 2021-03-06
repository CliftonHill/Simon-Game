// *****Simon Game, by Clifton Hill*****
// cliftonhhill [@] gmail [dot] com / https://github.com/CliftonHill
// *Made with vanilla JS and jQuery. Game inspired by Angela Yu (App Brewery) Udemy course on Complete Web Development
// code is © 2020 by Clifton Hill
// Read More Here: https://github.com/CliftonHill/Simon-Game/blob/master/README.md
// Play it Here: https://github.com/CliftonHill/Simon-Game

// ****SETTING UP GAME****
let sequence = [];
let userInput = [];
let userTime = 1000;
let level = 1;

// create a random generated color code sequence that lengthens with each success
function randomSequence() {
  let num = Math.floor(Math.random() * 4) + 1;
  if (num === 1) {
    sequence.push('green');
  } else if (num === 2) {
    sequence.push('red');
  } else if (num === 3) {
    sequence.push('yellow');
  } else if (num === 4) {
    sequence.push('blue');
  }
}

// Make boxes clickable
let allBoxes = $('.box');
let currBox;

for (let i = 0; i < allBoxes.length; i++) {
  $(allBoxes[i]).click(function() {
    currBox = this.classList[1];
    buttonAnimation(currBox);
    makeSound(currBox);
  });
}

// Start/Initialize Game
let gameInProgress = false;
$(document).keypress(start);

function start(event) {
  if (event.key.match(/[a]/i) && gameInProgress === false) {
    gameInProgress = true;
    playGame();
  }
}

let delay = function(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms)
  });
}

async function playGame() {
  userInput = []; // for reset
  $('h1').text('Level ' + level);
  await delay(500);
  runSequence();
  await delay(800 * sequence.length); // waits till sequence has run
}

// Runs computer sequence for animation and sound, each call adds to sequence length
async function runSequence() {
  randomSequence();
  // activates class change to play current sequence array
  for (let i = 0; i < sequence.length; i++) {
    await delay(200);
    $('.' + sequence[i]).addClass('button-press');
    makeSound(sequence[i]);
    await delay(600);
    $('.' + sequence[i]).removeClass('button-press');
  }
  userTurn();
}
//**Stackoverflow offered solution https://stackoverflow.com/questions/59762779/how-to-pause-javascript-execution/59762867#59762867. See the included part of the solution: delay = new Promise

//I think I can solve the above with recursion without using the async/Promise/await. At the end of the function in the setTimeout func stmnt, I should call the function again (recurse), this should make it wait. let i = 0 before func, i++ at end, call func again, and at top if i === sequence.length - 1, then console.log('Sequence finished, now it's your turn!), else the func continues to call!

async function userTurn() {
  let userPlaying = true;
  if (userInput.length === sequence.length) { // let user advance without waiting
    if (JSON.stringify(userInput) === JSON.stringify(sequence)) {
      console.log('current sequence:', sequence);
      console.log('current userInput:', userInput);
      $('h1').addClass('level-up');
      level++;
      setTimeout(function() {$('h1').removeClass('level-up');}, 200);
      userTime -= 50; // decreases time available
      userPlaying = false;
      playGame();
    }
  }

  if (userPlaying) {
    await delay(userTime * sequence.length);

    if (JSON.stringify(userInput) === JSON.stringify(sequence)) {
      console.log('current sequence:', sequence);
      console.log('current userInput:', userInput);
      $('h1').addClass('level-up');
      level++;
      setTimeout(function() {$('h1').removeClass('level-up');}, 200);
      userTime -= 50; // decreases time available
      playGame();
    } else {
      console.log('current sequence:', sequence);
      console.log('current userInput:', userInput);
      let wrongSound = new Audio('sounds/wrong.mp3');
      wrongSound.play();
      $('body').addClass('game-over');
      setTimeout(function() {$('body').removeClass('game-over');}, 180);
      setTimeout(failure, 220);
    }
  }
}

// **** GAME OVER / TRY AGAIN? *****
function failure() {
  gameInProgress = false;

  let tryAgain = confirm('***You made it to Level ' + level + '!***\nGame over.\nTry again?');
  $('h1').text("Press 'A' Key To Start"); // **** RESET GAME ****
  sequence = [];
  level = 1;
  userTime = 1000;

  if (tryAgain) {
    gameInProgress = true;
    playGame();
  } else {
    alert('Thanks for Playing.');
  }
}

// Button animation for user input w/ sound
function buttonAnimation(boxClass) {
  if (gameInProgress === true) {
    userInput.push(boxClass);
    $('.' + boxClass).addClass('button-press');
    makeSound(boxClass);
    setTimeout(function() {
      $('.' + boxClass).removeClass('button-press');
    }, 500);
  }
}

function makeSound(sound) {
  if (gameInProgress === true) {
    let buttonSound = new Audio('sounds/' + sound + '.mp3');
    buttonSound.play();
  }
}
