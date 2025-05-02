let shapes = [];        // Array to store properties of each shape (ellipse, line, arc)
const numRows = 15;     // Number of rows for more shapes
const numCols = 15;     // Number of columns for more shapes

function setup() {
    createCanvas(windowWidth, windowHeight); // Create canvas with window dimensions
    noStroke();  // Disable outline for shapes

    // Create shapes (ellipses, lines, arcs) with random colors, use map() to calculate the position
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            let x = map(i, 0, numRows, 0, width);  // Map the row index i to the x-coordinate
            let y = map(j, 0, numCols, 0, height); // Map the column index j to the y-coordinate
            let radius = random(10, 50);           // Random radius for each ellipse or arc
            let shapeColor = color(random(255), random(255), random(255));  // Random color
            let speed = random(2, 5);              // Random speed for falling
            let shapeType = random(['ellipse', 'line', 'arc']); // Randomly choose a shape type
            let rotation = 0;                      // Initial rotation angle
            let rotationSpeed = random(0.01, 0.05); // Random speed for rotation

            shapes.push({ x, y, radius, shapeColor, speed, shapeType, rotation, rotationSpeed }); //Push the vars into the array
        }
    }
}

function draw() {
    background(0, 50);  // Dark background with transparency for a trailing effect
    ellipse(mouseX, mouseY, 30);  // Add an ellipse that follows the mouse

    // Draw and update each shape
    for (let i = 0; i < shapes.length; i++) {
        let s = shapes[i];

        fill(s.shapeColor);

        // Isolate transformations for each shape
        push();
        translate(s.x, s.y);         // Move origin to shape position
        rotate(s.rotation);          // Rotate the shape by its current angle

        // Determine which shape to draw (ellipse, line, or arc)
        if (s.shapeType === 'ellipse') {
            ellipse(0, 0, s.radius * 2);  // Draw ellipse at new origin
        } else if (s.shapeType === 'line') {
            stroke(s.shapeColor);         // Add stroke for lines
            line(-s.radius, -s.radius, s.radius, s.radius);  // Draw a line from -radius(top-left) to +radius(bottom right)
            noStroke();  // Disable stroke again for other shapes
        } else if (s.shapeType === 'arc') {
            arc(0, 0, s.radius * 2, s.radius * 2, 0, PI + QUARTER_PI);  // Draw arc
        }
        
// Log shape properties: position, type, and rotation
        console.log("Shape Type: ", s.shapeType, " Position: (", s.x, ",", s.y, ") Rotation: ", s.rotation);


        pop();  // Restore previous transformation state

        s.y += s.speed;             // Move shape down
        s.rotation += s.rotationSpeed;  // Increment the rotation

        // Reset position if shape falls off screen
        if (s.y > height) {
            s.y = 0;
            s.x = random(width);    // Randomize horizontal position
            s.radius = random(10, 50);  // Randomize radius
            s.shapeColor = color(random(255), random(255), random(255));  // Randomize color
            s.shapeType = random(['ellipse', 'line', 'arc']);  // Randomize shape type again
            s.rotation = 0;         // Reset rotation
            s.rotationSpeed = random(0.01, 0.05);  // Randomize rotation speed again

// Log when a shape resets after falling off screen
            console.log("Shape reset: ", s.shapeType, " New X: ", s.x, " New Y: ", s.y);
        }
    }
}