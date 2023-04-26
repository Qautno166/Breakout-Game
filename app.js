"use strict";

const grid = document.querySelector(".grid");
const blockWidth = 100;
const bolckHeight = 20;
const ballDiam = 20;
const boardWidth = 560;
const boardHight = 300;
const userStart = [230, 10];
const ballStart = [100, 100];
let xDirection = -2;
let yDirection = 2;
let currentPossition = userStart;
let currentBallPossition = ballStart;
let timerID;

//create block
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topleft = [xAxis, yAxis + bolckHeight];
    this.topright = [xAxis + blockWidth, yAxis + bolckHeight];
  }
}

const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
];

function addBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";

    grid.appendChild(block);
  }
}

addBlocks();

//add user

const user = document.createElement("div");
user.classList.add("user");
drawUser();
grid.appendChild(user);

//draw the user

function drawUser() {
  user.style.left = currentPossition[0] + "px";
  user.style.bottom = currentPossition[1] + "px";
}
function drawBall() {
  ball.style.left = currentBallPossition[0] + "px";
  ball.style.bottom = currentBallPossition[1] + "px";
}

//movement of user

function moveUser(e) {
  console.log(currentPossition);
  switch (e.key) {
    case "ArrowLeft":
      if (currentPossition[0] > 0) {
        currentPossition[0] = currentPossition[0] - 10;
        drawUser();
      }
      break;
  }

  switch (e.key) {
    case "ArrowRight":
      if (currentPossition[0] < 460) {
        currentPossition[0] = currentPossition[0] + 10;
        drawUser();
      }
      break;
  }
}

document.addEventListener("keydown", moveUser);

//creating ball

const ball = document.createElement("div");
ball.classList.add("ball");
grid.appendChild(ball);
drawBall();
// Position of ball

function movingBall() {
  currentBallPossition[0] += xDirection;
  currentBallPossition[1] += yDirection;
  collisionCheck();
  drawBall();

  console.log(xDirection);
  console.log(yDirection);

  console.log(`y = ${currentBallPossition[1]}`);
  console.log(`x = ${currentBallPossition[0]}`);
}
timerID = setInterval(movingBall, 20);
//Check for collision

function collisionCheck() {
  if (currentBallPossition[1] === 0) {
    console.log("aaaaaaaa");
    clearInterval(timerID);
  }
  if (
    currentBallPossition[0] >= boardWidth - ballDiam ||
    currentBallPossition[1] >= boardHight - ballDiam ||
    currentBallPossition[0] <= 0
  ) {
    changeDirection();
  }
  if (currentBallPossition[1] === 0) {
  }

  // if (currentBallPossition[0] <= 0 + ballDiam) {
  //   changeDirection();
  // if (currentBallPossition[0] <= 0 + ballDiam) {
  //   changeDirection();
  //
  // }
}

function changeDirection() {
  if (xDirection === 2 && yDirection === 2) {
    yDirection = -2;
    return;
  }
  if (xDirection === 2 && yDirection === -2) {
    xDirection = -2;
    return;
  }
  if (xDirection === -2 && yDirection === -2) {
    yDirection = 2;
    return;
  }
  if (xDirection === -2 && yDirection === 2) {
    xDirection = 2;
    return;
  }
}
// function changeDirection1() {
//   if (xDirection === -2 && yDirection === 2) {
//     yDirection = -2;
//   }
// }
