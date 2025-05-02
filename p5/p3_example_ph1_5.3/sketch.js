// example 5.2

// This uses the transformation matrix tools to move,
//rotate and scale things as batch operations
  // 11 x 11
let gridarr1 = [
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 2, 4, 4, 2, 4, 4, 4, 4, 2, 4, 4, 2, 4, 4],
    [4, 4, 2, 2, 4, 2, 2, 4, 4, 2, 2, 4, 2, 2, 4, 4],
    [4, 4, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 4, 4],
    [4, 4, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 4, 4],
    [4, 4, 2, 2, 1, 0, 0, 2, 2, 0, 0, 1, 2, 2, 4, 4],
    [4, 4, 4, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 4, 4, 4],
    [4, 4, 4, 4, 2, 2, 3, 0, 0, 3, 2, 2, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
];

let gridarr2 = [
    [1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1],
    [1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1],
    [2, 2, 2, 3, 3, 1, 1, 1, 2, 2, 2, 3, 3, 1, 1, 1],
    [2, 2, 2, 3, 3, 1, 1, 1, 2, 2, 2, 3, 3, 1, 1, 1],
    [4, 4, 0, 0, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 4, 4],
    [4, 4, 0, 0, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 4, 4],
    [3, 3, 5, 5, 2, 2, 2, 2, 1, 1, 2, 2, 5, 5, 3, 3],
    [3, 3, 5, 5, 2, 2, 2, 2, 1, 1, 2, 2, 5, 5, 3, 3],
    [6, 6, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 6, 6],
    [6, 6, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 6, 6],
    [3, 3, 6, 6, 0, 0, 2, 2, 2, 2, 2, 0, 6, 6, 3, 3],
    [3, 3, 6, 6, 0, 0, 2, 2, 2, 2, 2, 0, 6, 6, 3, 3],
    [0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
    [4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4]
];

let gridarr3 = [
        [5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5],
        [5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5],
        [5, 5, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 5, 5],
        [5, 5, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 5, 5],
        [4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4],
        [4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4],
        [4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4],
        [4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4],
        [7, 7, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 7, 7],
        [7, 7, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 7, 7],
        [6, 6, 5, 5, 4, 4, 3, 3, 3, 3, 4, 4, 5, 5, 6, 6],
        [6, 6, 5, 5, 4, 4, 3, 3, 3, 3, 4, 4, 5, 5, 6, 6],
        [4, 4, 4, 4, 5, 5, 6, 6, 6, 6, 5, 5, 4, 4, 4, 4],
        [4, 4, 4, 4, 5, 5, 6, 6, 6, 6, 5, 5, 4, 4, 4, 4],
        [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
]
    // 5 x 5
let textarr = [
    ["blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp","blurp", "blurp", "blurp", "blurp", "blurp", "blurp"],
  ["blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp","blurp", "blurp", "blurp", "blurp", "blurp", "blurp"],
  ["blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp","blurp", "blurp", "blurp", "blurp", "blurp", "blurp"],
  ["blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp","blurp", "blurp", "blurp", "blurp", "blurp", "blurp"],
  ["blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp","blurp", "blurp", "blurp", "blurp", "blurp", "blurp"],
  ["blurp", "blurp", "ah-shah-lot", "blurp", "blurp", "ah-shah-lot", "blurp", "blurp", "blurp", "blurp","blurp", "ah-shah-lot", "blurp", "ah-shah-lot", "blurp", "blurp"],
  ["blurp", "blurp", "ah-shah-lot", "ah-shah-lot", "blurp", "ah-shah-lot", "ah-shah-lot", "blurp", "blurp", "ah-shah-lot","ah-shah-lot", "blurp", "ah-shah-lot", "ah-shah-lot", "blurp", "blurp"],
  ["blurp", "blurp", "blurp", "ah-shah-lot", "murp", "murp", "murp", "murp", "murp", "murp","murp", "murp", "ah-shah-lot", "blurp", "blurp", "blurp"],
  ["blurp", "blurp", "ah-shah-lot", "blurp", "murp", "murp", "murp", "murp", "murp", "murp","murp", "murp", "blurp","ah-shah-lot", "blurp", "blurp"],
  ["blurp", "blurp", "ah-shah-lot", "ah-shah-lot", "meow", "murp", "murp", "ah-shah-lot", "ah-shah-lot", "murp","murp", "meow", "blurp", "ah-shah-lot", "blurp", "blurp"],
  ["blurp", "blurp", "blurp", "ah-shah-lot", "ah-shah-lot", "murp", "murp", "murp", "murp", "murp","murp", "ah-shah-lot", "ah-shah-lot", "blurp", "blurp", "blurp"],
  ["blurp", "blurp", "blurp", "blurp", "ah-shah-lot", "ah-shah-lot", "blop", "murp", "murp", "blop","ah-shah-lot", "ah-shah-lot", "blurp", "blurp", "blurp", "blurp"],
  ["blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp","blurp", "blurp", "blurp", "blurp", "blurp", "blurp"],
  ["blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp","blurp", "blurp", "blurp", "blurp", "blurp", "blurp"],
  ["blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp","blurp", "blurp", "blurp", "blurp", "blurp", "blurp"],
  ["blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp", "blurp","blurp", "blurp", "blurp", "blurp", "blurp", "blurp"]
];

let textarr2 = [
    ["buzz", "buzz", "buzz", "buzz", "buzz","buzz", "buzz", "buzz", "buzz", "buzz","buzz", "buzz", "buzz", "buzz", "buzz","buzz"],
    ["buzz", "buzz", "buzz", "buzz", "buzz","buzz", "buzz", "buzz", "buzz", "buzz","buzz", "buzz", "buzz", "buzz", "buzz","buzz"],
    ["buzz", "buzz", "buzz", "buzz", "buzz","buzz", "buzz", "buzz", "buzz", "buzz","buzz", "buzz", "buzz", "buzz", "buzz","buzz"],
    ["buzz", "buzz", "buzz", "buzz", "buzz","buzz", "buzz", "buzz", "buzz", "buzz","buzz", "buzz", "buzz", "buzz", "buzz","buzz"],
    ["buzz", "buzz", "buzz", "buzz", "buzz","buzz", "buzz", "buzz", "buzz", "buzz","buzz", "buzz", "buzz", "buzz", "buzz","buzz"],
    ["buzz", "buzz", "buzz", "buzz", "buzz","buzz", "buzz", "buzz", "buzz", "buzz","buzz", "buzz", "buzz", "buzz", "buzz","buzz"],
    ["honey", "honey", "meep","buzz","buzz","buzz", "buzz", "buzz", "buzz", "buzz","buzz", "buzz", "buzz", "meep", "honey","honey"],
    ["honey", "honey", "honey", "buzz", "buzz","buzz", "buzz", "buzz", "buzz", "buzz","buzz", "buzz", "buzz", "honey", "honey","honey"],
    ["honey", "honey", "honey", "buzz", "buzz","buzz", "buzz", "buzz", "buzz", "buzz","buzz", "buzz", "buzz", "honey", "honey","honey"],
    ["honey", "honey", "honey", "buzz", "buzz","buzz", "buzz", "buzz", "buzz", "buzz","buzz", "buzz", "buzz", "honey", "honey","honey"],
    ["honey", "honey", "honey", "buzz", "buzz","buzz", "buzz", "buzz", "buzz", "buzz","buzz", "buzz", "buzz", "honey", "honey","honey"],
    ["buzz", "buzz", "buzz", "buzz", "buzz","buzz", "buzz", "buzz", "buzz", "buzz","buzz", "buzz", "buzz", "buzz", "buzz","buzz"],
    ["buzz", "buzz", "buzz", "buzz", "buzz","buzz", "buzz", "buzz", "buzz", "buzz","buzz", "buzz", "buzz", "buzz", "buzz","buzz"],
    ["buzz", "buzz", "buzz", "buzz", "buzz","buzz", "buzz", "buzz", "buzz", "buzz","buzz", "buzz", "buzz", "buzz", "buzz","buzz"],
    ["buzz", "buzz", "buzz", "buzz", "buzz","buzz", "buzz", "buzz", "buzz", "buzz","buzz", "buzz", "buzz", "buzz", "buzz","buzz"]
]

let textarr3 = [
    ["fox", "fox", "fox", "fox", "what", "what", "what", "what", "what", "what","what", "what", "what", "what", "fox", "fox", "fox", "fox"],
    ["fox", "fox", "fox", "fox", "what", "what", "what", "what", "what", "what","what", "what", "what", "what", "fox", "fox", "fox", "fox"],
    ["fox", "fox", "does", "does", "what", "what", "what", "what", "what", "what","what", "what", "what", "what", "does", "does", "fox", "fox"],
    ["fox", "fox","does", "does", "what", "what", "what", "what", "what", "what","what", "what", "what", "what", "does", "does", "fox", "fox"],
    ["what", "what", "what", "what", "what", "what", "what", "what", "what", "what","what", "what", "what", "what", "what", "what", "what", "what"],
    ["what", "what", "what", "what", "what", "what", "what", "what", "what", "what","what", "what", "what", "what", "what", "what", "what", "what"],
    ["what", "what", "what", "what", "what", "what", "what", "what", "what", "what","what", "what", "what", "what", "what", "what", "what", "what"],
    ["what", "what", "what", "what", "what", "what", "what", "what", "what", "what","what", "what", "what", "what", "what", "what", "what", "what"],
    ["what", "what", "what", "what", "what", "what", "what", "what", "what", "what","what", "what", "what", "what", "what", "what", "what", "what"],
    ["what", "what", "what", "what", "what", "what", "what", "what", "what", "what","what", "what", "what", "what", "what", "what", "what", "what"],
    ["sayy", "sayy", "fox", "fox", "what", "what", "what", "what", "what", "what","what", "what", "what", "what", "fox", "fox", "sayy", "sayy"],
    ["sayy", "sayy", "fox", "fox", "what", "what", "what", "what", "what", "what","what", "what", "what", "what", "", "fox", "sayy", "sayy"],
    ["what", "what", "what", "what", "fox", "fox", "sayy", "sayy", "sayy", "sayy","sayy", "sayy", "fox", "fox", "what", "what", "what", "what"],
    ["what", "what", "what", "what", "fox", "fox", "sayy", "sayy", "sayy", "sayy","sayy", "sayy", "fox", "fox", "what", "what", "what", "what"],
    ["fox", "fox", "fox", "fox", "fox", "fox", "fox", "fox", "fox", "fox", "fox", "fox", "fox", "fox", "fox", "fox", "fox", "fox"],
    ["fox", "fox", "fox", "fox", "fox", "fox", "fox", "fox", "fox", "fox", "fox", "fox", "fox", "fox", "fox", "fox", "fox", "fox"]
]

let font1;
let images =[];

let currentPage = 0;

function preload()  {
    font1 = loadFont('assets/oswald.ttf');
    images[0] = loadImage('assets/axo9.gif');
    images[1] = loadImage('assets/axo2.gif');
    images[2] = loadImage('assets/axo3.gif');
    images[3] = loadImage('assets/axo4.gif');
    images[4] = loadImage('assets/axo5.gif');
    images[5] = loadImage('assets/axo6.gif');
    images[6] = loadImage('assets/axo7.gif');
    images[7] = loadImage('assets/axo8.gif');
    images[8] = loadImage('assets/axo.gif');
}

function setup() {
     createCanvas(800, 700);
     background(0, 60, 150);
     fill(100);
     textAlign(LEFT);
     textFont(font1);
      
}

function draw() {
    background(0);

    if (currentPage == 1) {
      //2darr, x,y,rot,scale, alpha
      mapToMonoPixels2(gridarr2, -30, -20, 0, 8, 40);
      mapToMonoPixels(gridarr1, 30, 20, 45, 2, 255);
      mapToMonoPixels3(gridarr1, 580, 20, 20, 1.25, 100);
      //mapToColorPixels(gridarr1, 220, 290, 45, 2.55, 255);
      mapToColorPixels(gridarr1, 460, 260, -45, 2.45, 255);
      mapToColorText3(textarr3, 350, 100, -10, 0.75, 175);
      mapToColorText2(textarr2, 250, 350, 10, 1.25, 255);

      push();
      translate(100,30);
      fill(200);
      textSize(20);
      let t = "This is two copies of one of my numerical gridArray with mono pixels, and two text girdArray from my teammates Emma (Bee) and Elise (Fox)"
      text(t,0,0,300);  // the 4th argument is the textWidth per line.
      pop();
 

    } else if (currentPage == 2) {

     //mapToColorShapes(gridarr2, -30, 0, 10, 9, 8);
     mapToColorText(textarr, -50, 430, -45, .75, 255);
     mapToColorShapes2(gridarr2, 120, 460, 30, 1.45, 255);
     mapToColorShapes3(gridarr3, 450, 300, -25, 1.5, 255);
     //mapToColorText(textarr, 250, 50, -15, 0.45, 175);
     //mapToColorText2(textarr2, 10, 350, 10, 1.55, 255); 

     push();
     translate(40,50);
     fill(200);
     textSize(20);
     let t = "This is two numerical gridArrays from my teammates with shapes along with my own"
     text(t,0,0,300);
     pop();


    } else if (currentPage == 3) {
        mapToTintedBitMaps(gridarr1,images, 50, 350, 0, 2.85,190);
        mapToBitMaps3(gridarr3,images, 100, 100, 3, 1.55, 190);
        mapToTintedBitMaps2(gridarr2,images, 300, 120, -20, 2.85,190);
        push();
        translate(40,50);
        fill(200);
        textSize(20);
        let t = "This is all the numerical gridArrays of my group with gifs";
        t += "\n";   // this is a command you can put in text to create a line break.
        //t += "..and them some.";
        text(t,0,0,400);
        pop();

    } else {

        push();
        translate(80,100);
        fill(200);
        textSize(40);
        text ("My groups memebers were Emma, \nElise, and me",0 ,0, 800 );
        translate(0,120);
        text ("I have 8 mapped images, copied at least twice \nfor a total of 12",0 ,0,800 );
        translate(250,120);
        mapToColorPixels(gridarr1, -130, -50, 0, 3, 255);
        mapToColorText(textarr, -310, -115, 0, 0.75, 175);
        pop();

    }




}


function keyPressed() { 

  
    //console.log(key);
     // or 
    if ( key == '1' ) { 
      console.log("Page 1");
      currentPage = 1;

     } else if ( key == '2' ) { 
        console.log("Page 2");
        currentPage = 2;
        
     } else if ( key == '3' ) { 
        console.log("Page 3");
        currentPage = 3;   
     } else {
        currentPage = 0;

     }
  
    }



// the map functions.
          //2darr, x,y,rot,scale, alpha
function mapToMonoPixels(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            fill(arr[i][j] * 128, fade);
            rect(j * 12, i * 12, 10, 10);
        }
    }
   pop();

}

