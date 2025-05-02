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
    fill(0);  // Black hat
    stroke(0);
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
    this.bx = random(width); // Set random x position within canvas width
    this.by = random(height); // Set random y position within canvas height  }
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
