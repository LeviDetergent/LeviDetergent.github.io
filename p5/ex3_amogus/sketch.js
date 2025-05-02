let bx = 150;     //body x
let by = 200;     //body y
let bw = 120;     //body width
let bh = 80;      //body height
let lw = bw / 3;  //leg width
let lh = bh / 2;  //leg height

let moveX = 2;    // Movement speed for wraparound
let moveY = 2;  
let ra = 0;       //rotation angle


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);

  // Wraparound behavior for the AMOGUS' position
  bx += moveX;
  by += moveY;
  
  // Bounce off edges
  if (bx > width || bx < 0) moveX *= -1;
  if (by > height || by < 0) moveY *= -1;
  
  // Generate random colors for each AMOGUS
  let color1 = { r: random(255), g: random(255), b: random(255) }; // Color for the first creature
  let color2 = { r: 255, g: 255, b: 255 }; // Color for the second creature
  let color3 = { r: 0, g: 100, b: 255 }; // Color for the first creature


  // // Second AMOGUS (Transformed)
  push();  // Start transformation for second AMOGUS
  translate(width/4, height/4);  // Move it
  rotate(ra);  // Rotate it
  scale(0.5);  // Scale it down
  drawSussy(bx, by, bw, bh, color1);
  pop();   // End transformation

  // // Third
   push();
   translate(width/2, height/2);
   rotate(ra/4);
   scale(0.3);
   drawSussy(bx, by, bw, bh, color3);
   pop();

  // First AMOGUS
  push();  // Start transformation for the first AMOGUS
  drawSussy2(bx, by, bw, bh, color2);
  pop();   // End transformation
  ra += 0.01;
}

// Parent function for drawing the AMOGUS
function drawSussy(bx, by, bw, bh, color) {
  // Calculate positions relative to the body
  let hx = bx + bw / 2;  // Head X position relative to body
  let lsx = bx + bw - lw;  // Right leg position relative to body
  let ly = by + bh;  // Leg Y position relative to body
  
  drawBody(bx, by, bw, bh, color);
  drawHead(hx, by, bw, bh + 60, color);  // Pass color to head
  drawLegs(bx, ly, lw, lh, lsx, color); // Pass color to legs
  drawBackpack(bx + bw / 1.5, by + 20, 40, 80, color);  // Pass color to backpack
  drawFace(hx, by + 20, 75, 50);  // Adjust face relative to head
}

function drawSussy2(bx, by, bw, bh, color) {
  // Calculate positions relative to the body
  let hx = bx + bw / 2;  // Head X position relative to body
  let lsx = bx + bw - lw;  // Right leg position relative to body
  let ly = by + bh;  // Leg Y position relative to body
  
  drawBody(bx, by, bw, bh, color);
  drawHead(hx, by, bw, bh + 60, color);  // Pass color to head
  drawLegs(bx, ly, lw, lh, lsx, color); // Pass color to legs
  drawBackpack(bx + bw / 1.5, by + 20, 40, 80, color);  // Pass color to backpack
  drawFace(hx, by + 20, 75, 50);  // Adjust face relative to head
  drawHat(hx - 5, by - 110, 70, 50);  // Draw a hat above the head
}

// Child function for drawing the body
function drawBody(x, y, w, h, color) {
  fill(color.r, color.g, color.b);
  stroke(color.r, color.g, color.b);
  rect(x, y, w, h);
}

// Child function for drawing the head
function drawHead(x, y, w, h, color) {
  fill(color.r, color.g, color.b);
  stroke(color.r, color.g, color.b);
  arc(x, y, w, h, 600, 360);
}

// Child function for drawing the legs
function drawLegs(x1, y, w, h, x2, color) {
  fill(color.r, color.g, color.b);
  stroke(color.r, color.g, color.b);
  rect(x1, y, w, h);  
  rect(x2, y, w, h);  
}

// Child function for drawing the backpack
function drawBackpack(x, y, w, h, color) {
  fill(color.r, color.g, color.b);
  stroke(color.r, color.g, color.b);
  ellipse(x + 35, y - 5, w + 40, h + 15);
}

// Child function for drawing the face
function drawFace(x, y, w, h) {
  fill(250);
  stroke(0);
  ellipse(x - 30, y - 20, w, h);
}

// Child function for drawing the hat
function drawHat(x, y, w, h) {
  fill(0);  // Black hat
  stroke(0);
  rect(x - w / 2, y, w, h);  // Draw the hat as a rectangle
  rect(x - w / 1.5, y + h, w * 1.5, h / 3);  // Hat brim
}