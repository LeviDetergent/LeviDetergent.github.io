
// This contains the use of both Scenemanager, fillGradient and Sound
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/
//https://github.com/alterebro/p5.fillGradient


var image1_up, image2_over,snd1;
// var duration;
// var  slideWidth = 500;

let wood;
let winSounds = [];
let errorImages = [];


function preload() {
  win7 = loadImage("assets/win7.png");
  xp = loadImage("assets/xp.png");
	
  xpwall = loadImage("assets/xpwall3.png");
  win7wall = loadImage("assets/win7wall.png");
	
  note = loadImage("assets/note.png");
  note7 = loadImage("assets/note7.png");
	
  xpfont = loadFont("assets/windows-xp-tahoma.ttf");
  win7font = loadFont("assets/SegoeUI.ttf");
	
  dreamscape = loadSound("assets/dreamscape.mp3");
  typing = loadSound("assets/typing.mp3");
	
  winSounds.push(loadSound("assets/win7sounds/1.wav"));
  winSounds.push(loadSound("assets/win7sounds/2.wav"));
  winSounds.push(loadSound("assets/win7sounds/3.wav"));
  winSounds.push(loadSound("assets/win7sounds/4.wav"));
  winSounds.push(loadSound("assets/win7sounds/5.wav"));
  
  errorImages.push(loadImage("assets/error1.png"));
  errorImages.push(loadImage("assets/error2.png"));
  errorImages.push(loadImage("assets/error3.png"));
  errorImages.push(loadImage("assets/error4.png"));
  errorImages.push(loadImage("assets/error5.png"));
}


// define your p5.play sprites as global objects first.
var ghosty;


// global manager object
var mgr;

function setup() {
    createCanvas(1280, 720);
  //  console.log(hell);

     mgr = new SceneManager();
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (intro);
    mgr.addScene (scene2);
    mgr.addScene (scene3);
    mgr.addScene (theend);
    mgr.showNextScene();

}

function draw()
{
    // pass the current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

 function mouseMoved()
 {
   // pass the mouseMoved message into the SceneManager
   mgr.handleEvent("mouseDragged");
}

function mouseDragged()
{
   // pass the mouseMoved message into the SceneManager
    mgr.handleEvent("mouseDragged");
}

function keyPressed() {
    // Handle scene transitions
    switch(keyCode) { // Use keyCode for key comparisons instead of 'key'
        case ESCAPE:
            mgr.showScene(intro);  // Switch to intro scene
            break;
        case 112:  // F5 key code
            mgr.showScene(scene2);  // Switch to scene2
            break;
        case 113:  // F4 key code
            mgr.showScene(scene3);  // Switch to scene3
            break;
        case 114:  // F3 key code
            mgr.showScene(scene3);  // Switch to scene3
            break;
        case 115:  // F2 key code
            mgr.showScene(scene3);  // Switch to scene3
            break;
        case 116:  // F1 key code
            mgr.showScene(theend);  // Switch to the end scene
            break;
    }
        mgr.keyPressed();  // Pass the key press to the current scene manager
}


