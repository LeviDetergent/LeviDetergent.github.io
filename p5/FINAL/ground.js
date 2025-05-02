function Ground()
{
    var graphics = loadImage('assets/powershell.png');
    this.x = 0;

    this.update = function()
    {
        this.x += movementVelocity;

        if (this.x <= -graphics.width) {
            this.x += graphics.width;
        }
    };

    this.show = function() {
        // Draw the ground repeatedly to fill the width of the canvas
        for (let i = this.x; i < width; i += graphics.width) {
            image(graphics, i, height - graphics.height);
        }
    };
}