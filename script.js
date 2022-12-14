const X_CLASS = 'x'
const O_CLASS = 'o'
const cellElements = document.querySelectorAll("[cell-data]");
let oTurn

cellElements.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  const cell = e.target
  const
  //place x or o
  //check for win
  //check for draw
  //switch turns

}
