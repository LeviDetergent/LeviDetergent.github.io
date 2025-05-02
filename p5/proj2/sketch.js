let recMode = false;

let can;  // create a canvas reference

let xspacing = 6; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 3500; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave
let numWaves = 10;
let maxWaves = 210;
let num = 0;

let scount = 20;
let fcount = 15;
let face = new Array(scount);
let sussy = new Array(scount);
let sussy2 = new Array(scount);
let solosussy, solosussy2;
let soloface;

let img;
let img2;

let yoff = 0.0; // 2nd dimension of perlin noise

let phaseOffsets = []; // Array to store phase offsets for each wave

function preload() {
  img = loadImage('assets/bigSus.png');
  img2 = loadImage('assets/bigFace.png');
}

function setup() {
    can = createCanvas(1920, 1080);
    frameRate(8); // slow down the framerate so everything can be drawn. no hurry.
    noLoop();
    noFill();

    w = width + 16;
    dx = (TWO_PI / period) * xspacing;
    yvalues = new Array(floor(w / xspacing));

    solosussy = new dnAmogus(random(width), random(height), 120, 80, random(-2, 2), random(-2, 2), 0);
    solosussy2 = new dnAmogus(random(width), random(height), 120, 80, random(-2, 2), random(-2, 2), 0);
    soloface = new rbFace(color(0,100,255,120), random(500),random(500),random(-2,2),random(-2,2),random( 5),0,0);
    for (let i = 0; i < scount / 2; i++){
        face[i] = new rbFace(color(0,random(100),random(255),120), random(500),random(500),random(-2,2),random(-2,2),random( 5),0,0);
    }
    for (let i = 0; i < fcount; i++){
        sussy[i] = new dnAmogus(random(width), random(height), 120, 80, random(-2, 2), random(-2, 2), 0);
        sussy2[i] = new dnAmogus(random(width), random(height), 120, 80, random(-2, 2), random(-2, 2), 0);
    }

    for (let i = 0; i < numWaves; i++) {
      phaseOffsets[i] = random(TWO_PI); // Random phase offsets for each wave
  }
}

function draw() {

    
    // Increment numWaves by 10 each frame, but limit it to maxWaves
    if (numWaves < maxWaves) {
      numWaves += 3 * (deltaTime / 1000); // Increment based on frame time
    }
    
    push();
    // start as true until 99
    if (frameCount < 150) {
        console.log("the first act");
        background(0);
        calcWave();
        renderWaves();
        
    // true between 100 and 199
    } else if (frameCount < 300) {
        console.log("the second act");
        background(0);
        calcWave();
        renderWaves();
        
    // true once it reaches frame 300
    } else if (frameCount < 450) {
        console.log("the third act");
        background(0);
        calcWave();
        renderWaves();
    } else if (frameCount < 600) {
        console.log("the fourth act");
        background(0);
        solosuss();
    } else if (frameCount < 750) {
      console.log("the fifth act");
      background(0);
      solosuss();
      solface();
    } else if (frameCount < 900) {
      console.log("the sixth act");
      background(img);
    } else if (frameCount < 1050) {
      console.log("the seventh act");
      background(img2);
    } else {
        console.log("the final act");
        background(0);
        noiseWaves();
        impasta();
        facegroup();
        facetwitch();
        suss();
        dancing();
    }
    
    num++;
    pop();
    recordit();
}

/////////////////////// use both keyPressed and recordit ///////////

function keyPressed() {

    if (keyIsPressed === true) {
        let k = key;
        console.log("k is " + k);

        if (k == 's' || k == 'S') {
            console.log("Stopped Recording");
            recMode = false;
            noLoop();
        }

        if (k == ' ') {
            console.log("Start Recording");
            recMode = true;
            loop();
        }
    }
}

function recordit() {  // new version
    if (recMode == true) {
        let ext = nf(frameCount, 4);
        saveCanvas(can, 'frame-' + ext, 'jpg');
        console.log("rec " + ext);
    }
}