//PINK         
//x,y,rot,scale, alpha
function mapToColorPixels(arr,lx,ly,rot,sc, fade) {
    push();
    noStroke();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == 0 ) {
                  fill(237, 180, 234, fade);
              } else if ( value == 1 ){
                  fill(32, 3, 110, fade);
              } else if ( value == 2 ) {
                  fill(153, 83, 129, fade);
              } else if ( value == 3 ) {
                 fill(173, 123, 171, fade); 
              } else {
                fill(0, 0);
              }
            rect(j * 8, i * 8, 10, 10);
        }
    }
    pop();

}

function mapToColorShapes(arr,lx,ly,rot,sc, fade) {
    push();
    noStroke();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == 0 ) {
                fill(237, 180, 234, fade);
                ellipse(j * 8, i * 8, 10, 10);
            } else if ( value == 1 ){
                fill(32, 3, 110, fade);
                rect(j * 8-6, i * 8-6, 10, 10,2);
            } else if ( value == 2 ) {
                fill(153, 83, 129, fade);
                ellipse(j * 8, i * 8, 15, 10,5);
            } else if ( value == 3 ) {
               fill(173, 123, 171, fade); 
               ellipse(j * 8, i * 8, 15, 10,5);
            } else {
              fill(0, 0);
              ellipse(j * 8, i * 8, 15, 10,5);
            }
        }
    }
    pop();

}

