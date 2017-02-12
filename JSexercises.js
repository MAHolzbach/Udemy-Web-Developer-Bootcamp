// Lecture 90 exercise.
// if (age < 0) {
// 	console.log("Error!");
// } else if (age == 21) {
// 	console.log("Happy 21st birthday!");
// } else if ((!(age % 2 === 0)) && !(Math.sqrt(age) % 1 === 0)) {
// 	console.log("Your age is odd!");
// } else if ((Math.sqrt(age) % 1 === 0)) {
//   console.log("Your age is a perfect square!");
// } else {
//   console.log("Just a normal age.");
// }
// Lecture 96 exercises.
var num = -10;

while (num <= 19) {
	document.write(num);
	num++;
	document.write("<br />");
}

document.write("<br>");
document.write("Next problem!")
document.write("<br> <br>");

var num = 10;

while (num <= 40) {
	document.write(num);
	num+=2;
	document.write("<br />");
}

document.write("<br>");
document.write("Next problem!")
document.write("<br> <br>");

var num = 300;

while (num <= 333) {
	if(num % 2 !== 0) {
		document.write(num);
		document.write("<br />");
	}
	num++;
}

document.write("<br>");
document.write("Next problem!")
document.write("<br> <br>");

var num = 5;

while (num <= 50) {
	if(num % 3 === 0 && num % 5 === 0) {
		document.write(num);
		document.write("<br />");
	}
	num++;
}
