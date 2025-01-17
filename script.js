const getUserChoice = (input) => {
  input = input.toLowerCase();
  switch (input) {
    case 'rock':
    case 'paper':
    case 'scissors':
      return input;
    default:
      return null;
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (user, computer) => {
  switch (true) {
    case user === computer:
      return 'It is a tie!';
    case user === 'rock' && computer === 'scissors':
    case user === 'paper' && computer === 'rock':
    case user === 'scissors' && computer === 'paper':
      return 'You win!';
    default:
      return 'Computer wins!';
  }
};

const getImage = (choice) => {
  switch (choice) {
    case 'rock':
      return 'images/rock.webp';
    case 'paper':
      return 'images/tol1.jpg';
    case 'scissors':
      return 'images/dog.jpg';
  }
};

let round = 1, playerScore = 0, computerScore = 0;

document.getElementById('start-game').addEventListener('click', () => {
  const userName = document.getElementById('username').value.trim();
  if (userName) {
    document.getElementById('player-name').textContent = userName;
    document.getElementById('username-form').classList.add('d-none');
    document.getElementById('game-area').classList.remove('d-none');
  } else alert('Please enter your name to start the game.');
});

const playRound = (userChoice) => {
  const computerChoice = getComputerChoice();
  document.getElementById('user-choice').src = getImage(userChoice);
  document.getElementById('computer-choice').src = getImage(computerChoice);
  const result = determineWinner(userChoice, computerChoice);
  document.getElementById('result').textContent = result;

  if (result === 'You win!') playerScore++;
  else if (result === 'Computer wins!') computerScore++;

  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;

  if (round === 5) endGame();
  else document.getElementById('round-number').textContent = ++round;
};

const setupButtonListeners = () => {
  document.getElementById('rock').addEventListener('click', () => playRound('rock'));
  document.getElementById('paper').addEventListener('click', () => playRound('paper'));
  document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
};

const endGame = () => {
  document.getElementById('game-area').classList.add('d-none');
  document.getElementById('final-result').classList.remove('d-none');
  const finalMessage = playerScore > computerScore
    ? 'Congratulations! You won the game!'
    : playerScore < computerScore
    ? 'Sorry, the computer won this time!'
    : 'It is a tie!';
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

setupButtonListeners();
