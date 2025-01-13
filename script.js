
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Invalid choice!');
    return null;
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
};

let round = 1;
let playerScore = 0;
let computerScore = 0;

document.getElementById('start-game').addEventListener('click', () => {
  const userName = document.getElementById('username').value.trim();
  if (userName) {
    document.getElementById('player-name').textContent = userName;
    document.getElementById('username-form').classList.add('d-none');
    document.getElementById('game-area').classList.remove('d-none');
  } else {
    alert('Please enter your name to start the game.');
  }
});

const playRound = (userChoice) => {
  const computerChoice = getComputerChoice();
  document.getElementById('user-choice').textContent = userChoice;
  document.getElementById('computer-choice').textContent = computerChoice;

  const result = determineWinner(userChoice, computerChoice);
  document.getElementById('result').textContent = result;

  if (result === 'You win!') {
    playerScore++;
  } else if (result === 'Computer wins!') {
    computerScore++;
  }

  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;

  if (round === 5) {
    endGame();
  } else {
    round++;
    document.getElementById('round-number').textContent = round;
  }
};

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));

const endGame = () => {
  document.getElementById('game-area').classList.add('d-none');
  document.getElementById('final-result').classList.remove('d-none');

  const finalMessage = playerScore > computerScore
    ? 'Congratulations! You won the game!'
    : playerScore < computerScore
    ? 'Sorry, the computer won this time!'
    : 'It\'s a tie!';

  document.getElementById('final-message').textContent = finalMessage;
};

document.getElementById('reset-game').addEventListener('click', () => {
  round = 1;
  playerScore = 0;
  computerScore = 0;

  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
  document.getElementById('round-number').textContent = round;

  document.getElementById('final-result').classList.add('d-none');
  document.getElementById('game-area').classList.remove('d-none');
});