function mapToColorText(arr,lx,ly,rot,sc,fade) {
    textSize(20);
    textAlign(CENTER);
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == "ah-shah-lot" ) {
                 fill(237, 180, 234, fade);
              } else if ( value == "meow" ){
                 fill(32, 3, 110, fade);
              } else if ( value == "blop" ){
                fill(153, 83, 129, fade);
              } else if ( value == "murp" ){
                fill(173, 123, 171, fade);
              } else {
                fill(0, 0);
              }
               text(value, j * 55, i * 20, 150);
        }
    }
    pop();

}

                            //2darray,images in array ,x,y,rot,scale, alpha
                            function mapToBitMaps(arr,imgarr,lx,ly,rot,sc) {
                                push();
                                translate(lx,ly);
                                rotate(radians(rot));
                                scale(sc);
                                let nuimg;
                                for (var i = 0; i < arr.length; i++) {
                                    for (var j = 0; j < arr[0].length; j++) {
                                         let value = arr[i][j];
                                          if ( value == 0 ) {
                                            nuimg = imgarr[0];
                                          } else if ( value == 1 ){
                                            nuimg = imgarr[7];
                                          } else if ( value == 2 ) {
                                            nuimg = imgarr[1];
                                          } else if ( value == 3 ) {
                                            nuimg = imgarr[3];
                                          } else {
                                            nuimg = imgarr[4];
                                          }
                                        image(nuimg, j * 8, i * 8, 14, 14);
                                    }
                                }
                                pop();
                            
                    }

    //2darray,images in array ,x,y,rot,scale, alpha
    function mapToTintedBitMaps(arr,imgarr,lx,ly,rot,sc,fade) {
        push();
        translate(lx,ly);
        rotate(radians(rot));
        scale(sc);
        let nuimg;
        let c;
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[0].length; j++) {
                    let value = arr[i][j];
                    if ( value == 0 ) {
                    nuimg = imgarr[0];
                    c = color(255,100,0,fade);
                    } else if ( value == 1 ){
                    c = color(255,0,255,fade);
                    nuimg = imgarr[7];
                    } else if ( value == 2 ) {
                    nuimg = imgarr[1];
                    c = color(20,200,120,fade);
                    } else if ( value == 3) {
                    nuimg = imgarr[3];
                    c = color(120,0,240,fade);
                    } else {
                      nuimg = imgarr[4];
                      c = color(120,0,240,fade);
                    }
                
                c = color(255,fade);
                tint(c);
                image(nuimg, j * 6, i * 6, 15, 15);
            }
        }
        pop();
    
        }

        //Emma's
                  //2darr, x,y,rot,scale, alpha
