let pink, red, orange, cyan; // Variables for the ghost images
let currentShape = ''; // Variable to track the current shape being drawn
let shapes = []; // Array to store the drawn shapes
let redoStack = []; // Array to store shapes for redo functionality
let brushSize = 40; // Default brush size
let shiftPressed = false; // Track if the shift key is pressed
let lastMouseX, lastMouseY; // Store the last mouse position for straight-line drawing
let canvas;

// Preload the ghost images
function preload() {
  pink = loadImage('assets/pink.png');
  red = loadImage('assets/red.png');
  orange = loadImage('assets/orange.png');
  cyan = loadImage('assets/cyan.png');
}

function setup() {
  let canvasSize = min(windowWidth * 0.9, windowHeight * 0.75); // Scale canvas size based on window size
  canvas = createCanvas(canvasSize, canvasSize); // Create a canvas with dynamic size
  centerCanvas();
}

function centerCanvas() {
  let x = (windowWidth - width) / 2;  // Horizontal center
  let y = (windowHeight - height) / 2;  // Vertical center
  canvas.position(x, y);               // Reposition the canvas
}

function windowResized() {
  centerCanvas();  // Re-center the canvas whenever the window is resized
}

function draw() {
  background(0); // Clear the canvas each frame to redraw shapes
  console.log("Drawing frame");
  noStroke(); // Remove borders from shapes
  drawShapes(); // Draw all shapes stored in the shapes array

  // Check if the mouse is pressed and a shape is selected
  if (mouseIsPressed && currentShape !== '') {
    let newShape;

    // If shift is pressed, constrain the shape to a straight line
    if (shiftPressed) {
      let dx = abs(mouseX - lastMouseX);
      let dy = abs(mouseY - lastMouseY);
      
      // Constrain to horizontal or vertical movement
      if (dx > dy) {
        mouseY = lastMouseY; // Horizontal line
      } else {
        mouseX = lastMouseX; // Vertical line
      }
    } else {
      // Update last mouse position for free drawing
      lastMouseX = mouseX;
      lastMouseY = mouseY;
    }

    // Create a new shape or eraser based on the current selection
    if (currentShape === 'square') {
      newShape = { type: 'square', x: mouseX, y: mouseY, size: brushSize };
    } else if (currentShape === 'circle') {
      newShape = { type: 'circle', x: mouseX, y: mouseY, size: brushSize };
    } else if (currentShape === 'pacman') {
      newShape = { type: 'pacman', x: mouseX, y: mouseY, size: brushSize };
    } else if (currentShape === 'ghost') {
      // Randomly select one of the four ghosts
      let ghostOptions = [pink, red, orange, cyan];
      let selectedGhost = random(ghostOptions);
      newShape = { type: 'ghost', x: mouseX, y: mouseY, image: selectedGhost, size: brushSize };
    } else if (currentShape === 'eraser') {
      // Draw a white square to erase parts of the canvas
      newShape = { type: 'eraser', x: mouseX, y: mouseY, size: brushSize };
    }

    // Add the new shape to the shapes array
    shapes.push(newShape);
  }
}

// Function to handle key presses
function keyPressed() {
  if (key === '1') {
    currentShape = 'square'; // Select square
  } else if (key === '2') {
    currentShape = 'circle'; // Select circle
  } else if (key === '3') {
    currentShape = 'pacman'; // Select Pac-Man
  } else if (key === '4') {
    currentShape = 'ghost'; // Select ghost
  } else if (key === '5') {
    currentShape = 'eraser'; // Select eraser
  } else if (key === 'p') {
    saveCanvas('myPacManLevel', 'png'); // Save the canvas as an image
  } else if (key === 'e') {
    shapes = []; // Reset shapes
    redoStack = []; // Reset redo stack
    background(0); // Set background to black
  } else if (key === 'z') {
    undoShape(); // Undo last shape
  } else if (key === 'r') {
    redoShape(); // Redo last shape
  } else if (key === '[') {
    // Decrease brush size, but not less than 10
    brushSize = max(10, brushSize - 5);
  } else if (key === ']') {
    // Increase brush size
    brushSize = min(200, brushSize + 5);
  } else if (key === 'Shift') {
    shiftPressed = true; // Enable straight-line drawing
    lastMouseX = mouseX;  // Initialize last mouse position
    lastMouseY = mouseY;
  }
}

// Reset shiftPressed when the Shift key is released
function keyReleased() {
  if (key === 'Shift') {
    shiftPressed = false; // Disable straight-line drawing
  }
}

// Function to draw all shapes stored in the shapes array
function drawShapes() {
  for (let shape of shapes) {
    if (shape.type === 'square') {
      fill(0, 0, 225); // Blue square
      rect(shape.x, shape.y, shape.size, shape.size);
    } else if (shape.type === 'circle') {
      fill(255, 229, 204); // Peach-colored circle
      ellipse(shape.x, shape.y, shape.size);
    } else if (shape.type === 'pacman') {
      fill(255, 255, 51); // Yellow Pac-Man
      arc(shape.x, shape.y, shape.size, shape.size, 0.2 * PI, 1.8 * PI);
    } else if (shape.type === 'ghost') {
      // Draw the selected ghost image
      image(shape.image, shape.x, shape.y, shape.size, shape.size);
    } else if (shape.type === 'eraser') {
      // Draw a black circle to simulate erasing
      fill(0); // Black color
      ellipse(shape.x, shape.y, shape.size);
    }
  }
}

// Undo the last shape drawn
function undoShape() {
  if (shapes.length > 0) {
    redoStack.push(shapes.pop()); // Move the last shape to the redo stack
    redrawShapes(); // Redraw shapes without clearing the background
  }
}

// Redo the shape that was undone
function redoShape() {
  if (redoStack.length > 0) {
    shapes.push(redoStack.pop()); // Move the shape from the redo stack back to shapes
    redrawShapes(); // Redraw shapes without clearing the background
  }
}

// Function to redraw all shapes without clearing the background
function redrawShapes() {
  for (let shape of shapes) {
    if (shape.type === 'square') {
      fill(0, 0, 225); // Blue square
      rect(shape.x, shape.y, shape.size, shape.size);
    } else if (shape.type === 'circle') {
      fill(255, 229, 204); // Peach-colored circle
      ellipse(shape.x, shape.y, shape.size);
    } else if (shape.type === 'pacman') {
      fill(255, 255, 51); // Yellow Pac-Man
      arc(shape.x, shape.y, shape.size, shape.size, 0.2 * PI, 1.8 * PI);
    } else if (shape.type === 'ghost') {
      // Draw the selected ghost image
      image(shape.image, shape.x, shape.y, shape.size, shape.size);
    } else if (shape.type === 'eraser') {
      // Draw a black circle to simulate erasing
      fill(0); // Black color
      ellipse(shape.x, shape.y, shape.size);
    }
  }
}