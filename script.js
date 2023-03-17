window.onclick = function () {
  c = document.getElementById("myCanvas");
  cvs = c.getContext("2d");
  bd = 3;
  bx = 11;
  by = 11;
  xVel = 1.5;
  yVel = 1.5;
  document.addEventListener("mousemove", move);
  setInterval(update, 1);
  document.getElementById('thing');
}

function move(e) {
  a = e.movementX;
  b = e.movementY;
  if (Math.abs(a) > Math.abs(b)) {
    moveX(e);
  }
  else {
    moveY(e);
  }
}

function moveY(e) {
  a = e.movementY;
  b = e.movementY;
  if (b + a > 0) {
    by += yVel;
  }
  else {
    by -= yVel;
  }
}

function moveX(e) {
  a = e.movementX;
  b = e.movementX;
  if (b + a > 0) {
    bx += xVel;
  }
  else {
    bx -= xVel;
  }
}

function play() {
  var w = Math.floor(Math.random()*3)+1;
  var p = document.getElementById('thing');
  if(w==1){
    document.getElementById("thing").src="BREH.mp3"
    p.play();
  }
  else if(w==2){
    document.getElementById("thing").src="KEKW.mp3"
    p.play();
  }
  else{
    document.getElementById("thing").src="LOL.mp3"
    p.play();
  }
}

function win() {
  if (cvs.isPointInPath(bx, by)) {
    bx = 11;
    by = 11;
    var s = Math.floor(Math.random()*2)+1;
    var p = document.getElementById('thing');
    if(s==1){
      document.getElementById("thing").src="victory.mp3"
      p.play();
    }
    else{
      document.getElementById("thing").src="victory 2.mp3"
      p.play();
    }
  }
}

function unitCollision() {
  if (cvs.isPointInPath(bx, by)) {
    bx = 11;
    by = 11;
    play();
  }
}

