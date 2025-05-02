
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes
let loy= 0;

////////////////////////////// 1 /////////////////
function intro() {
    this.setup = function () {
        console.log("We are at setup for the intro scene");
        textAlign(CENTER);
        textSize(29);
    };

    this.enter = function () {
        console.log("We are entering the intro scene");
        dreamscape.stop();
    };

    this.draw = function () {
        // No need to set background again, since it's done in setup and enter
		createGradientBackground();
        textAlign(CENTER);
        textSize(100);
        fill(0);
        text("OR", width / 2, height / 2);
        
        // Display the images
        image(xp, 50, 180, 400, 400);
        image(win7, 800, 200, 400, 340);
    };

    this.mousePressed = function () {
        // Check if the XP image is clicked
        if (mouseX > 50 && mouseX < 450 && mouseY > 180 && mouseY < 580) {
            this.sceneManager.showScene(scene2); // Change to XP scene
        }
        // Check if the Win7 image is clicked
        else if (mouseX > 800 && mouseX < 1200 && mouseY > 200 && mouseY < 540) {
            this.sceneManager.showScene(scene3); // Change to Windows 7 scene
        }
    };

    this.keyPressed = function () {
        // Handle ESC key to go back to the intro scene
        if (keyCode === ESCAPE) {
            this.sceneManager.showScene(intro); // Return to intro scene
        }
    };

    // Function to create gradient background
    function createGradientBackground() {
        console.log("Applying gradient background...");
        // Log the gradient parameters to debug
        const gradientProperties = {
            from: [0, 0],  // Starting point (top-left corner)
            to: [width, height],  // Ending point (bottom-right corner)
            steps: [
                color(0, 96, 164),  // Blue color
                color(0, 128, 196),  // Lighter blue
                color(255, 255, 255)  // White at the bottom
            ]
        };

        console.log("Gradient Properties: ", gradientProperties);

        // Use fillGradient to fill the entire canvas
        fillGradient('linear', gradientProperties);

        // Draw a rectangle that covers the entire canvas to apply the gradient
        rect(0, 0, width, height);  // This ensures the gradient is applied to the background
        console.log("Gradient applied to the background");
    }
}


///////////////////////  XP  ////////////////////////

function scene2() {
    let contents = ""; // Text content for the notepad
    let notepadVisible = false; // Track visibility of the notepad
    let xPos = 330; // Starting x-position for typing
    let yPos = 300; // Starting y-position for typing
    let lineHeight = 30; // Height of each line of text
    let maxWidth = 560; // Max width for text (width of the notepad image)

    this.setup = function() {
        console.log("We are at setup for scene2");
    };

    this.enter = function() {
        console.log("We are at scene2 (again?)");
        dreamscape.loop(); // Start playing music
    };

    this.exit = function() {
        console.log("Leaving scene2");
        if (dreamscape.isPlaying()) {
        dreamscape.stop();
    }
    };

    this.draw = function() {
        background(xpwall);
        // Draw the notepad image first if it's visible
        if (notepadVisible) {
            image(note, width / 4, height / 3, 600, 300); // Draw the notepad image
        }
        // Set text properties
        fill(50);
        textFont(xpfont);
        textAlign(LEFT);
        textSize(24);

        // Display the contents in the notepad, adjust the y position so it doesn't overlap with the notepad
        let lines = contents.split("\n"); // Split the content into lines
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            let lineWidth = textWidth(line);

            // If the line exceeds the max width, break it into multiple lines
            if (lineWidth > maxWidth) {
                let words = line.split(" "); // Split the line into words
                let newLine = "";
                for (let j = 0; j < words.length; j++) {
                    let testLine = newLine + words[j] + " "; // Test the next word
                    if (textWidth(testLine) <= maxWidth) {
                        newLine = testLine; // If the line is still within maxWidth, keep adding
                    } else {
                        // If the line exceeds the width, move it to the next line
                        text(newLine, xPos, yPos + i * lineHeight);
                        newLine = words[j] + " "; // Start a new line with the current word
                        yPos += lineHeight; // Move to the next line
                    }
                }
                // Draw the last part of the line that fits
                text(newLine, xPos, yPos + i * lineHeight);
            } else {
                // If the line is within maxWidth, simply draw it
                text(line, xPos, yPos + i * lineHeight);
            }
        }
    };

    this.mousePressed = function() {
        // When clicked, show the notepad
        console.log("Notepad clicked");
        contents = ""; // Clear contents for a new notepad (optional)
        notepadVisible = true; // Make the notepad visible
    };

    this.keyPressed = function() {
        // Check for special keys and ignore them
        if (keyCode === SHIFT || keyCode === ALT || keyCode === CONTROL || keyCode === ESCAPE) {
            return; // Don't add these to contents
        }
		
		typing.play();

        // Handle special keys like BACKSPACE
        if (keyCode === BACKSPACE) {
            // Remove the last character or handle line breaks
            if (contents.endsWith("\n")) {
                contents = contents.substring(0, contents.lastIndexOf("\n"));
            } else {
                contents = contents.substring(0, contents.length - 1);
            }
        } else if (keyCode === ENTER) {
            // Create a new line on pressing ENTER
            contents += "\n";
        } else {
            contents += key; // Only add non-special keys
        }
    };
}

