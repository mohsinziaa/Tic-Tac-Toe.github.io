let gameOver = new Audio("gameover.mp3");
let turn = new Audio("ting.mp3");
let currentTurn = "X";
let haveWon = false;
let lastTurn = currentTurn;
let isDraw = false;

function turnChange() {
  return currentTurn === "X" ? "O" : "X";
}

function checkWinner() {
  let textBoxArray = Array.from(document.getElementsByClassName("boxText"));
  checkHorizontals();
  checkVerticals();
  checkDiagonals();
  if (haveWon == true) {
    document.getElementsByTagName("img")[0].style.width = "80px";
  }
}
function checkIfDraw() {
  let textBoxArray = Array.from(document.getElementsByClassName("boxText"));
  if (
    textBoxArray[0].innerText != "" &&
    textBoxArray[1].innerText != "" &&
    textBoxArray[2].innerText != "" &&
    textBoxArray[3].innerText != "" &&
    textBoxArray[4].innerText != "" &&
    textBoxArray[5].innerText != "" &&
    textBoxArray[6].innerText != "" &&
    textBoxArray[7].innerText != "" &&
    textBoxArray[8].innerText != ""
  ) {
    isDraw = true;
  }
  if (isDraw == true) {
    document.getElementsByTagName("img")[0].style.width = "0px";
    document.getElementsByClassName("currentTurn")[0].innerText = "Game Draw ";
    for (let index = 0; index < 9; index++) {
      textBoxArray[index].classList.add("gameDraw");
    }
    setTimeout(() => {
      alert("Game Drawn. Click on OK to reset the game.");
    }, 1000);

    setTimeout(() => {
      document.getElementById("reset").click();
    }, 1000);
  }
}

function checkHorizontals() {
  let textBoxArray = Array.from(document.getElementsByClassName("boxText"));
  for (let index = 0; index < 8; index += 3) {
    if (
      textBoxArray[index].innerText === textBoxArray[index + 1].innerText &&
      textBoxArray[index + 2].innerText === textBoxArray[index + 1].innerText &&
      textBoxArray[index].innerText !== ""
    ) {
      haveWon = true;
      document.getElementsByClassName("currentTurn")[0].innerText =
        currentTurn + " has Won";
      textBoxArray[index].classList.add("winIndexBoxes");
      textBoxArray[index + 1].classList.add("winIndexBoxes");
      textBoxArray[index + 2].classList.add("winIndexBoxes");

      currentTurn = turnChange();
      setTimeout(() => {
        alert(
          currentTurn + " has Won the game. Click on OK to reset the game."
        );
      }, 1000);

      setTimeout(() => {
        document.getElementById("reset").click();
      }, 1000);
      break;
    }
  }
}

function checkVerticals() {
  let textBoxArray = Array.from(document.getElementsByClassName("boxText"));
  for (let index = 0; index < 3; index++) {
    if (
      textBoxArray[index].innerText === textBoxArray[index + 3].innerText &&
      textBoxArray[index + 6].innerText === textBoxArray[index + 3].innerText &&
      textBoxArray[index].innerText !== ""
    ) {
      haveWon = true;
      document.getElementsByClassName("currentTurn")[0].innerText =
        currentTurn + " has Won";
      textBoxArray[index].classList.add("winIndexBoxes");
      textBoxArray[index + 3].classList.add("winIndexBoxes");
      textBoxArray[index + 6].classList.add("winIndexBoxes");

      currentTurn = turnChange();
      setTimeout(() => {
        alert(
          currentTurn + " has Won the game. Click on OK to reset the game."
        );
      }, 1000);

      setTimeout(() => {
        document.getElementById("reset").click();
      }, 1000);
      break;
    }
  }
}

function checkDiagonals() {
  let textBoxArray = Array.from(document.getElementsByClassName("boxText"));
  if (
    textBoxArray[0].innerText === textBoxArray[4].innerText &&
    textBoxArray[8].innerText === textBoxArray[4].innerText &&
    textBoxArray[4].innerText !== ""
  ) {
    haveWon = true;
    document.getElementsByClassName("currentTurn")[0].innerText =
      currentTurn + " has Won";
    textBoxArray[0].classList.add("winIndexBoxes");
    textBoxArray[4].classList.add("winIndexBoxes");
    textBoxArray[8].classList.add("winIndexBoxes");

    currentTurn = turnChange();
    setTimeout(() => {
      alert(currentTurn + " has Won the game. Click on OK to reset the game.");
    }, 1000);

    setTimeout(() => {
      document.getElementById("reset").click();
    }, 1000);

    return;
  } else if (
    textBoxArray[2].innerText === textBoxArray[4].innerText &&
    textBoxArray[6].innerText === textBoxArray[4].innerText &&
    textBoxArray[4].innerText !== ""
  ) {
    haveWon = true;
    document.getElementsByClassName("currentTurn")[0].innerText =
      currentTurn + " has Won";
    textBoxArray[2].classList.add("winIndexBoxes");
    textBoxArray[4].classList.add("winIndexBoxes");
    textBoxArray[6].classList.add("winIndexBoxes");
    currentTurn = turnChange();
    setTimeout(() => {
      alert(currentTurn + " has Won the game. Click on OK to reset the game.");
    }, 1000);

    setTimeout(() => {
      document.getElementById("reset").click();
    }, 1000);

    return;
  }
}

Array.from(document.getElementsByClassName("box")).forEach((element) => {
  let currentBox = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (currentBox.innerText == "") {
      currentBox.innerText = currentTurn;
      turn.play();
      checkWinner();
      checkIfDraw();
      currentTurn = turnChange();
      if (!haveWon && !isDraw) {
        document.getElementsByClassName("currentTurn")[0].innerText =
          "Currently : Turn For " + currentTurn;
      }
    }
  });
});

document.getElementById("reset").addEventListener("click", () => {
  let textBoxArray = Array.from(document.getElementsByClassName("boxText"));
  for (let index = 0; index < textBoxArray.length; index++) {
    textBoxArray[index].innerText = "";
    textBoxArray[index].classList.remove("winIndexBoxes");
    textBoxArray[index].classList.remove("gameDraw");
  }
  isDraw = false;
  haveWon = false;
  currentTurn = "X";
  document.getElementsByClassName("currentTurn")[0].innerText =
    "Currently : Turn For " + currentTurn;
  document.getElementsByTagName("img")[0].style.width = "0px";
});
