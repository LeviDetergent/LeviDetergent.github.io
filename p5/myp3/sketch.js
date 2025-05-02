let stars = []; // Array to hold star objects
const numStars = 200; // Number of stars in the background
let currentPage = 'clock'; // Tracks the current page: 'clock' or 'legend'

let sunImage, hourImage, minuteImage, secondImage; // Variables to store the images

function preload() {
    // Load images for the sun, hour, minute, and second
    sunImage = loadImage('assets/levi.png');
	sunImage2 = loadImage('assets/bedge.png');
    hourImage = loadImage('assets/steve.png');
	hourImage2 = loadImage('assets/a6700.png');
	hourImage3 = loadImage('assets/blender.png');
    minuteImage = loadImage('assets/doro.png');
	minuteImage2 = loadImage('assets/steam.png');
	minuteImage3 = loadImage('assets/ps.png');
    secondImage = loadImage('assets/coggers.gif');
	secondImage2 = loadImage('assets/yt.png');
	secondImage3 = loadImage('assets/discord.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    pixelDensity(3); //displayDensity()
	smooth();
    frameRate(60);
    noCursor();

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
        stars.push(createStar());
    }

    // Set canvas styles
    document.body.style.margin = '0px';
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';
    document.body.style.backgroundColor = '#000';
    document.body.style.fontFamily = "'Roboto Mono', monospace";
    document.body.style.color = '#fff';
    document.body.style.fontWeight = '300';
    document.body.style.textAlign = 'center';
}

function draw() {
    if (currentPage === 'clock') {
        drawClockPage();
    } else if (currentPage === 'legend') {
        drawLegendPage();
    }
}

function drawClockPage() {
    // Set the background based on time
    const bgBrightness = getBackgroundBrightness();
    background(bgBrightness);

    // Draw moving stars
    drawStars();

    // Add "Press L for legends" centered horizontally at the top
    textSize(16);
    textAlign(CENTER, TOP); // Center horizontally, align top
    fill(255);
    text("Press L for legends", width / 2, 60);

    // Determine time period
    const timePeriod = getTimePeriod();

    // Select images based on time of day
    let currentSunImage, currentHourImage, currentMinuteImage, currentSecondImage;
    if (timePeriod === "sleeping") {
        currentSunImage = sunImage2;
        currentHourImage = sunImage2;
        currentMinuteImage = sunImage2;
        currentSecondImage = sunImage2;
    } else if (timePeriod === "morning") {
        currentSunImage = sunImage;
        currentHourImage = hourImage;
        currentMinuteImage = minuteImage;
        currentSecondImage = secondImage;
    } else if (timePeriod === "evening") {
        currentSunImage = sunImage;
        currentHourImage = hourImage2;
        currentMinuteImage = minuteImage2;
        currentSecondImage = secondImage2;
    } else if (timePeriod === "night") {
        currentSunImage = sunImage;
        currentHourImage = hourImage3;
        currentMinuteImage = minuteImage3;
        currentSecondImage = secondImage3;
    }

    translate(width / 2, height / 2); // Center solar system

    // No fill for orbits
    noFill();
    stroke(40);
    strokeWeight(1);

    drawOrbits();

    // Draw the sun
    imageMode(CENTER);
    image(currentSunImage, 0, 0, 110, 120);

    const radius = int(min(width, height) / 2);
    const s = map(millis() / 1000, 0, 60, 0, TWO_PI) - HALF_PI;
    const m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
    const h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

    // Hour planet
    push();
    translate(cos(h) * radius / 1.15, sin(h) * radius / 1.15);
    rotate(s * 2);
    image(currentHourImage, 0, 0, 60, 70);
    pop();

    // Minute planet
    push();
    translate(cos(m) * radius / 1.6, sin(m) * radius / 1.6);
    rotate(s * 5);
    image(currentMinuteImage, 0, 0, 30, 30);
    pop();

    // Second planet
    push();
    translate(cos(s) * radius / 2.68, sin(s) * radius / 2.68);
    rotate(s * 30);
    image(currentSecondImage, 0, 0, 15, 15);
    pop();
}


