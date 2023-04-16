// set up variables
var dot = document.getElementById("dot");
var scoreboard = document.getElementById("scoreboard");
var timer = document.getElementById("timer");
var startButton = document.getElementById("start-button");
var score = 0;
var timeRemaining = 30;
var gameInterval;
var dotInterval;

// set up click event listener for the dot
dot.addEventListener("click", function() {
  // increase score and update scoreboard
  score++;
  scoreboard.innerHTML = "Score: " + score;
  
  // stop the dot's animation and move it to a new location
  dot.style.animation = "none";
  dot.offsetHeight; // forces reflow, to reset the animation
  var randomX = Math.floor(Math.random() * (window.innerWidth - dot.offsetWidth));
  var randomY = Math.floor(Math.random() * (window.innerHeight - dot.offsetHeight));
  dot.style.left = randomX + "px";
  dot.style.top = randomY + "px";
  dot.style.animation = "move 2s linear infinite";
});

// set up click event listener for the start button
startButton.addEventListener("click", function() {
  // start the game interval
  gameInterval = setInterval(function() {
    // decrease time remaining and update timer
    timeRemaining--;
    timer.innerHTML = "Time Remaining: " + timeRemaining;
    
    // end the game if time runs out
    if (timeRemaining == 0) {
      clearInterval(gameInterval);
      clearInterval(dotInterval);
      alert("Game Over! Your final score is " + score);
      score = 0;
      timeRemaining = 30;
      scoreboard.innerHTML = "Score: " + score;
      timer.innerHTML = "Time Remaining: " + timeRemaining;
      startButton.disabled = false;
    }
  }, 1000);
  
  // start the dot interval
  dotInterval = setInterval(function() {
    // move the dot to a new location
    var randomX = Math.floor(Math.random() * (window.innerWidth - dot.offsetWidth));
    var randomY = Math.floor(Math.random() * (window.innerHeight - dot.offsetHeight));
    dot.style.left = randomX + "px";
    dot.style.top = randomY + "px";
  }, 2000);
  
  // disable the start button
  startButton.disabled = true;
});
