let img;
let bg;
let dorito;
let snakeSize = 30;  // Initial size of the snake (image)
let snakeX = 200, snakeY = 200;
let directionX = 1, directionY = 0;
let foodX, foodY, foodRotation;  // Food coordinates and rotation
let gameStarted = false;
let button;
let foodEaten = 0;  // Track how many food items have been eaten
let speed = 50;  // Snake movement speed
let f;  // Custom font
let gridSize = 30;  // Size of each grid cell

function preload() {
  img = loadImage('assets/movedoro.gif');  // Load snake image
  bg = loadImage('assets/dorocrawl.gif');  // Load background
  dorito = loadImage('assets/dorito.png');  // Load food image
  f = loadFont('font/handjet.ttf');  // Load custom font
}

function setup() {
  createCanvas(500, 500);
  textFont(f);  // Apply custom font to canvas
  resetGame();

  // Create and style the start button
  button = createButton('Start Game');
  button.style('font-family', 'handjet');
  button.style('font-size', '32px');
  button.style('background-color', '#000000');
  button.style('color', '#FFFAFA');
  button.position(width / 2 + 20, height / 2 + 250);
  button.size(150, 50);
  button.mousePressed(startGame);
}

function resetGame() {
  snakeSize = 30;  // Reset snake size
  snakeX = width / 2;  // Reset snake position
  snakeY = height / 2;
  directionX = 1;
  directionY = 0;
  foodEaten = 0;  // Reset food counter
  speed = 50;  // Reset speed
  placeFood();  // Position food
}

function placeFood() {
  let padding = 50;  // Padding to keep food away from canvas edges
  foodX = floor(random(padding, width - padding - 30));  // Position food inside the canvas
  foodY = floor(random(padding, height - padding - 30));
  foodRotation = random(TWO_PI);  // Random rotation for food
}

function startGame() {
  gameStarted = true;
  button.hide();  // Hide button when game starts
}

function draw() {
  if (!gameStarted) {
    background(bg);  // Show background image
    textSize(100);
    textAlign(CENTER, CENTER);
    fill(255);
    text('FEED THE DORO', width / 2, height / 2 - 180);
	
	let c = random(0, width);
	let b = random(0, height);
	let t = random(0, width/10);
	rectMode(RADIUS);
	fill(255);
	rect(c, b, t, t);
	  
	rectMode(CENTER);
	fill(0);
	rect(c, b, t, t);
	  
	rectMode(RADIUS);
	fill(255);
	rect(b, c, t, t);
	  
	rectMode(CENTER);
	fill(0);
	rect(b, c, t, t);
    return;  // Stop here if the game hasn't started
  }

  // Create an RGB background effect
  let r = (sin(frameCount * 0.01) * 128 + 128);
  let g = (sin(frameCount * 0.01 + TWO_PI / 3) * 128 + 128);
  let b = (sin(frameCount * 0.01 + 2 * TWO_PI / 3) * 128 + 128);
  background(r, g, b);  // Set the background color to RGB values

  // Draw the RGB grid
  drawRGBGrid();

  // Draw and rotate the dorito as the food
  push();
  let ran = random(60);
  translate(foodX + 15, foodY + 15);  // Move the origin to the center of the image
  rotate(foodRotation);  // Rotate the image
  imageMode(CENTER);  // Draw from the center
  image(dorito, 0, 0, ran, ran);  // Draw dorito
  pop();

  // Move the snake
  if (frameCount % 10 == 0) {
    moveSnake();
  }

  // Draw the snake (image)
  image(img, snakeX, snakeY, snakeSize, snakeSize);

  // Check for collision with food
  let hitboxSize = snakeSize / 2;
  let foodHitboxSize = 15;
  if (dist(snakeX + hitboxSize, snakeY + hitboxSize, foodX + foodHitboxSize, foodY + foodHitboxSize) < hitboxSize + foodHitboxSize) {
    eatFood();
  }

  // Draw the score on the top right corner
  textSize(32);
  fill(0);
  textAlign(RIGHT, TOP);
  text('Doritos Eaten: ' + foodEaten, width - 20, 20);

  // Check for boundary collision (game over if snake goes out of bounds)
  if (snakeX < 0 || snakeX + snakeSize > width || snakeY < 0 || snakeY + snakeSize > height) {
    gameOver();
  }
}

function drawRGBGrid() {
  strokeWeight(1);
  let numCols = width / gridSize;
  let numRows = height / gridSize;

  for (let i = 0; i <= numCols; i++) {
    for (let j = 0; j <= numRows; j++) {
      // Calculate the color based on the position and frame count
      let r = (sin(frameCount * 0.01 + i * 0.1) * 128 + 128);
      let g = (sin(frameCount * 0.01 + j * 0.1) * 128 + 128);
      let b = (sin(frameCount * 0.01 + (i + j) * 0.1) * 128 + 128);

      stroke(r, g, b);  // Set the line color
      noFill();
      rect(i * gridSize, j * gridSize, gridSize, gridSize);  // Draw the grid cell
    }
  }
}

function moveSnake() {
  snakeX += directionX * speed;  // Update snake position
  snakeY += directionY * speed;
}

function keyPressed() {
  // Evaluate the keyCode of the pressed key and execute the corresponding case
  switch (keyCode) {
    // If the LEFT_ARROW key is pressed
    case LEFT_ARROW:
      directionX = -1;  // Set horizontal movement to left (negative direction)
      directionY = 0;   // Ensure there is no vertical movement
      break;  // Exit the switch statement after handling this case

    // If the RIGHT_ARROW key is pressed
    case RIGHT_ARROW:
      directionX = 1;   // Set horizontal movement to right (positive direction)
      directionY = 0;
      break;

    // If the UP_ARROW key is pressed
    case UP_ARROW:
      directionX = 0;   // Ensure there is no horizontal movement
      directionY = -1;  // Set vertical movement to up (negative direction)
      break;

    // If the DOWN_ARROW key is pressed
    case DOWN_ARROW:
      directionX = 0;
      directionY = 1;   // Set vertical movement to down (positive direction)
      break;
  }
}

function eatFood() {
  foodEaten++;  // Increment the score (food eaten)
  snakeSize += 5;  // Increase snake size
  speed = max(8, speed - 0.1);  // Reduce speed slightly, but not below 8
  placeFood();  // Reposition food
}

function gameOver() {
  gameStarted = false;  // Stop the game
  button.show();  // Show button again for restarting
  resetGame();  // Reset the game
}