////////////////////////////// WIN7 /////////////////




function scene3() {
  let loy = 255;
  let imagesDisplayed = [];
  let userTyped = false;  // Flag to track if the user has typed something
  let maxImages = 50;  // Limit to the number of images that can be generated
  
  this.setup = function() {
    console.log("We are at setup for scene3");
  };

  this.enter = function() {
    console.log("We are entering scene3");
    dreamscape.stop();  // Stop any music from previous scenes
    imagesDisplayed = [];  // Clear images when entering the scene
    userTyped = false;  // Reset typing flag when entering the scene
  };

  this.draw = function() {
    background(win7wall);
    image(note7, 500, 50);
    textFont(win7font);
    textAlign(CENTER);
    fill(10);
    textSize(14);
    text("Type Something", 560, 130);

    // Only display images if the user has typed something
    if (userTyped) {
      for (let i = 0; i < imagesDisplayed.length; i++) {
        let img = imagesDisplayed[i];
        if (img) {
          // Randomize position
          let xPos = (i % 8) * 150;;
          let yPos = floor(i / 8) * 150;

          image(img, xPos, yPos);  // Display the image
        }
      }
    }
  };

  this.keyPressed = function() {
    if (!userTyped) {
      userTyped = true;  // Set flag to true once user starts typing
    }
	if (keyCode === SHIFT || keyCode === ALT || keyCode === CONTROL || keyCode === ESCAPE) {
            return; // Don't add these to contents
        }
    // Play random sound on each key press
    let randomSound = random(winSounds);
    randomSound.play();

    // Check if the limit has been reached before adding a new image
    if (imagesDisplayed.length < maxImages) {
      // Add one random image at a time
      let randomImage = random(errorImages);
      imagesDisplayed.push(randomImage);

      // Debugging: Check the contents of imagesDisplayed after pushing the image
      console.log("Images displayed array after pushing: ", imagesDisplayed);
    } else {
      console.log("Max image limit reached. No more images will be added.");
    }
  };
	this.mousePressed = function() {
    console.log("Mouse clicked. Resetting images.");
    imagesDisplayed = [];  // Clear the images array
    userTyped = false;  // Reset typing flag
  };
}


function theend() {

  this.setup = function()  {
      console.log("we are setting up on the result scene");
  }

  this.enter = function() {
     console.log("we are entering the result scene");
	 dreamscape.stop();
  }

 this.draw = function() {
   background(255,0,0);
   text("the result",width/2,height/2);

 }


}
