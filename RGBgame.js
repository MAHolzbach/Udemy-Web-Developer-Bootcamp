var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = colorPicker();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function() {
  colors = generateRandomColors(6);
  pickedColor = colorPicker();
  colorDisplay.textContent = pickedColor;
  reset.textContent = "New Colors";
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  h1.style.background = "#232323";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i ++) {
  //add initial colors
  squares[i].style.background = colors[i];
  //add click listeners
  squares[i].addEventListener("click", function() {
    //grab color of picked squares
    var clickedColor = this.style.background;
    //compare with pickedColor
    if(clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
      reset.textContent = "Play again?";
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again!";
    }
  });
};

function changeColors(color) {
  //loop through all squares to match given color
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
};

function colorPicker() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for(var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
};

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
