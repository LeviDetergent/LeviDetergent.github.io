// This contains the use of both Scenemanager, fillGradient and Sound
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/
//https://github.com/alterebro/p5.fillGradient

let isPlaying = false;
let showTitle = true;
let gifLoaded = false;

let textSizeAnim = 32;
let textGrowing = true;
let alphaValue = 0;
let fadingIn = true;

let dino;
let cactus = [];
let clouds = [];
let ground;

let score = 0;
let highScore = 0;

let movementVelocity = -5;

let nextCactus = 0;
let nextCloud = 0;

let nextMilestone = 100;
let milestoneIncrement = 100;

// Cached resized background
let cachedBackground;

function preload() {
    font = loadFont('assets/Segoe UI.ttf');
    win_7 = loadImage('assets/wallpaper.jpg'); 
    game_over = loadImage('assets/game_over.png');

    win_start = loadImage('assets/startup.gif', () => {
        gifLoaded = true;
    });
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    ground = new Ground();
    dino = new Dino();
    cachedBackground = win_7.get(); // Cache resized background once during setup
    loadSecondaryAssets();
}

function draw() {
    if (showTitle && gifLoaded) {
        drawTitleScreen();
        return;
    }

    image(cachedBackground, 0, 0, windowWidth, windowHeight); // Draw background dynamically resized
    updateScore();
    displayScore();
    ground.update();
    ground.show();
    dino.update();
    dino.show();
    manageCactus();
    manageClouds();
    handleCollisions();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); // Resize canvas on window resize
    cachedBackground = win_7.get();         // Update cached background to match new dimensions
}

function drawTitleScreen() {
    let grad = gradientColor();  // Get the gradient for the text
    background(win_start);
    textAlign(CENTER);

    // Apply gradient to the text
    fillGradient('linear', grad);  // Apply gradient fill style
    textFont(font);
    textStyle(BOLD);
    textSize(96);  // Increase the size of the text for better visibility

    // Apply gradient to text with larger size
    text("Save_System32", width / 2, height / 5 - 20);
    
    // Apply normal fill for other text (non-gradient)
    fill(255, alphaValue);
    textSize(32);
    text("Press F11 for Full Experience", width / 2, height / 1.5 + 105);

    animateTitleText();
    animateOpacity();

    fill(255, alphaValue);
    text("Press SPACEBAR to Start", width / 2, height / 1.2 + 50);
}

function gradientColor() {
    // Define gradient properties with a larger range for visibility
    const gradientProperties = {
        from: [0, 0],  // Starting point (top-left corner)
        to: [width - 450, 0],  // Ending point (horizontal gradient across the canvas)
        steps: [
            color(0, 96, 164),  // Dark blue color
            color(0, 128, 196),  // Lighter blue
            color(255, 255, 255)  // White at the end for contrast
        ]
    };
    return gradientProperties;  // Return gradient properties
}

function animateTitleText() {
    textSizeAnim += textGrowing ? 0.2 : -0.2;
    if (textSizeAnim >= 40 || textSizeAnim <= 32) textGrowing = !textGrowing;
    textSize(textSizeAnim);
}

function animateOpacity() {
    alphaValue += fadingIn ? 5 : -5;
    if (alphaValue >= 255 || alphaValue <= 0) fadingIn = !fadingIn;
}

function updateScore() {
    if (frameCount % 8 === 0) {
        score++;
        highScore = max(score, highScore);

        if (score >= nextMilestone) {
            scoreSound.play();
            nextMilestone += milestoneIncrement;
            milestoneIncrement += 50;
        }
    }
}

function displayScore() {
	fill(200);
    textAlign(RIGHT);
    textStyle(BOLD);
    textSize(32);
    text(score, width - 10, 50);
}

function manageCactus() {
    if (nextCactus <= 0) {
        cactus.push(new Cactus());
        nextCactus = random(70, 150);
    }
    nextCactus--;

    for (let i = cactus.length - 1; i >= 0; i--) {
        let c = cactus[i];
        if (!c.offscreen()) {
            c.update();
            c.show();
        } else {
            cactus.splice(i, 1);
        }
    }
}

function manageClouds() {
    if (nextCloud <= 0) {
        clouds.push(new Cloud());
        nextCloud = random(80, 120);
    }
    nextCloud--;

    for (let i = clouds.length - 1; i >= 0; i--) {
        let cloud = clouds[i];
        if (!cloud.offscreen()) {
            cloud.update();
            cloud.show();
        } else {
            clouds.splice(i, 1);
        }
    }
}

function handleCollisions() {
    for (let i = cactus.length - 1; i >= 0; i--) {
        if (cactus[i] && cactus[i].hits(dino)) {
            resetGame();
            break;
        }
    }
}

function resetGame() {
    cactus = [];
    clouds = [];
    score = 0;
    ground.x = 0;
    joever.play();
    window.location.href = "./dies/index.html";
    noLoop();
}

function keyPressed() {
    if (showTitle && key === ' ') {
        startGame();
    } else if (key === ' ') {
        action();
    }
}

function mousePressed() {
    if (!showTitle) action();
}

function action() {
    dino.jump();
    jump.play();
    isPlaying = true;
}

function startGame() {
    showTitle = false;
    isPlaying = true;
    startup.play();

    startup.onended(() => {
        bg.setVolume(0.2);
        bg.loop();
    });

    loop();
}

function loadSecondaryAssets() {
    startup = loadSound('assets/sounds/win7.mp3', () => console.log("Startup sound loaded"));
    bg = loadSound('assets/sounds/trance.opus', () => console.log("Background music loaded"));
    jump = loadSound('assets/sounds/jump.mp3');
    joever = loadSound('assets/sounds/joever.mp3');
    scoreSound = loadSound('assets/sounds/score.mp3');
}
