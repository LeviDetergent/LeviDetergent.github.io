function setup() {
  createCanvas(600, 600);
  background(211, 201, 192);
}

function draw() {
  noStroke();
  
  //hair
  push();
  fill(0);
  rectMode(CENTER);
  rect(300, 310, 320, 80, 100);
  pop();
  
  fill(41);
  ellipse(300, 600, 220, 600); //body
  ellipse(320, 600, 280, 600); //arm left
  ellipse(280, 600, 280, 600); //arm right
  
  //arms outline
  push();
  translate(320, 530);
  rotate(220);
  stroke(2);
  arc(0, 0, 250, 600, 90, PI);
  pop();
  
  //mirrored
  push();
  translate(283, 530);
  rotate(-220);
  scale(-1,1);
  stroke(2);
  arc(0, 0, 250, 600, 90, PI);
  pop();
  
  //hood
  push();
  translate(365, 420);
  rotate(170);
  stroke(2);
  arc(0, 0, 447, 180, 90, PI);
  pop();
  
  //mirrored for the right side
  push();
  translate(235, 420);
  rotate(-170);
  scale(-1, 1);
  stroke(2);
  arc(0, 0, 447, 182, 90, PI);
  pop();
  
  //graphic
  //head & body
  fill(213, 228, 240);
  rect(310, 550, 20, 60);
  rect(310, 580, 60, 10);
  rect(280, 580, 60, 10);
   
  //chainsaw
  fill(260);
  circle(345, 580, 8);
  circle(352, 580, 8);
  circle(359, 580, 8);
  circle(366, 580, 8);
  circle(370, 584, 8);
  circle(366, 589, 8);
  circle(359, 589, 8);
  circle(352, 589, 8);
  circle(345, 589, 8);
  circle(296, 580, 8);
  circle(289, 580, 8);
  circle(282, 580, 8);
  circle(275, 580, 8);
  circle(270, 585, 8);
  circle(275, 589, 8);
  circle(282, 589, 8);
  circle(289, 589, 8);
  circle(296, 589, 8);
  
  //arms
  fill(254, 227, 212);
  rect(340, 580, 30, 10);
  rect(270, 580, 30, 10);
  
  //the chainsaw details
  fill(255, 98, 8);
  ellipse(320, 550, 40, 50);
  fill(41);
  rect(300, 530, 1, 20);
  rect(302, 530, 1, 20);
  rect(304, 530, 1, 20);
  rect(306, 530, 1, 20);
  rect(308, 530, 1, 20);
  
  rect(300, 553, 1, 20);
  rect(302, 553, 1, 20);
  rect(304, 553, 1, 20);
  rect(306, 553, 1, 20);
  rect(308, 553, 1, 20);
 
  //chainsaw eye
  fill(255, 49, 13);
  push(); // create a new drawing state
  translate(320, 540); // move to the center of the right eye
  rotate(-250); // rotate by 250 degrees
  ellipse(0, 0, 7, 11); // draw the left eye
  pop(); // restore the previous drawing state
  
  fill(0);
  rect(313, 575, 3, 20);
  
  fill(138, 20, 0);
  rect(425, 530, 20, 70);
  
  noStroke();
  fill(253, 217, 181);
  ellipse(300, 300, 300); //face
  stroke(2);
  arc(300, 395, 50, 20, -270, PI); //smile
  noStroke();
  fill(255);
  angleMode(DEGREES);

  //eye
  push(); // create a new drawing state
  translate(258, 320); // move to the center of the left eye
  rotate(30); // rotate by 30 degrees
  ellipse(0, 0, 80, 95); // draw the left eye
  pop(); // restore the previous drawing state
  fill(0);
  circle(280, 320, 8); //pupil

  fill(255);
  push(); // create another new drawing state
  translate(342, 320); // move to the center of the right eye
  rotate(330); // rotate by 330 degrees
  ellipse(0, 0, 80, 95); // draw the right eye
  pop(); // restore the previous drawing state
  fill(0);
  circle(320, 320, 8); //pupil
  
  //hair front
  push();
  translate(150.1, 290);
  rotate(90);
  arc(0, 0, 80, 90, 180, 3 * HALF_PI);
  pop();
  
  //mirrored
  push();
  translate(450, 290);
  rotate(-90);
  scale(-1, 1);
  arc(0, 0, 80, 90, 180, 3 * HALF_PI);
  pop();
  
  //beanie
  fill(249);
  arc(300, 275, 298, 300, 180, PI);
  rect(145, 243, 308, 40);
  
  //alien on the beanie
  stroke(0);
  fill(57, 255, 20);
  ellipse(300, 263, 25, 32);
  
  //eyeballs
  //left
  fill(0);
  push(); // create a new drawing state
  translate(295, 260); // move to the center of the left eye
  rotate(110); // rotate by 110 degrees
  ellipse(0, 0, 3, 7); // draw the left eye
  pop(); // restore the previous drawing state
  
  //right
  fill(0);
  push(); // create a new drawing state
  translate(306, 260); // move to the center of the right eye
  rotate(250); // rotate by 250 degrees
  ellipse(0, 0, 3, 7); // draw the left eye
  pop(); // restore the previous drawing state
  image();
}