///PASTA///
///////
function dancing() {
  let newWidth = random(60, 150); // Set random width
    let newHeight = random(40, 120); // Set random height
    // Make the AMOGUS characters float on key press
    for (let i = 0; i < fcount; i++) {
      sussy[i].setSize(newWidth, newHeight);    // Update size for sussy
      sussy2[i].setSize(newWidth, newHeight);   // Update size for sussy2
    }
}
function solosuss() {
  push();
    let color1 = { r: random(255), g: random(255), b: random(255) };
    let white = { r: 255, g: 255, b: 255 };
    let red = { r: 255, g: 0, b: 0 };
    let yellow = { r: 255, g: 255, b: 0 };

    let xPos = 100; // Initial x-position
    let yPos = 100; // Initial y-position
    let scaleSize = 0.9; // Scale factor
    let boundary = { xMin: 100, xMax: 900, yMin: 100, yMax: 500 }; // Define boundaries

    // Boundary check
    if (xPos < boundary.xMin) xPos = boundary.xMin;
    if (xPos > boundary.xMax) xPos = boundary.xMax;
    if (yPos < boundary.yMin) yPos = boundary.yMin;
    if (yPos > boundary.yMax) yPos = boundary.yMax;

    translate(xPos, yPos);
    scale(scaleSize);

    solosussy2.drawSussy(yellow);
    //solosussy.drawSussy2(red);
  pop();
}

function solface() {
  push();
    translate(100, 200);
    scale(.9);
    soloface.display();
  pop();
}

function impasta() {
    push();
    let color1 = { r: random(255), g: random(255), b: random(255) };
    let white = { r: 255, g: 255, b: 255 };
    let red = { r: 255, g: 0, b: 0 };
    let yellow = { r: 255, g: 255, b: 0 };
    translate(500, 500);
    scale(0.9);
    for (let i = 0; i < fcount; i++) {
        sussy[i].drawSussy(yellow);
        sussy2[i].drawSussy2(red)
    }
    pop();
}

function facegroup() {
    push();
    translate(100, 200);
    scale(.9);
    for (let i = 0; i < scount / 2; i++) {
        face[i].display();
    }
}

function facetwitch() {
    for (let i = 0; i < scount / 2; i++) {
        face[i].twitch();
        face[i].jump();
    }
}

function suss() {
    for (let i = 0; i < fcount; i++) {
        sussy[i].sus();
        sussy[i].wee();
        sussy2[i].sus();
        sussy2[i].wee();
    }
}

function noiseWaves() {
  for (let waveIndex = 0; waveIndex < numWaves; waveIndex++) {
    // Dynamic color change based on the yoff value for interesting effects
    strokeWeight(2);
    stroke(50 + sin(yoff * 0.5 + waveIndex) * 200, 
           100 + cos(yoff * 0.3 + waveIndex) * 150, 
           200 + sin(yoff * 0.4 + waveIndex) * 55, 
           200);  // Semi-transparent stroke

    beginShape();
    let xoff = 0;

    // Iterate over horizontal pixels
    for (let x = 0; x <= width; x += 10) {
      // Create a more dynamic, wave-like y value using noise and varying parameters
      let frequency = map(sin(yoff * 0.1 + phaseOffsets[waveIndex]), -1, 1, 0.05, 0.15); // Dynamic frequency
      let amplitude = map(cos(yoff * 0.1 + phaseOffsets[waveIndex]), -1, 1, 30, 150); // Dynamic amplitude
      let y = map(noise(xoff, yoff), 0, 1, height / 2 - amplitude, height / 2 + amplitude);

      // Introduce some variation to create multiple waveforms
      y += sin(xoff * 0.2 + yoff + phaseOffsets[waveIndex]) * amplitude * 0.5; // Adding a secondary wave effect

      vertex(x, y);  // Set the vertex
      xoff += frequency;   // Increase x dimension based on dynamic frequency
    }

    endShape();
  }

  // Increment y dimension for a faster wave change
  yoff += 0.05; // Change this value for faster/slower evolution
}

function calcWave() {
  theta += 0.02; // Slower increment for smooth animation
  
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    let noiseOffset = noise(i * 0.1, theta * 0.1) * 20;
    yvalues[i] = (sin(x) + cos(x * 0.3) * 0.5) * amplitude + noiseOffset; // Combo of sin, cos, and noise for organic shape
    x += .002; // Smaller increments create tighter wave
  }
}

