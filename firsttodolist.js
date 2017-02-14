//My pre-code before video
// var todo = [];
//
// function commands() {
//   var userChoice = prompt("What would you like to do?");
//
//   if(userChoice === "new") {
//     var newTask = prompt("Enter your new task.");
//     todo.push(newTask);
//     commands();
//   } else if (userChoice === "list") {
//     console.log(todo);
//     commands();
//   } else {
//     return;
//   }
// }
// commands();

//Part 2 with forEach, my pre-code before video
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
  } else if (userChoice === "delete") {
    var killTask = parseInt(prompt("Enter index of task to delete."), 10);
    todo.forEach(function(taskToKill, index) {
      if (index === killTask) {
        todo.splice(killTask, 1);
      }
    });
    commands();
  }
  else {
    return;
  }
}
commands();
