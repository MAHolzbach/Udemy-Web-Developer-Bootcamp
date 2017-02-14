//My pre-code before video
var todo = [];

function commands() {
  var userChoice = prompt("What would you like to do?");

  if(userChoice === "new") {
    var newTask = prompt("Enter your new task.");
    todo.push(newTask);
    commands();
  } else if (userChoice === "list") {
    console.log(todo);
    commands();
  } else {
    return;
  }
}
commands();
