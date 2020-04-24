class Cell {
  constructor(size, positionX, positionY, mazeWidth, mazeHeight) {
    this.visited = false;
    this.current = false;
    this.positionX = positionX;
    this.positionY = positionY;
    this.borders = [true, true, true, true];
    this.cell = document.createElement("div");
    this.cell.style.width = `${size}px`;
    this.cell.style.height = `${size}px`;
    this.cell.style.borderTop = this.borders[0] ? "1px solid white" : "none";
    this.cell.style.borderRight = this.borders[1] ? "1px solid white" : "none";
    this.cell.style.borderLeft = this.borders[2] ? "1px solid white" : "none";
    this.cell.style.borderBottom = this.borders[3] ? "1px solid white" : "none";
    this.cell.style.fontSize = "10px";

    this.visited ? (this.cell.style.background = "#4f4f4f") : "transparent";
    this.current ? (this.cell.style.backgroundColor = "red") : "transparent";

    if (
      positionX == 0 ||
      positionX == mazeWidth / size - 1 ||
      positionY == 0 ||
      positionY == mazeHeight / size - 1
    ) {
      // this.cell.style.background = "aqua";
    }
  }
}
