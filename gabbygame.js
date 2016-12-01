console.log("game.js is working");
//document.ready function
//create the button listeners on the guess button, call the update function when clicked 

alert ("The mystery number is between 1 and 100");
var guess= prompt("Guess a number!");
var guesss= parseInt(guess);
var guesses= $(".movement").append(guesss)

var turns = 5;

var answer = parseInt(Math.floor(Math.random()*100));

//check function,
//take in one parameter, the guess
//if the guess is wrong, subract one from the turns
//if the guess is right, display a win message
if (guesses == answer){
  return "a win message"

} else if (guesses > answer){
	

	return "Your guess was too high!";
  	
} else if (guesses < answer){
	 return "Your guess was too small!"
}
// } else {
// 	alert("Thank you for playing!");
// 	alert("The answer was" + answer);
// }

//update function
//called everytime the guess button is clicked
//grab the users guess from the input with the class of "guess", that is the value in the box
//parse int the value
//call the check function with the user guess
var msg = update(guess);
//display the message of the click function to the screen
//change the html inside the message box, class of msgBox, to be the msg