function update() {
  if (by >= c.height - 10 || by <= 5) {
    bx = 11;
    by = 11;
    play();
  }
  if (bx >= c.width - 10 || bx <= 5) {
    bx = 11;
    by = 11;
    play();
  }

  cvs.fillStyle = "black";
  cvs.fillRect(0,0,c.width,c.height);
  cvs.fillStyle = "red";
  cvs.fillRect(bx, by, bd, bd);

  cvs.beginPath();
  cvs.strokeStyle = "white";
  cvs.rect(5,5,c.width - 10,c.height - 10);
  cvs.stroke();
  
  cvs.beginPath();
  cvs.moveTo(20,5);
  cvs.lineTo(20,50);
  cvs.lineTo(50,50);
  cvs.lineTo(50,20);
  cvs.lineTo(35,20);
  cvs.lineTo(35,40);
  unitCollision();
  cvs.strokeStyle = "white";
  cvs.stroke();

  cvs.beginPath();
  cvs.moveTo(20,65);
  cvs.lineTo(20,80);
  cvs.lineTo(50,80);
  unitCollision();
  cvs.strokeStyle = "white";
  cvs.stroke();

  cvs.moveTo(20,65);
  cvs.lineTo(50,65);
  cvs.lineTo(50,50);
  unitCollision();
  cvs.strokeStyle = "white";
  cvs.stroke();

  cvs.beginPath();
  cvs.moveTo(20,145);
  cvs.lineTo(20,110);
  cvs.lineTo(35,110);
  cvs.lineTo(35,130);
  cvs.lineTo(50,130);
  cvs.lineTo(50,95);
  cvs.lineTo(20,95);
  unitCollision();
  cvs.strokeStyle = "white";
  cvs.stroke();

  cvs.beginPath();
  cvs.moveTo(65,145);
  cvs.lineTo(65,80);
  cvs.lineTo(80,80);
  cvs.lineTo(80,130)
  unitCollision();
  cvs.strokeStyle = "white";
  cvs.stroke();

  cvs.beginPath();
  cvs.moveTo(65,20);
  cvs.lineTo(65,40);
  cvs.lineTo(80,40);
  cvs.lineTo(80,60);
  cvs.lineTo(95,60);
  cvs.lineTo(95,130);
  cvs.lineTo(110,130);
  unitCollision();
  cvs.strokeStyle = "white";
  cvs.stroke();

  cvs.beginPath();
  cvs.moveTo(130,145);
  cvs.lineTo(130,130);
  cvs.lineTo(150,130);
  cvs.lineTo(150,115);
  cvs.lineTo(120,115);
  cvs.lineTo(120,85);
  cvs.lineTo(135,85);
  cvs.lineTo(135,100);
  cvs.lineTo(150,100);
  unitCollision();
  cvs.strokeStyle = "white";
  cvs.stroke();
  
  cvs.beginPath();
  cvs.moveTo(90,5);
  cvs.lineTo(90,25);
  cvs.lineTo(110,25);
  cvs.lineTo(110,50);
  cvs.lineTo(125,50);
  cvs.lineTo(125,75);
  unitCollision();
  cvs.strokeStyle = "white";
  cvs.stroke();

  cvs.beginPath();
  cvs.moveTo(165,145);
  cvs.lineTo(165,75);
  cvs.lineTo(140,75);
  cvs.lineTo(140,35);
  cvs.lineTo(125,35);
  cvs.lineTo(125,15);
  unitCollision();
  cvs.strokeStyle = "white";
  cvs.stroke();

  cvs.beginPath();
  cvs.moveTo(135,5);
  cvs.lineTo(135,25);
  cvs.lineTo(155,25);
  cvs.lineTo(155,65);
  cvs.lineTo(180,65);
  cvs.lineTo(180,80);
  cvs.lineTo(190,80);
  unitCollision();
  cvs.strokeStyle = "white";
  cvs.stroke();

  cvs.beginPath();
  cvs.moveTo(165,125);
  cvs.lineTo(175,125);
  cvs.lineTo(175,135);
  unitCollision();
  cvs.strokeStyle = "white";
  cvs.stroke();
  
  cvs.beginPath();
  cvs.moveTo(185,145);
  cvs.lineTo(185,115);
  cvs.lineTo(200,115);
  cvs.lineTo(200,135);
  unitCollision();
  cvs.strokeStyle = "white";
  cvs.stroke();

  cvs.rect(175,90,15,15);
  unitCollision();
  cvs.strokeStyle = "white";
  cvs.stroke();

  cvs.beginPath();
  cvs.moveTo(210,145);
  cvs.lineTo(210,50);
  cvs.lineTo(185,50);
  cvs.lineTo(185,15);
  unitCollision();
  cvs.strokeStyle = "white";
  cvs.stroke();

  cvs.beginPath();
  cvs.moveTo(205,5);
  cvs.lineTo(205,30);
  cvs.lineTo(220,30);
  cvs.lineTo(220,5);
  unitCollision();
  cvs.strokeStyle = "white";
  cvs.stroke();

  cvs.beginPath();
  cvs.moveTo(210,145);
  cvs.lineTo(210,100);
  cvs.lineTo(225,100);
  cvs.lineTo(225,115);
  cvs.lineTo(240,115);
  cvs.lineTo(240,135);
  unitCollision();
  cvs.strokeStyle = "white";
  cvs.stroke();

  cvs.beginPath();
  cvs.moveTo(295,80);
  cvs.lineTo(265,80);
  cvs.lineTo(265,90);
  cvs.lineTo(250,90);
  cvs.lineTo(250,125);
  cvs.lineTo(275,125);
  cvs.lineTo(275,130);
  unitCollision();
  cvs.strokeStyle = "white"
  cvs.stroke();

  cvs.beginPath();
  cvs.moveTo(265,20);
  cvs.lineTo(265,40);
  cvs.lineTo(280,40);
  cvs.lineTo(280,60);
  unitCollision();
  cvs.strokeStyle = "white"
  cvs.stroke();
  
  cvs.beginPath();
  cvs.moveTo(265,70);
  cvs.lineTo(265,80);
  cvs.lineTo(295,80);
  unitCollision();
  cvs.strokeStyle = "white"
  cvs.stroke();
  
  cvs.beginPath();
  cvs.moveTo(255,20);
  cvs.lineTo(255,40);
  cvs.lineTo(230,40);
  cvs.lineTo(230,70);
  cvs.lineTo(250,70);
  cvs.lineTo(250,50);
  cvs.lineTo(240,50);
  cvs.lineTo(240,60);
  unitCollision();
  cvs.strokeStyle = "white";
  cvs.stroke();

  cvs.beginPath();
  cvs.moveTo(280,5);
  cvs.lineTo(280,25);
  cvs.lineTo(295,25);
  unitCollision();
  cvs.strokeStyle = "white";
  cvs.stroke();

  cvs.beginPath();
  cvs.moveTo(280,145);
  cvs.lineTo(280,130);
  cvs.lineTo(295,130);
  cvs.lineTo(295,145);
  cvs.lineTo(280,145);
  win();
  cvs.strokeStyle = "red";
  cvs.stroke();
  cvs.fillStyle = "red";
  cvs.fill();
}
