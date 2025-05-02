class Notepad {
    constructor(x, y, width, height) {
        this.x = x; // Position X
        this.y = y; // Position Y
        this.width = width; // Width of the notepad
        this.height = height; // Height of the notepad
        this.text = ""; // Text content of the notepad
    }

    draw() {
        // Draw the notepad
        image(note, this.x, this.y, this.width, this.height);
        fill(0);
        textFont('futura');
        textSize(16);
        textAlign(LEFT, TOP);
        text(this.text, this.x + 10, this.y + 10, this.width - 20, this.height - 20);
    }

    contains(mx, my) {
        // Check if a point (mouseX, mouseY) is inside this notepad
        return mx > this.x && mx < this.x + this.width && my > this.y && my < this.y + this.height;
    }

    addText(char) {
        this.text += char; // Append a character to the text
    }

    removeText() {
        this.text = this.text.substring(0, this.text.length - 1); // Remove the last character
    }
}