function mapToMonoPixels2(arr,lx,ly,rot,sc, fade) {
    push();
    noStroke();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            fill(arr[i][j] * 128, fade);
            rect(j * 8, i * 8, 10, 10);
        }
    }
   pop();

}


         //x,y,rot,scale, alpha
function mapToColorPixels2(arr,lx,ly,rot,sc, fade) {
    push();
    noStroke();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
             if (value === 1) {
                fill(255,232,124); // sun 
            } else if (value == 2) {
                fill(255,219,88); // mustard
            } else if (value == 3) {
                fill(0, 0, 0); // black
            } else if (value == 4) {
                fill(226,167,111) // brown
            } else if (value == 5) {
                fill(173,216,230) // light blue
            } else if (value == 6) {
                fill(69,69,69) // light black
            } else {
                fill(253,208,23) // gold
            }
            rect(j * 8, i * 8, 10, 10);
        }
    }
    pop();

}

function mapToColorShapes2(arr,lx,ly,rot,sc, fade) {
    push();
    noStroke();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
            //   if ( value == 0 ) {
            //       fill(200,70,0, fade);
            //       ellipse(j * 12, i * 12, 10, 10);
            //   } else if ( value == 1 ){
            //       fill(50,0,30, fade);
            //        rect(j * 12-6, i * 12-6, 10, 10,2);
            //   } else {
            //       fill(0,150,0, fade);
            //        ellipse(j * 12, i * 12, 15, 10,5);
            //   }
              if (value === 1) {
                fill(255,232,124); // sun 
                ellipse(j * 8, i * 8, 10, 10);
            } else if (value == 2) {
                fill(255,219,88); // mustard
                ellipse(j * 8, i * 8, 10, 10);
            } else if (value == 3) {
                fill(0, 0, 0); // black
                ellipse(j * 8, i * 8, 10, 10);
            } else if (value == 4) {
                fill(226,167,111) // brown
                ellipse(j * 8, i * 8, 10, 10);
            } else if (value == 5) {
                fill(173,216,230) // light blue
                ellipse(j * 8, i * 8, 10, 10);
            } else if (value == 6) {
                fill(69,69,69) // light black
                ellipse(j * 8, i * 8, 10, 10);
            } else {
                fill(253,208,23) // gold
                ellipse(j * 8, i * 8, 15, 10,5);
            }
        }
    }
    pop();

}


