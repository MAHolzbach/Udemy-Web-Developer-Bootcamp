var thereYet = prompt("Are we there yet?");

while(thereYet.indexOf("yes") === -1) {
  var thereYet = prompt("Are we there yet?");
}

alert("Yay we made it!");
