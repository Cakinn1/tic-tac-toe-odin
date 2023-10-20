// <!-- 1. Winning condition -->
// <!-- 2. whos turn it is -->
// <!-- 3. grid of squares-->

const playerDisplay = document.querySelector("#player-turn");
const square = document.querySelectorAll("#grid > div");
const winnerDisplay = document.querySelector("#winner");
const grid = document.querySelector("#grid");
const loserDisplay = document.querySelector("#loser");
const button = document.querySelector("button");
let currentPlayer = "X";
let loser = "";

function isBoardFilled() {
  for (let i = 0; i < square.length; i++) {
    if (
      !square[i].classList.contains("x-icon") &&
      !square[i].classList.contains("o-icon")
    ) {
      return false;
    }
  }
  setTimeout(() => {
    alert("Board is filled and no one won!! Board reseting.");
  }, 500);
  setTimeout(() => {
    clearBoard();
  }, 2000);
  return true;
}

playerDisplay.innerHTML = currentPlayer;
let winningBoard = [
  // Rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // Columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // Diagonals
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinningConditions() {
  for (let i = 0; i < winningBoard.length; ++i) {
    const square1 = square[winningBoard[i][0]];
    const square2 = square[winningBoard[i][1]];
    const square3 = square[winningBoard[i][2]];
    if (
      square1.classList.contains("x-icon") &&
      square2.classList.contains("x-icon") &&
      square3.classList.contains("x-icon")
    ) {
      winnerDisplay.innerHTML = " " + "X";
      loserDisplay.innerHTML = " " + currentPlayer;

      grid.removeEventListener("click", handleSquareClick);
      console.log("test2");
      currentPlayer = "O";
    } else if (
      square1.classList.contains("o-icon") &&
      square2.classList.contains("o-icon") &&
      square3.classList.contains("o-icon")
    ) {
      winnerDisplay.innerHTML = " " + "O";
      loserDisplay.innerHTML = " " + currentPlayer;
      grid.removeEventListener("click", handleSquareClick);
      console.log("test2");
      currentPlayer = "X";
    }
  }
}

function displayerPlayer() {
  playerDisplay.innerHTML = currentPlayer;
}

function handleSquareClick(event) {
  const clickedSqaure = event.target;
  if (
    clickedSqaure.classList.contains("x-icon") ||
    clickedSqaure.classList.contains("o-icon")
  ) {
    alert("already has square");
  } else {
    if (currentPlayer === "X") {
      clickedSqaure.classList.add("x-icon");
      currentPlayer = "O";
    } else if (currentPlayer === "O") {
      clickedSqaure.classList.add("o-icon");
      currentPlayer = "X";
    }
  }

  checkWinningConditions();
  displayerPlayer();
  isBoardFilled();
}

function clearBoard() {
  square.forEach((currentSqaure) => {
    currentSqaure.classList.remove("x-icon");
    currentSqaure.classList.remove("o-icon");
  });
  winnerDisplay.innerHTML = "";
  loserDisplay.innerHTML = "";
  grid.addEventListener("click", handleSquareClick);
}
grid.addEventListener("click", handleSquareClick);
button.addEventListener("click", clearBoard);
