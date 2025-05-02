function Dino()
{
    this.x = 0; // Horizontal position
    this.y = height - 75; // Start slightly above the bottom

    this.width = 45;
    this.height = 50;

    this.yVel = 0;
    this.gravity = 0.8;

    this.grounded = true;
    this.jumpStrength = 15;

    var graphics_right_leg, graphics_left_leg;

    graphics_right_leg = loadImage('assets/system32.png');
    graphics_left_leg = loadImage('assets/system32.png');
    graphics_air = loadImage('assets/system32_back.png');

    this.update = function()
    {
        let groundHeight = height - 40; // Define the ground level here

        this.yVel += this.gravity;
        this.y += this.yVel;

        if (this.y >= groundHeight)
        {
            this.y = groundHeight; // Stop at the new ground level
            this.yVel = 0;

            this.grounded = true;
        }
    }

    this.show = function()
    {
        var graphics;

        if (this.grounded)
        {
            if ((int)(frameCount / 10) % 2 == 0)
                graphics = graphics_right_leg;
            else
                graphics = graphics_left_leg;
        }
        else
            graphics = graphics_air;

        image(graphics, this.x, this.y - this.height, this.width, this.height);
    }

    this.jump = function()
    {
        if (this.grounded)
        {
            this.yVel = -this.jumpStrength;
            this.grounded = false;
        }
    }
}
