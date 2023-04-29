# Block Breaker Game

This is a simple implementation of the classic block breaker game, built with HTML, CSS, and vanilla JavaScript.

## Game Play
The objective of the game is to destroy all the blocks on the board by bouncing a ball off a
paddle and hitting the blocks. The player controls the paddle at the bottom of the screen, 
using the left and right arrow keys to move it. The ball bounces off the walls, paddle, 
and blocks. If the ball hits the bottom of the screen, the game is over.

## Code Structure
The game code consists of a few main parts:
index.html: The HTML file contains the basic structure of the game, including the game board and all the game elements
(blocks, paddle, ball).
styles.css: The CSS file styles the game elements, including the colors, fonts, and positioning.
script.js: The JavaScript file contains the game logic, including the movement of the ball and paddle, 
collision detection, and score tracking.

## Key Concepts
The game makes use of several key concepts in JavaScript, including:

Classes: The Block class is used to represent each block on the game board.

Event listeners: The keydown event listener is used to detect when the player presses the arrow keys to move the paddle.

DOM manipulation: The querySelector and createElement methods are used to manipulate the game board 
and create new elements (blocks, paddle, ball).

Timers: The setInterval method is used to update the position of the ball on the game board.

## Conclusion
This implementation of the block breaker game is a simple example of how to create a game using HTML,
CSS, and JavaScript. With some additional features and polish, it could be turned into a fully-featured game 
that players can enjoy for hours.
