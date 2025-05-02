  let count = 15;
  let sussy = new Array(count);
  let sussy2 = new Array(count);
  let face = new Array(count);
  let stars = [];

  function setup() {
    createCanvas(1000, 1000);
    
    // Instantiate the 'dnAmogus' class for sussy and sussy2 arrays
    for (let i = 0; i < count; i++) {
      // bx, by, bw, bh, moveX, moveY, ra
      sussy[i] = new dnAmogus(random(width), random(height), 120, 80, 2, 2, 0);
      sussy2[i] = new dnAmogus(random(width), random(height), 120, 80, 2, 2, 0);
      // k,lx,ly,spx,spy,w,ohh,rot
      face[i] = new rbFace(color(random(255), random(255), random(255)), random(width), random(height), 2, 2, 5, 0, 0);
    }

    // Create stars for animated background
    for (let i = 0; i < 100; i++) {
      stars.push({x: random(width), y: random(height)});
    }
  }

  function draw() {
    background(30, 30, 50);
    drawStars();
    
    let color1 = { r: random(255), g: random(255), b: random(255) };
    let color2 = { r: random(255), g: random(255), b: random(255) };
    let red = { r: 220, g: 0, b: 0 };

    // push();
    // impasta();
    // facegroup();
    // facetwitch();
    // suss();
    // pop();
    // // Display the AMOGUS from the sussy array
    for (let i = 0; i < count; i++) {
      sussy[i].drawSussy(red);  // Draw normal AMOGUS
      sussy2[i].drawSussy2(255);  // Draw AMOGUS with hat
      face[i].display();
    }
  }

  ///function for push pop///
  function impasta() {
    push();
    let color1 = { r: random(255), g: random(255), b: random(255) };
    let white = { r: 255, g: 255, b: 255 };
    let red = { r: 255, g: 0, b: 0 };
    translate(500, 500);
    scale(0.9);
    for (let i = 0; i < count; i++) {
        sussy[i].drawSussy(white);
        sussy2[i].drawSussy2(red)
    }
    pop();
  }

  function facegroup() {
    push();
    translate(100, 200);
    scale(.9);
    for (let i = 0; i < count / 2; i++) {
        face[i].display();
    }
  }

  function facetwitch() {
    for (let i = 0; i < count / 2; i++) {
        face[i].twitch();
        face[i].jump();
    }
  }

  function suss() {
    for (let i = 0; i < count; i++) {
        sussy[i].sus();
        //sussy[i].wee();
        sussy2[i].sus();
        //sussy2[i].wee();
    }
  }


  // Draw animated stars in the background
  function drawStars() {
    fill(255, 255, 255, 150);
    noStroke();
    for (let i = 0; i < stars.length; i++) {
      ellipse(stars[i].x, stars[i].y, 8, 8);
      stars[i].y += 3; // Stars move down slowly
      if (stars[i].y > height) stars[i].y = 0;
    }
  }

  function mousePressed() {
    // Make the AMOGUS characters float on mouse press
    for (let i = 0; i < count; i++) {
      sussy[i].wee();
      sussy2[i].wee();
    }
  }

  function keyPressed() {
    let newWidth = random(60, 150); // Set random width
    let newHeight = random(40, 120); // Set random height
    // Make the AMOGUS characters float on key press
    for (let i = 0; i < count; i++) {
      sussy[i].setSize(newWidth, newHeight);    // Update size for sussy
      sussy2[i].setSize(newWidth, newHeight);   // Update size for sussy2
      sussy[i].sus();
      sussy2[i].sus();
      face[i].jump();
      face[i].twitch();
    }
  }

