var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Score = 0;
var p1Points = document.querySelector("#p1Points");
var p2Score = 0;
var p2Points = document.querySelector("#p2Points");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var playTo = document.querySelector("p span");
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function() {
  if(!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      p1Points.classList.add("winner");
      gameOver = true;
    }
    p1Points.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function() {
  if(!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2Points.classList.add("winner");
      gameOver = true;
    }
    p2Points.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function() {
  p1Points.textContent = "0";
  p1Score = 0;
  p2Points.textContent = "0";
  p2Score = 0;
  p1Points.classList.remove("winner");
  p2Points.classList.remove("winner");
  gameOver = false;
});

numInput.addEventListener("change", function() {
  playTo.textContent = numInput.value;
  winningScore = Number(numInput.value);
});
