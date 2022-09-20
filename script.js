

function startGame() {
var timeEl = document.querySelector(".time");
var secondsLeft = 10;

function startTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left.";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

startTime();

gameInput.addEventListener('keydown', function (event) {
    var key = event.key.toLowerCase();
    var alphabetCharacters = 'abcdefghijklmnopqrstuvwxyz'.split(
      ''
    );
    if (alphabetCharacters.includes(key)) {
      for (var i = 0; i < elements.length; i++) {
        elements[i].textContent += event.key;
      }
    }
  });

function sendMessage(){
    timeEl.textContent=" ";
    if()
}
}

// initialize game with button
playButton.addEventListener("click", function(event){
    event.preventDefault();
    startGame();
})