function renderWaves() {
  noStroke();
  
  // Layering waves at different angles
  for (let layer = 0; layer < numWaves; layer++) {
    push();
    translate(width / 2, height / 2); // Center the waves
    
    let angle = TWO_PI / numWaves * layer; // Calculate angle for each layer
    rotate(angle); // Rotate each wave

    let offset = layer * 5; // Slight offset for each wave
    let alpha = map(layer, 0, numWaves, 255, 0); // Gradually reduce alpha
    fill(255, alpha); // Use alpha for fade effect
    
    // Draw the wave as a continuous line
    beginShape(); // Start drawing a shape
    for (let x = 0; x < yvalues.length; x++) {
      let xpos = x * xspacing - w / 2;
      let ypos = yvalues[x] + offset; // Apply offset to create layered effect
      vertex(xpos, ypos); // Add vertices to create the wave shape
    }
    endShape(); // Complete the shape

    pop();
  }
}

  /// CLASS ///
  class dnAmogus {
    constructor(bx, by, bw, bh, moveX, moveY, ra) {
      this.bx = bx;      // Body X position
      this.by = by;      // Body Y position
      this.bw = bw;      // Body width
      this.bh = bh;      // Body height
      this.lw = bw / 3;  // Leg width (calculated as one-third of body width)
      this.lh = bh / 2;  // Leg height (calculated as half of body height)
      this.moveX = moveX;  // Horizontal movement speed
      this.moveY = moveY;  // Vertical movement speed
      this.ra = ra;      // Rotation angle
    }
  
    // Update the position with wraparound behavior
    update() {
      this.bx += this.moveX;
      this.by += this.moveY;
  
      // Bounce off edges
      if (this.bx > width || this.bx < 0) this.moveX *= -1;
      if (this.by > height || this.by < 0) this.moveY *= -1;
    }
    
    setColor(newColor) {
      this.color = newColor;
    }
    
    setSize(newWidth, newHeight) {
      this.bw = newWidth;
      this.bh = newHeight;
      this.lw = newWidth / 3;  // Adjust leg width based on body width
      this.lh = newHeight / 2; // Adjust leg height based on body height
    }
  
    // Function to draw the AMOGUS
    drawSussy(color) {
      // Calculate positions relative to the body
      let hx = this.bx + this.bw / 2;    // Head X position relative to body
      let lsx = this.bx + this.bw - this.lw;  // Right leg position relative to body
      let ly = this.by + this.bh;        // Leg Y position relative to body
      noStroke();
      this.drawBody(this.bx, this.by, this.bw, this.bh, color);
      this.drawHead(hx, this.by, this.bw, this.bh + 60, color);  // Head
      this.drawLegs(this.bx, ly - 2, this.lw, this.lh, lsx, color);  // Legs
      this.drawBackpack(this.bx + this.bw / 1.5, this.by + 20, 40, 80, color); // Backpack
      this.drawFace(hx, this.by + 20, 75, 50); // Face
    }
  
    // Function for drawing AMOGUS with a hat
    drawSussy2(color) {
      let hx = this.bx + this.bw / 2;  // Head X position
      let lsx = this.bx + this.bw - this.lw;  // Right leg position
      let ly = this.by + this.bh;  // Leg Y position
      noStroke();
      this.drawBody(this.bx, this.by, this.bw, this.bh, color);
      this.drawHead(hx, this.by, this.bw, this.bh + 60, color);
      this.drawLegs(this.bx, ly - 2, this.lw, this.lh, lsx, color);
      this.drawBackpack(this.bx + this.bw / 1.5, this.by + 20, 40, 80, color);
      this.drawFace(hx, this.by + 20, 75, 50);
      this.drawHat(hx - 5, this.by - 110, 70, 50);  // Draw a hat
    }
  
    // Function for drawing the body
    drawBody(x, y, w, h, color) {
      fill(color.r, color.g, color.b);
      noStroke();
      //stroke(color.r, color.g, color.b);
      rect(x, y, w, h);
    }
  
    // Function for drawing the head
    drawHead(x, y, w, h, color) {
      fill(color.r, color.g, color.b);
      noStroke();
      //stroke(color.r, color.g, color.b);
      arc(x, y, w, h, 600, 360);
    }
  
    // Function for drawing the legs
    drawLegs(x1, y, w, h, x2, color) {
      fill(color.r, color.g, color.b);
      noStroke();
      //stroke(color.r, color.g, color.b);
      rect(x1, y, w, h);  
      rect(x2, y, w, h);  
    }
  
    // Function for drawing the backpack
    drawBackpack(x, y, w, h, color) {
      fill(color.r, color.g, color.b);
      noStroke();
      //stroke(color.r, color.g, color.b);
      ellipse(x + 35, y - 5, w + 40, h + 15);
    }
  
    // Function for drawing the face
    drawFace(x, y, w, h) {
      fill(250);
      stroke(0);
      ellipse(x - 30, y - 20, w, h);
    }
  
    //Function for drawing the hat
    drawHat(x, y, w, h) {
      fill(50);  // Black hat
      stroke(50);
      rect(x - w / 2, y, w, h);  // Draw the hat as a rectangle
      rect(x - w / 1.5, y + h, w * 1.5, h / 3);  // Hat brim
    }
  
    // Function for moving on click
    // Function for moving and scaling on click
    sus() {
      this.bx += random(-10, 10); // Apply some random movement to x position
      this.by += random(-10, 10); // Apply some random movement to y position
    
      // If the character goes out of bounds, reverse the direction
      if (this.bx < 0 || this.bx > width) {
        this.bx = constrain(this.bx, 0, width);  // Keep within bounds
      }
      if (this.by < 0 || this.by > height) {
        this.by = constrain(this.by, 0, height);  // Keep within bounds
      }
    }
  
    wee() {
      this.bx += this.moveX;
        this.by += this.moveY;
  
        if (this.bx < 0 || this.bx > width) {
            this.moveX = -this.moveX;
           }
  
           if (this.by < 0 || this.by > height) {
            this.moveY = -this.moveY;
           } 
      }
  }
  
  //COLLAB
  class rbFace {
    // class vars
    wiggle;
    lox;
    loy;
    spx;
    spy;
    k;
    rot;
    
    constructor(k,lx,ly,spx,spy,w,ohh,rot) {
     this.k = k;
     this.lox = lx;
     this.loy = ly;
     this.spx = spx;
     this.spy = spy;
     this.wiggle = w;
  
    }
    
    display() {
       fill(255);
       this.awesomeface2(this.k, this.lox,this.loy );
    }
  
    awesomeface2(k,lx,ly) {
      push();
      fill(k);
      stroke(20);
      ellipse(lx, ly, 90, 90); //anchor
      this.happyeye(color(255),lx+-25, ly, 250, 200, PI, CHORD);
      this.happyeye(color(255),lx+10, ly, 250, 200, PI*2 ,CHORD);
      this.eye(color(200),color(20),lx+ 15,ly + -9);
      this.eye(color(200),color(20),lx+ -20,ly + -9);
      this.happyMouth(color(153, 0, 102),lx+-4, ly+13, 60, 70, 0, PI, CHORD);
      this.mouth(color(255, 71, 194),lx,ly+20,300,300);
      this.hat(color(250,200,0), lx+0, ly+-10);
      pop();
    }
  
    eye(k,k2,lx,ly) { //pupils for awesomeface2
      fill(20);
      ellipse(lx,ly,8,6);
    }
      
    happyeye(k,lx,ly){ //white for awesomeface2
        fill(255);
        stroke(20);
        arc(lx, ly, 20.8, 32, PI, PI*2 ,CHORD);
      }
      
      happyMouth(k,lx,ly){ //mouth for awesomeface2
        fill(k);
        arc(lx, ly, 60, this.wiggle, 0, PI, CHORD);
      }
      
    mouth(k,lx,ly) { //bubble
        fill(k);
        ellipse(lx+0,ly+10, this.wiggle,this.wiggle);
      }
  
      hat(k,lx,ly,h){
        translate(lx,ly);
        scale(h);
    
        fill (k);
          ellipse (0+ 0,0+ -50,30,40); //hat top
        ellipse(0+ 0,0+ -35,70,20); //hat
      }
  
  
      twitch() {
        this.wiggle = random(-100,100);
      }
  
      jump() {
        this.lox += this.spx;
        this.loy += this.spy;
  
        if (this.lox < 0 || this.lox > width) {
            this.spx = -this.spx;
           }
  
           if (this.loy < 0 || this.loy > height) {
            this.spy = -this.spy;
           } 
      }
  }
  