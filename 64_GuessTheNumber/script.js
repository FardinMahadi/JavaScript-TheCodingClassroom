"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉 Correct Number!";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

const secretNumber = Math.trunc(Math.random() * 21);
document.querySelector(".number").textContent = "?";

let score = 20,
  highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number";
    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //When the guess is to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".message").textContent = "📈 Too High";
      document.querySelector(".score").textContent = score;
    } else {
      score--;
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "💥 You Lost The Game";
    }
    //When the guess is to low
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".message").textContent = "📉 Too Low";
      document.querySelector(".score").textContent = score;
    } else {
      score--;
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "💥 You Lost The Game";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
});