function mapToColorText2(arr,lx,ly,rot,sc,fade) {
    textSize(15);
    textAlign(CENTER);
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == "buzz" ) {
                  fill(204,143,0, fade);
              } else if ( value == "honey" ){
                  fill(0,0,0, fade);
              } else if ( value == "buzz" ){
                fill(200,0,30, fade);
            } else if ( value == "meep" ){
                fill(173,216,230, fade);
              } else {
                  fill(255, fade);
              }
               text(value, j * 25, i * 10,100);
        }
    }
    pop();

}

                            //2darray,images in array ,x,y,rot,scale, alpha
 function mapToBitMaps2(arr,imgarr,lx,ly,rot,sc) {
            push();
            translate(lx,ly);
            rotate(radians(rot));
            scale(sc);
            let nuimg;
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                     let value = arr[i][j];
                      if ( value == 0 ) {
                        nuimg = imgarr[0];
                      } else if ( value == 1 ){
                        nuimg = imgarr[2];
                      } else if ( value == 2 ) {
                        nuimg = imgarr[1];
                      } else {
                        nuimg = imgarr[3];
                      }
                    image(nuimg, j * 12, i * 12, 14, 14);
                }
            }
            pop();
        
}

    //2darray,images in array ,x,y,rot,scale, alpha
    function mapToTintedBitMaps2(arr,imgarr,lx,ly,rot,sc,fade) {
    push();
    noStroke();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    let nuimg;
    let c;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
                let value = arr[i][j];
                if ( value == 0 ) {
                nuimg = imgarr[7];
                c = color(255,100,0,fade);
                } else if ( value == 1 ){
                c = color(255,0,255,fade);
                nuimg = imgarr[1];
                } else if ( value == 2 ) {
                nuimg = imgarr[2];
                c = color(20,200,120,fade);
                } else if ( value == 3 ) {
                    nuimg = imgarr[3];
                    c = color(20,200,120,fade);
                }else if ( value == 4 ) {
                    nuimg = imgarr[4];
                    c = color(20,200,120,fade);
                }else if ( value == 5 ) {
                    nuimg = imgarr[5];
                    c = color(20,200,120,fade);
                }else {
                nuimg = imgarr[6];
                c = color(120,0,240,fade);
                }
            
            c = color(255,fade);
            tint(c);
            image(nuimg, j * 8, i * 8, 15, 15);
        }
    }
    pop();

    }

    //Elise's
              //2darr, x,y,rot,scale, alpha
