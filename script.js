const getUserChoice = (input) => {
  input = input.toLowerCase();
  if (input === 'rock' || input === 'paper' || input === 'scissors') return input;
  return null;
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) return 'rock';
  if (randomNumber === 1) return 'paper';
  return 'scissors';
};

const determineWinner = (user, computer) => {
  if (user === computer) return 'It is a tie!';
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) return 'You win!';
  return 'You Lose Boo Hoo!';
};

const getImage = (choice) => {
  if (choice === 'rock') return 'images/rock.webp';
  if (choice === 'paper') return 'images/plz.jpg';
  return 'images/dog.jpg';
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
  else if (result === 'You Lose Boo Hoo!') computerScore++;

  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;

  if (round === 5) endGame();
  else document.getElementById('round-number').textContent = ++round;
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
