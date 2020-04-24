const generatePath = (mazeWidth, mazeHeight, cellSize) => {
  const max = mazeWidth / cellSize - 1;
  const bottom = mazeHeight / cellSize - 1;

  const randomWidthStartPoint = Math.floor(Math.random() * (max - 0)) + 0;
  let result = weightedRandom({ 1: 0.4, 2: 0.3, 3: 0.2, 4: 0.1 });

  //   const current = (cellArray[19][randomWidthStartPoint].style.background =
  //     "orange");
  //   cellArray[bottom][randomWidthStartPoint].current = true;
  //   cellArray[bottom][randomWidthStartPoint].style.borderTop = "none";

  let currentHeight = bottom;
  let currentWidth = randomWidthStartPoint;
  cellArray[currentHeight][currentWidth].current = true;
  cellArray[currentHeight][currentWidth].cell.style.borderBottom = "none";
  console.log(cellArray[currentHeight][currentWidth]);

  console.log(generateDirection());

  while (currentHeight != 0) {
    let dir = generateDirection();
    console.log(dir);

    switch (dir) {
      case "left":
        if (currentHeight == bottom) break;
        cellArray[currentHeight][currentWidth].cell.style.borderLeft = "none";
        currentWidth--;
        cellArray[currentHeight][currentWidth].current = true;
        cellArray[currentHeight][currentWidth].cell.style.borderRight = "none";

        break;

      case "top":
        cellArray[currentHeight][currentWidth].cell.style.borderTop = "none";
        currentHeight--;
        cellArray[currentHeight][currentWidth].current = true;
        cellArray[currentHeight][currentWidth].cell.style.borderBottom = "none";

        break;

      case "right":
        if (currentHeight == bottom) break;
        cellArray[currentHeight][currentWidth].cell.style.borderRight = "none";
        currentWidth++;
        cellArray[currentHeight][currentWidth].cell.current = true;
        cellArray[currentHeight][currentWidth].cell.style.borderLeft = "none";

        break;
    }
  }
};

function weightedRandom(prob) {
  let i,
    sum = 0,
    r = Math.random();
  for (i in prob) {
    sum += prob[i];
    if (r <= sum) return i;
  }
}

const directions = {
  0: "left",
  1: "top",
  2: "right",
};

const generateDirection = () => {
  return directions[Math.floor(Math.random() * (2 - 0)) + 0].toString();
};