function mapToMonoPixels3(arr,lx,ly,rot,sc, fade) {
    push();
    noStroke();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < gridarr2.length; i++) {
                for (var j = 0; j < gridarr2.length; j++) {
                    a = gridarr2[i][j];
                    if (a === 1) {
                        fill(255,232,124); // sun 
                    } else if (a == 2) {
                        fill(255,219,88); // mustard
                    } else if (a == 3) {
                        fill(0, 0, 0); // black
                    } else if (a == 4) {
                        fill(226,167,111) // brown
                    } else if (a == 5) {
                        fill(173,216,230) // light blue
                    } else if (a == 6) {
                        fill(69,69,69) // light black
                    } else {
                        fill(253,208,23) // gold
                    }
        
            rect(j * 4, i * 4, 10, 10);
        }
    }
   pop();
};
         //x,y,rot,scale, alpha
function mapToColorPixels3(arr,lx,ly,rot,sc, fade) {
    push();
    noStroke();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == 0 ) {
                  fill(120, 160, 244, fade);
              } else if ( value == 1 ){
                  fill(166,133,121, fade); //inner ear
              } else if ( value == 2 ) {
                  fill(225,124,32);
                  //Base Orange Fur (second lightest)
                } else if ( value == 3 ) {
                    fill(299,142,63);
                                  //Orange Shade 1 (lightest)
                } else if ( value == 4 ) {
                    fill(202,104,31);
                    //Orange Shade 2 (second darkest)
                } else if ( value == 5 ) {
                    fill(250,250,250);
                                  //white
                } else if ( value == 6 ) {
                    fill(2,0,1);
                    //black
                } else if ( value == 7 ) {
                    fill(175,80,33);
                                    //(darkest)
              } else {
                 fill(20,220,250, fade); 
        
              }
            rect(j * 8, i * 8, 10, 10);
        }
    }
    pop();

}

