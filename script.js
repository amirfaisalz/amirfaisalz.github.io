// function for computer choose
function compInput() {
  const comp = Math.random();

  if (comp < 0.34) return "rock";
  if (comp >= 0.34 && comp < 0.67) return "paper";
  return "scissor";
}

// function for output
function getOutput(comp, player) {
  if (player == comp) return "draw";
  if (player == "rock") return comp == "scissor" ? "win" : "lose";
  if (player == "paper") return comp == "rock" ? "win" : "lose";
  if (player == "scissor") return comp == "paper" ? "win" : "lose";
}

function compThink() {
  // variable for change comp image in interval, select image by class
  const compThinking = document.querySelector(".comp-image");
  // variable for array index
  const imageChange = ["rock", "paper", "scissor"];
  // variable for choose image in array
  let i = 0;
  // set start time to this time
  const startTime = new Date().getTime();
  //set interval for 0.1 second
  setInterval(function() {
    // if this time - start time > 1 second, then
    if (new Date().getTime() - startTime > 1000) {
      // clear interval
      clearInterval;
      //exit function
      return;
    }
    // change image by change its attribute by array index
    compThinking.setAttribute("src", "assets/img/" + imageChange[i++] + ".png");
    // when i = imageChange.length, make i = 0
    if (i == imageChange.length) i = 0;
  }, 100);
}

// take all image in userClick class
const playerClick = document.querySelectorAll("#userClick");
//loop for every image and set in rps
playerClick.forEach(function(rps) {
  // if rps click, then
  rps.addEventListener("click", function() {
    // variable for computer input
    const compRoll = compInput();
    // variable for player input
    const playerRoll = rps.className;
    // variable for get output
    const output = getOutput(compRoll, playerRoll);

    // function for rolling comp image
    compThink();

    //function for await 1 second after compimage rolling
    setTimeout(function() {
      // variable for change comp image, select image by class
      const compImage = document.querySelector(".comp-image");
      // change image by change its attribute
      compImage.setAttribute("src", "assets/img/" + compRoll + ".png");

      // variable for change player image, select image by class
      const playerImage = document.querySelector(".user-image");
      // change image by change its attribute
      playerImage.setAttribute("src", "assets/img/user-" + playerRoll + ".png");

      // variable for show the output, select text by class
      const info = document.querySelector(".info");
      // change text in HTML equal to output
      info.innerHTML = output;

      //variable for change user score, select number by id
      const userScore = document.querySelector("#user-score");
      if (output == "win") userScore.innerHTML++;

      //variable for change comp score, select number by id
      const compScore = document.querySelector("#comp-score");
      if (output == "lose") compScore.innerHTML++;
    }, 1000);
  });
});