function drawLegendPage() {
    background(30); // Dark background for contrast
    fill(255);

    // Title
    textAlign(LEFT, CENTER);
    textSize(32);
    text("Legends", 50, 50);

    // Images and captions
    const images = [
        { img: sunImage, caption: "My logo" },
        { img: sunImage2, caption: "Sleeping" },
        { img: hourImage, caption: "Coding for Art 101" },
        { img: hourImage2, caption: "Photography time" },
        { img: hourImage3, caption: "Messing around with 3D art" },
        { img: minuteImage, caption: "Gaming on phone" },
        { img: minuteImage2, caption: "Gaming on computer" },
        { img: minuteImage3, caption: "Drawing" },
        { img: secondImage, caption: "Watching Live Stream" },
        { img: secondImage2, caption: "Watching Youtube" },
        { img: secondImage3, caption: "Hanging out with friends through Discord" }
    ];

    const startX = 50; // Left margin
    const startY = 100; // Top margin
    const imageSize = 80; // Size for all images
    const spacing = 30; // Space between rows
    const columns = 3; // Number of images per row
    const columnWidth = 250; // Space allocated for each column

    for (let i = 0; i < images.length; i++) {
        const row = Math.floor(i / columns);
        const col = i % columns;

        // Calculate positions
        const xPosition = startX + col * columnWidth;
        const yPosition = startY + row * (imageSize + spacing);

        // Display the image
        imageMode(CORNER);
        image(images[i].img, xPosition, yPosition, imageSize, imageSize);

        // Display the caption below the image
        textSize(16);
        textAlign(LEFT, TOP);
        text(images[i].caption, xPosition, yPosition + imageSize + 5);
    }

    // Navigation instructions
    textSize(16);
    textAlign(CENTER, CENTER);
    fill(200);
    text("Press 'C' to return to the clock", width / 2, height - 40);
}

function keyPressed() {
    console.log(`Key pressed: ${key}`); // Debugging line
    if (key === 'L' || key === 'l') {
        currentPage = 'legend'; // Switch to legend page
    } else if (key === 'C' || key === 'c') {
        currentPage = 'clock'; // Switch back to clock page
    }
}


function getTimePeriod() {
    const currentHour = hour(); // Get the current hour (0-23)

    if (currentHour >= 0 && currentHour < 7) {
        return "sleeping"; // 12 AM to 7 AM
    } else if (currentHour >= 6 && currentHour < 12) {
        return "morning"; // 6 AM to 12 PM
    } else if (currentHour >= 12 && currentHour < 18) {
        return "evening"; // 12 PM to 6 PM
    } else {
        return "night"; // 6 PM to 6 AM
    }
}


function getBackgroundBrightness() {
    const currentHour = hour(); // Get the current hour (0-23)

    // Map brightness: 6 AM to 6 PM (bright), 6 PM to 6 AM (dark)
    if (currentHour >= 6 && currentHour < 18) {
        // Daytime: Gradually brighter (morning to afternoon)
        return map(currentHour, 6, 18, 50, 255);
    } else {
        // Nighttime: Gradually darker (evening to early morning)
        return map(currentHour >= 18 ? currentHour : currentHour + 24, 18, 30, 50, 0);
    }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function drawOrbits() {
	noStroke();
    if (windowWidth < 800 || windowHeight < 800) {
        let smaller = min(windowWidth, windowHeight);
        let bigger = max(windowWidth, windowHeight);
        for (let i = 0; i < bigger * 1.5; i += smaller / 8) {
            ellipse(0, 0, i);
        }
    } else {
        for (let i = 0; i < windowWidth * 1.5; i += 100) {
            ellipse(0, 0, i);
        }
    }
}

// Function to create a star object
function createStar() {
    return {
        x: random(0, width),       // Random x position
        y: random(0, height),      // Random y position
        size: random(1, 3),        // Random base size
        speedX: random(-1, 1),     // Random horizontal speed
        speedY: random(-1, 1),     // Random vertical speed
        brightness: random(100, 255), // Random initial brightness
        glowSpeed: random(0.5, 2),    // Random speed of brightness changes
        glowDirection: random([-1, 1]) // Random initial glow direction
    };
}

// Function to draw and update stars
function drawStars() {
    noStroke();
    for (let star of stars) {
        // Adjust brightness for glowing effect, relative to background brightness
        const bgBrightness = getBackgroundBrightness();
        const starBaseBrightness = map(bgBrightness, 50, 255, 255, 50); // Stars brighten at night

        star.brightness = constrain(
            starBaseBrightness + star.glowSpeed * star.glowDirection,
            50,
            255
        );

        // Reverse glow direction if brightness is out of bounds
        if (star.brightness >= 255 || star.brightness <= 50) {
            star.glowDirection *= -1;
        }

        // Draw the star
        fill(255, star.brightness);
        circle(star.x, star.y, star.size);

        // Update position
        star.x += star.speedX;
        star.y += star.speedY;

        // Reset star position when it goes off-screen
        if (star.x < 0 || star.x > width || star.y < 0 || star.y > height) {
            Object.assign(star, createStar());
        }
    }
}


