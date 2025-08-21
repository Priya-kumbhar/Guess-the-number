let low, high, mid;

const startBtn = document.getElementById("startBtn");
const higherBtn = document.getElementById("higherBtn");
const lowerBtn = document.getElementById("lowerBtn");
const correctBtn = document.getElementById("correctBtn");
const restartBtn = document.getElementById("restartBtn");

function startGame() {
  low = 1;
  high = 100;
  mid = Math.floor((low + high) / 2);

  document.getElementById("message").innerText = "Let's go!";
  document.getElementById("controls").style.display = "block";
  document.getElementById("guess").innerText = mid;
  startBtn.style.display = "none";
  restartBtn.style.display = "none";
}

function makeGuess() {
  if (low > high) {
    document.getElementById("message").innerText = 
      "Hmm  Something went wrong. Did you trick me?";
    document.getElementById("controls").style.display = "none";
    restartBtn.style.display = "block";
    return;
  }
  mid = Math.floor((low + high) / 2);
  document.getElementById("guess").innerText = mid;
}

function isHigher() {
  low = mid + 1;
  makeGuess();
}

function isLower() {
  high = mid - 1;
  makeGuess();
}

function isCorrect() {
  document.getElementById("message").innerText = 
    ` Yay! I guessed your number: ${mid}`;
  document.getElementById("controls").style.display = "none";
  restartBtn.style.display = "block";
}

function restartGame() {
  startBtn.style.display = "block";
  restartBtn.style.display = "none";
  document.getElementById("message").innerText = "Click 'Start Game' when ready.";
}

startBtn.addEventListener("click", startGame);
higherBtn.addEventListener("click", isHigher);
lowerBtn.addEventListener("click", isLower);
correctBtn.addEventListener("click", isCorrect);
restartBtn.addEventListener("click", restartGame);