const startDisplay = document.querySelector(".game-intro");
const leftRoadLineX1 = 40;
const rightRoadLineX2 = 460;
let car;

function setup() {
  blueCar = new Car(210.5, 500, 79, 159.5);
  bg = loadImage("../images/road.png");
  car = loadImage("../images/car.png");
  const canvas = createCanvas(500, 700);
  canvas.parent("game-board");
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    blueCar.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    blueCar.moveRight();
  }
}

class Car {
  constructor(x, y, width, height) {
    this.x1 = x;
    this.y1 = y;
    this.x2 = x + width;
    this.y2 = y + height;
    this.width = width;
    this.height = height;
  }

  draw() {
    image(car, this.x1, this.y1, this.width, this.height);
    if (keyIsDown(39)) {
			this.moveRight()
		}
    if (keyIsDown(37)) {
			this.moveLeft()
		}
  }

  isOnRoad(goingLeft) {
    const leftSideOfCar = goingLeft ? this.x1 - 10 : this.x1;
    const rightSideOfCar = goingLeft ? this.x2 : this.x2 + 10;

    console.log(rightSideOfCar, leftSideOfCar, leftRoadLineX1, rightRoadLineX2);

    return leftSideOfCar >= leftRoadLineX1 && rightSideOfCar <= rightRoadLineX2
  }

  moveRight() {
    if (this.isOnRoad(false)) {
      this.x1 += 10;
      this.x2 += 10;
    }
  }
  moveLeft() {
    if (this.isOnRoad(true)) {
      this.x1 -= 10;
      this.x2 -= 10;
    }
  }
}

function draw() {
  background(bg);
  blueCar.draw();
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    startDisplay.style.display = "none";
  }
};
