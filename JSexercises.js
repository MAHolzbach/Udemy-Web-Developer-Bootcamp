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
// var num = -10;
//
// while (num <= 19) {
// 	document.write(num);
// 	num++;
// 	document.write("<br />");
// }
//
// document.write("<br>");
// document.write("Next problem!")
// document.write("<br> <br>");
//
// var num = 10;
//
// while (num <= 40) {
// 	document.write(num);
// 	num+=2;
// 	document.write("<br />");
// }
//
// document.write("<br>");
// document.write("Next problem!")
// document.write("<br> <br>");
//
// var num = 300;
//
// while (num <= 333) {
// 	if(num % 2 !== 0) {
// 		document.write(num);
// 		document.write("<br />");
// 	}
// 	num++;
// }
//
// document.write("<br>");
// document.write("Next problem!")
// document.write("<br> <br>");
//
// var num = 5;
//
// while (num <= 50) {
// 	if(num % 3 === 0 && num % 5 === 0) {
// 		document.write(num);
// 		document.write("<br />");
// 	}
// 	num++;
// }

// Lecture 101 exercises
//
// for(i = -10; i<=19; i++){
// 	document.write(i);
// 	document.write("<br />");
// }
// document.write("<br>");
// document.write("Next problem!")
// document.write("<br> <br>");
//
// for(i=10; i<=40; i+=2) {
// 	document.write(i);
// 	document.write("<br />");
// }
// document.write("<br>");
// document.write("Next problem!")
// document.write("<br> <br>");
//
// for(i=300; i<=333; i++) {
// 	if(i % 2 !== 0) {
// 		document.write(i);
// 		document.write("<br />");
// 	}
// }
// document.write("<br>");
// document.write("Next problem!")
// document.write("<br> <br>");
//
// for(i=5; i<=50; i++) {
// 	if(i % 3 === 0 && i % 5 === 0){
// 		document.write(i);
// 		document.write("<br />");
// 	}
// }

// Lecture 108 exercises

// function isEven(number) {
// 	if(number % 2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// //This was a fail
// function factorial(number) {
// 	if(number === 0) {
// 		return 1;
// 	};
// 	for(i=1; i<=number; i++) {
// 		return number * factorial(number-1);
// 	}
// }
//
// function kebabToSnake(str) {
// 	var str = str.replace(/-/g, "_");
// 	return(str);
// }

//Lecture 121 exercises

// function printReverse(array) {
// 	for (i=array.length-1; i>=0; i--) {
// 		document.write(array[i]);
// 		document.write("<br>");
// 	}
// }
// printReverse([1,2,3,4]);
//
// document.write("<br>");
// document.write("Next problem!")
// document.write("<br> <br>");
//
// function isUniform(array) {
// 	var testCase = array[0];
// 	array.forEach(function(arr) { //shoulda used a for loop
// 		if (arr !== testCase) {
// 			return false;
// 		} else {
// 			return true;
// 		}
// 	});
// }
//
// isUniform([1,2,1,1]);
//
// document.write("<br>");
// document.write("Next problem!")
// document.write("<br> <br>");
//
// function sumArray(array) {
// 	var result = 0;
//
// 	array.forEach(function(items) {
// 		result += items;
// 	});
// 	document.write(result);
// }
//
// sumArray([1,2,9]);
//
// document.write("<br>");
// document.write("Next problem!")
// document.write("<br> <br>");
//
// function max(array) {
// 	var answer = array[0];
//
// 	array.forEach(function(num) {
// 		if (num > answer) {
// 			answer = num;
// 		}
// 	});
// 	document.write(answer);
// }
// max([-31,-40,-123]);

//Lecture 128 exercise
//
// var movies = [
// 	{
// 		title: "Star Wars",
// 		rating: 5,
// 		hasWatched: true
// 	},
// 	{
// 		title: "Passengers",
// 		rating: 4,
// 		hasWatched: true
// 	},
// 	{
// 		title: "Bourne Identity",
// 		rating: 5,
// 		hasWatched: true
// 	},
// 	{
// 		title: "Rogue One",
// 		rating: 3,
// 		hasWatched: false
// 	}
// ];
//
// movies.forEach(function(film) {
// 	if (film.hasWatched === true) {
// 		document.write("You have watched " + film.title + " - " + film.rating + " stars. <br>");
// 	} else {
// 		document.write("You haven't watched " + film.title + " - " + film.rating + " stars. <br>");
// 	}
// });

//Lecture 163 jQuery exercises
$("div").css("background", "purple");

$(".highlight").css("width", "200px");

$("#third").css("border", "orange 3px solid");

$("div:first").css("color", "pink");
