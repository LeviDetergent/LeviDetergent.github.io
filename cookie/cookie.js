var score = 0;
var radius = 100;
var currentRadius = 100;
var x;
var y;
var cookieImg;
var cookieImg2;
var upgrades = 0; // variable to store the number of upgrades
var clickMultiplier = 1; // variable to store the click multiplier
var autoClick = false; // variable to store whether auto click is enabled
var autoClickInterval; // variable to store the interval for auto click
var level = 1; // variable to store the level of the player

// Button objects
var buyClickUpgradeBtn;
var buyAutoClickBtn;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cookieImg = loadImage('cookie.png');
  x = width / 2;
  y = height / 1.8;

  // Initialize button objects
  buyClickUpgradeBtn = createButton('Buy Click Upgrade (Cost: ' + getClickUpgradeCost() + ' points)'); //create the button
  buyClickUpgradeBtn.position(width / 2 - 100, height / 2 + 150); //position
  buyClickUpgradeBtn.size(200, 50); //size
  buyClickUpgradeBtn.mousePressed(buyClickUpgrade); //if mouse pressed on it, call buyClickUpgrade function
  buyClickUpgradeBtn.style('border-radius', '25px'); // Set border radius to make it rounded
  buyClickUpgradeBtn.style('background-color', 'rgba(74, 128, 194)'); // Set background color to match the background

  buyAutoClickBtn = createButton('Buy Auto Click (Cost: 500 points)');
  buyAutoClickBtn.position(width / 2 - 100, height / 2 + 250);
  buyAutoClickBtn.size(200, 50);
  buyAutoClickBtn.mousePressed(buyAutoClick);
  buyAutoClickBtn.style('border-radius', '25px'); // Set border radius to make it rounded
  buyAutoClickBtn.style('background-color', 'rgba(74, 128, 194)'); // Set background color to match the background
}

function draw() {
  background(74, 128, 194);
  textAlign(CENTER);
  textSize(40);
  text("Score: " + score, width / 2, 60);
  text("Click Multiplier: " + clickMultiplier, width / 2, 100);
  text("Auto Click: " + (autoClick ? "Enabled" : "Disabled"), width / 2, 140);
  text("Level: " + level, width / 2, 220); // Display the current level
  text("Next Level: " + getRequiredScoreForNextLevel() + " points", width / 2, 180); // Display the score required to reach the next level
  imageMode(CENTER);
  currentRadius = lerp(currentRadius, radius, 0.1);
  image(cookieImg, x, y, currentRadius * 2, currentRadius * 2);

  // Check if player has enough score to level up and level up button is not visible
  if (score >= getRequiredScoreForNextLevel() && !document.getElementById("levelUpBtn")) {
    // Create level up button
    var levelUpBtn = createButton('Level Up');
    levelUpBtn.position(width / 1.5, height / 2);
    levelUpBtn.size(100, 50);
    levelUpBtn.mousePressed(levelUp);
    levelUpBtn.style('border-radius', '25px'); // Set border radius to make it rounded
    levelUpBtn.style('background-color', 'rgba(74, 128, 194)'); // Set background color to match the background
    levelUpBtn.id("levelUpBtn"); // Add an ID to the button for future reference
  }
  
  // Check if player does not have enough score to level up and level up button is visible
  if (score < getRequiredScoreForNextLevel() && document.getElementById("levelUpBtn")) {
    // Remove level up button
    document.getElementById("levelUpBtn").remove();
  }
}

function mouseClicked() {
  var distance = dist(x, y, mouseX, mouseY);
  if (distance <= radius) {
    score += clickMultiplier; // Increment score based on clickMultiplier
  }
}

// Buy Click Upgrade
function buyClickUpgrade() {
  if (score >= getClickUpgradeCost()) { // Check if player has enough points to buy the upgrade
    score -= getClickUpgradeCost(); // Deduct points from score
    clickMultiplier += 1; // Increment clickMultiplier
    upgrades++; // Increment upgrades
    buyClickUpgradeBtn.html('Buy Click Upgrade (Cost: ' + getClickUpgradeCost() + ' points)'); // Update button text
  }
}

// Buy Auto Click
function buyAutoClick() {
  if (score >= 500 && !autoClick) { // Check if player has enough points to buy auto click and it's not already enabled
    score -= 500; // Deduct points from score
    autoClick = true; // Enable auto click
    autoClickInterval = setInterval(clickCookie, (1000 - (level*10))); // Start auto click with 1 second interval
    buyAutoClickBtn.html('Buy Auto Click (Cost: 500 points) - Enabled'); // Update button text
    buyAutoClickBtn.attribute('disabled', true); // Disable buy auto click button after it's been enabled
  }
}

// Function to calculate the cost of the click upgrade
function getClickUpgradeCost() {
  return Math.ceil(upgrades * 100); // Upgrade cost formula: 100 points multiplied by number of upgrades
}

// Click Cookie Automatically
function clickCookie() {
  score += clickMultiplier; // Increment score based on clickMultiplier
}

// Handle Window Resizing
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  buyClickUpgradeBtn.position(width / 2 - 100, height / 2 + 50);
  buyAutoClickBtn.position(width / 2 - 100, height / 2 + 120);
}

// Handle Button Clicks
function mouseClicked() {
  var distance = dist(x, y, mouseX, mouseY);
  if (distance <= radius) {
    score += clickMultiplier; // Increment score based on clickMultiplier
    
    // Add animation
    radius += 20; // Increase radius by 10 pixels
    setTimeout(function() {
      radius = 100; // Reset radius back to original size after 0.2 seconds
    }, 200);
  }
}

// Buy Click Upgrade
function buyClickUpgrade() {
 if (score >= getClickUpgradeCost()) { // Check if player has enough points to buy the upgrade
   score -= getClickUpgradeCost(); // Deduct points from score
   clickMultiplier += 1; // Increment clickMultiplier
   upgrades++; // Increment upgrades
   buyClickUpgradeBtn.html('Buy Click Upgrade (Cost: ' + getClickUpgradeCost() +   'points)'); // Update button text
  }
}

// Level Up
function levelUp() {
// Check if the player's score is greater than or equal to the required score for the next level
  if (score >= getRequiredScoreForNextLevel()) {
    score = 0; // Deduct score required to reach the next level
    autoClick = false;
    clearInterval(autoClickInterval);
    // Reset "Buy Auto Click" button
    buyAutoClickBtn.html('Buy Auto Click (Cost: 500 points)');
    buyAutoClickBtn.removeAttribute('disabled');
    
    // Increment level
    level++;
    
    // Unlock new upgrades or features based on the level
    switch(level) {
      case 2:
        // Upgrade click multiplier
        clickMultiplier = level;
        break;
      // Add more cases for additional levels and corresponding upgrades or features
    }
  }
}

// Function to calculate the required score for the next level
function getRequiredScoreForNextLevel() {
  return level * 1000; // Required score formula: level multiplied by 1000
}

// Handle Window Resizing
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  buyClickUpgradeBtn.position(width / 2 - 100, height / 2 + 50);
  buyAutoClickBtn.position(width / 2 - 100, height / 2 + 120);
}
