"use strict";

const grid = document.querySelector(".grid");
const blockWidth = 100;
const bolckHeight = 20;
const userStart = [230, 10];
let currentPossition = userStart;

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
user.style.left = currentPossition[0] + "px";
user.style.bottom = currentPossition[1] + "px";
userMovemnt();
grid.appendChild(user);

//movement of user

function userMovemnt() {
  if (user.style.left === "0px") {
    user.style.left === "100px";
  }
}

window.addEventListener("keydown", (event) => {
  if (event.defaultPrevented) {
    return;
  }
  switch (event.key) {
    case "ArrowRight":
  }
  userMovement(moveRate);
});
