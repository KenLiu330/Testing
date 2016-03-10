//plays the program, calling the other functions whenever the play button is being tapped.
function play() {
  var userInput = document.getElementById("rpsSelectBox").value;
  document.getElementById("users").innerHTML = "You chose " + userInput + ".";
  var compInput = comp();
  document.getElementById("comps").innerHTML = "Computer chose " + compInput + ".";
  var stat = winnerGenerator(userInput, compInput);
  whoDaWinner(stat);
}

//the computer's turn to make a move!
function comp() {
  var computer;
  var valueC = Math.floor(Math.random() * 3 + 1);
  if (valueC == 1) {
    computer = "rock";
    return computer;
  } else if (valueC == 2) {
    computer = "paper";
    return computer;
  } else if (valueC == 3) {
    computer = "scissors";
    return computer;
  } else {
    computer = "blank";
    return computer;
  }
}

//generate the winner of the round using the moves by player and computer.
function winnerGenerator(valU, valC) {
  var val = 0;
  if ((valU === "scissors" && valC === "paper") || (valU === "paper" && valC === "rock") || (valU === "rock" && valC === "scissors")) {
    return val = 1;
  } else if ((valU === "paper" && valC === "scissors") || (valU === "rock" && valC === "paper") || valU === "blank" || (valU === "scissors" && valC === "rock")) {
    return val = 2;
  } else return val = 3;
}

//prints out who the winner is, or tie!
function whoDaWinner(stat) {
  if (stat == 1) {
    document.getElementById("winner").innerHTML = "Congrats, you won against the computer!";
  } else if (stat == 2) {
    document.getElementById("winner").innerHTML = "Too bad, maybe next time!";
  } else {
    document.getElementById("winner").innerHTML = "Pretty close there, it was a TIE!!!";
  }
}