function mapToColorShapes3(arr,lx,ly,rot,sc, fade) {
    push();
    noStroke();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
            //  if ( value == 0 ) {
            //     fill(200,70,0, fade);
            //     ellipse(j * 8, i * 8, 10, 10);
            // } else if ( value == 1 ){
            //     fill(50,0,30, fade);
            //      rect(j * 8-6, i * 8-6, 10, 10,2);
            // } else {
            //     fill(0,150,0, fade);
            //      ellipse(j * 8, i * 8, 15, 10,5);
            // }
            if ( value == 0 ) {
                fill(120, 160, 244, fade);
                ellipse(j * 8, i * 8, 10, 10);
            } else if ( value == 1 ){
                fill(242, 176, 255, fade); //inner ear
                ellipse(j * 8, i * 8, 10, 10);
            } else if ( value == 2 ) {
                fill(93, 201, 111);
                ellipse(j * 8, i * 8, 10, 10);
                //Base Orange Fur (second lightest)
              } else if ( value == 3 ) {
                  fill(142, 250, 130);
                  ellipse(j * 8, i * 8, 10, 10);
                                //Orange Shade 1 (lightest)
              } else if ( value == 4 ) {
                  fill(33, 150, 78);
                  ellipse(j * 8, i * 8, 10, 10);
                  //Orange Shade 2 (second darkest)
              } else if ( value == 5 ) {
                  fill(252, 186, 3);
                  ellipse(j * 8, i * 8, 10, 10);
                                //yellow
              } else if ( value == 6 ) {
                  fill(2,0,1);
                  ellipse(j * 8, i * 8, 10, 10);
                  //black
              } else if ( value == 7 ) {
                  fill(0, 89, 18);
                  ellipse(j * 8, i * 8, 10, 10);
                                  //(darkest)
            } else {
               fill(20,220,250, fade); 
               ellipse(j * 8, i * 8, 10, 10);
      
            }
        }
    }
    pop();

}

