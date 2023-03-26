const winner = document.querySelector(".winner");
const cells = document.querySelectorAll(".cell");
const btnClear = document.querySelector(".btnClear");

let currentPlayer = "X";
let countX = 0;
let countO = 0;

const board = {
  x: [],
  o: [],
  clicked: [],
};

const winningGames = [
  ["11", "22", "33"],
  ["31", "22", "13"],
  ["21", "22", "23"],
  ["12", "22", "32"],
  ["11", "12", "13"],
  ["31", "32", "33"],
  ["11", "21", "31"],
  ["13", "23", "33"],
];

const playerWins = ({ x, o }) => {
  if (x.length >= 3) {
    winningGames.forEach((winningGame) => {
      countX = 0;
      countO = 0;
      winningGame.map((e) => {
        if (x.includes(e)) {
          countX += 1;
          if (countX === 3) {
            winner.textContent = "Gana el juego la X";
          }
        }
        if (o.includes(e)) {
          countO += 1;
          if (countO === 3) {
            winner.textContent = "Gana el juego la O";
          }
        }
      });
    });
  }
};

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.innerHTML === "") {
      board.clicked.push(cell);
      cell.textContent = currentPlayer;
      currentPlayer =
        currentPlayer === "X"
          ? (board.x.push(cell.id), "O")
          : (board.o.push(cell.id), "X");
    }
    if (board.clicked.length != 9) {
      playerWins(board);
    } else {
      winner.textContent = "No hay ganador";
    }
  });
});

const clearBoard = () => {
  window.location.reload();
};

btnClear.addEventListener("click", () => clearBoard());
