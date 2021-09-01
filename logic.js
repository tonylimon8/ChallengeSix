var countDown = document.querySelector("#time");
var start = 999;
var interval;

function setTime() {
    interval = setInterval(function() {
    start--;
    countDown.textContent = start;
  }, 999);
}
function reduceByTen() {
    setInterval(function() {
    start= start-10;
  }, 1000);
}
function pauseTime(){
  clearInterval(interval);
}



var choiceA = document.getElementById("a");
var choiceB = document.getElementById("b");

var choiceC = document.getElementById("c");
var choiceD = document.getElementById("d");


var i = 1;        
var answer = 0; 
var correct = 0;
var end = document.getElementById("end-screen");
var score = document.getElementById("final-score");

var initials = document.getElementById("initials");

function displayQuestions(){
  var q = document.getElementById("questions");
      
  q.style.display = "block"; 
      q.style.fontWeight = "bold"; 
      q.style.color = "skyblue";

  var hide = document.getElementById("start");
      hide.style.display = "none";

  var title = document.getElementById("question-title");
  
    title.textContent = quiz[0].question;
    choiceA.textContent = quiz[0].choiceA;
    choiceB.textContent = quiz[0].choiceB;

    choiceC.textContent = quiz[0].choiceC;
    choiceD.textContent = quiz[0].choiceD;

  [choiceA,choiceB,choiceC,choiceD].forEach((button)=>{
    button.addEventListener('click',function(){
      if (i < quiz.length) {
      title.textContent = quiz[i].question;
      choiceA.textContent = quiz[i].choiceA;
      choiceB.textContent = quiz[i].choiceB;
      choiceC.textContent = quiz[i].choiceC;

      choiceD.textContent = quiz[i].choiceD;
      i++;
      answer++;   
      }else{
        q.style.display = "none";
        end.style.display = "block";
        score.innerHTML = correct + " out of " + quiz.length;
        pauseTime(); console.log(countDown.innerText + " seconds remaining");
        }  
    });
  });
} 
function checkABCD(userSelect){

  if(userSelect == quiz[answer].answer){  

    correct++; 

    console.log(correct +" Correct." + " Answer is " + quiz[answer].answer);

    console.log("You selected " + userSelect);
    localStorage.getItem(correct);

    localStorage.setItem("Correct Answers out of 10", correct);

  }else { 

    console.log("Wrong. " + "Answer is " + quiz[answer].answer);

    console.log("You selected " + userSelect);

    reduceByTen();
  }
}
function saveScore(){
  var n = initials.value;   var t = countDown.innerText;

  localStorage.getItem(n); localStorage.getItem(t);

  localStorage.setItem("initials", n); localStorage.setItem("time", t);
 
  window.location.href="../Develop/highscores.html";
}

function startQuiz(a){

  document.getElementById("start").addEventListener("click", a);
}

startQuiz(displayQuestions);

startQuiz(setTime);