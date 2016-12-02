console.log("game.js is working");
$(document).ready(function(){

	$("#guessButton").click(update);
})

var turns = 2;
var answer = parseInt(Math.floor(Math.random()*100));

var check =function(guesses){
if (guesses == answer){
	$("body").css("background-image","url('success.gif')");
	$("h1").css("color","black");
	$("h2").css("color","black");
	$("h3").css("color","black");
	var sound = new Audio ("applause6.mp3");
	sound.play();


  return "You guessed the right number!"

} else if (guesses > answer){
	turns = turns - 1;
	return "Your guess was too high!";
  	
} else if (guesses < answer){
	turns= turns - 1;
	 return "Your guess was too small!"	 
} else {
 	return 
}}

var update= function(button){
	if (turns > 0){
		var guess  = parseInt($("#guessInput").val());
		var msg = check(guess);
		$(".msgBox").html(msg);

	} else if (turns == 0){
		var boo = new Audio ("boo3.mp3");
		boo.play();

		var msg = "Thank you for playing, you used up all your tries! the answer was" + answer;
		$(".msgBox").html(msg);

		 $("#guessButton").off();
		

}}













