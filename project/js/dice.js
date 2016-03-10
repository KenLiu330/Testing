//same as the rps play(), just call the functions for playing the game everytime when the roll the dices button being tapped.
function playRoll() {
  var num = roll();
  whoIsWinner(num);
}

//using math.random to return the total of the dices values.
function roll() {
  var value1 = Math.floor(Math.random() * 6 + 1);
  document.getElementById("dice1").innerHTML = "Your first dice value is " + value1 + ".";
  var value2 = Math.floor(Math.random() * 6 + 1);
  document.getElementById("dice2").innerHTML = "Your second dice value is " + value2 + ".";
  var total = value1 + value2;
  return total;
}

//to see whether or not you win, if you roll a total of 7 or 11, you win, or a 2, you lose, otherwise, nothing really happened because you neither win nor lose...
function whoIsWinner(tot) {
  if(tot == 7 || tot == 11)
  {
    document.getElementById("diceResult").innerHTML = "You rolled " + tot + ". So you won, congrats!";
  }
  else if(tot == 2)
  {
    document.getElementById("diceResult").innerHTML = "You rolled " + tot + ". Too bad you lost...";
  }
  else
  {
    document.getElementById("diceResult").innerHTML = "You rolled " + tot + ". For playing again, just click the button one more time! Thanks!";
  }
}