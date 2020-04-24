const body = document.querySelector("body");
const maze = document.createElement("div");

const cellSize = 40;
let mazeWidth = 800;
let mazeHeight = 800;
let cellArray;
const colls = mazeWidth / cellSize;
const rows = mazeHeight / cellSize;

cellArray = new Array(rows);
for (let i = 0; i < colls; i++) {
  cellArray[i] = new Array(colls);
}

maze.style.minWidth = `${mazeWidth}px`;
maze.style.minHeight = `${mazeHeight}px`;
maze.style.width = `${mazeWidth}px`;
maze.style.height = `${mazeHeight}px`;

maze.classList.add("maze");

body.appendChild(maze);

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < colls; j++) {
    const cellObj = new Cell(cellSize, i, j, mazeWidth, mazeHeight);
    cellArray[i][j] = cellObj;
    maze.appendChild(cellObj.cell);
  }
}

generatePath(mazeWidth, mazeHeight, cellSize);
