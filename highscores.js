

var highscores = document.getElementById("highscores");
var clear = document.getElementById("clear");

var score = localStorage.getItem("Correct Answers out of 10");
var initials = localStorage.getItem("initials");
var time = localStorage.getItem("time");

clear.addEventListener("click", function(){	
	highscores.innerHTML = "";
});
function getScore(){
	var li = document.createElement("li");
	li.textContent =  initials + " scored: " + score + "/10 with " + time + " seconds to spare";





	highscores.appendChild(li);
}
getScore();