function mapToColorText3(arr,lx,ly,rot,sc,fade) {
    textSize(15);
    textAlign(CENTER);
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
             if ( value == "say" ) {
                fill(20,170,0, fade);
            } else if ( value == "fox" ){
                fill(255, fade);
            } else if ( value == "sayy" ){
                  fill(0, fade);
                } else if ( value == "does" ){
                    fill(253,173,143, fade);
            } else {
                fill(218,84,35, fade);
            }
             text(value, j * 25, i * 8,100);
      }
    }
    pop();

}

                            //2darray,images in array ,x,y,rot,scale, alpha
 function mapToBitMaps3(arr,imgarr,lx,ly,rot,sc) {
            push();
            translate(lx,ly);
            rotate(radians(rot));
            scale(sc);
            let nuimg;
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                     let value = arr[i][j];
                      if ( value == 0 ) {
                        nuimg = imgarr[5];
                      } else if ( value == 1 ){
                        nuimg = imgarr[1];
                      } else if ( value == 2 ) {
                        nuimg = imgarr[2];
                    } else if ( value == 4 ) {
                        nuimg = imgarr[4];
                    } else if ( value == 7 ) {
                        nuimg = imgarr[3];
                    } else if ( value == 3 ) {
                        nuimg = imgarr[6];
                    } else if ( value == 6 ) {
                        nuimg = imgarr[7];
                      } else {
                        nuimg = imgarr[0];
                      }
                    image(nuimg, j * 8, i * 8, 14, 14);
                }
            }
            // font1 = loadFont('assets/oswald.ttf');
            // images[2] = loadImage('assets/pizza.png');
            // images[1] = loadImage('assets/pineapple.png');
            // images[0] = loadImage('assets/tomato.png');
            // images[3] = loadImage('assets/mushroom.png');
            pop();
        
}

    //2darray,images in array ,x,y,rot,scale, alpha
    function mapToTintedBitMaps3(arr,imgarr,lx,ly,rot,sc,fade) {
    push();
    noStroke();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    let nuimg;
    let c;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
                let value = arr[i][j];
                if ( value == 0 ) {
                    nuimg = imgarr[1];
                  } else if ( value == 1 ){
                    nuimg = imgarr[2];
                  } else if ( value == 2 ) {
                    nuimg = imgarr[3];
                } else if ( value == 4 ) {
                    nuimg = imgarr[4];
                } else if ( value == 7 ) {
                    nuimg = imgarr[5];
                } else if ( value == 3 ) {
                    nuimg = imgarr[6];
                } else if ( value == 6 ) {
                    nuimg = imgarr[7];
                  } else {
                    nuimg = imgarr[8];
                  }

                // font1 = loadFont('assets/oswald.ttf');
                // images[2] = loadImage('assets/pizza.png');
                // images[1] = loadImage('assets/pineapple.png');
                // images[0] = loadImage('assets/tomato.png');
                // images[3] = loadImage('assets/mushroom.png');
            
            c = color(255,fade);
            tint(c);
            image(nuimg, j * 8, i * 8, 15, 15);
        }
    }
    pop();

    }
