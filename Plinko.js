class Plinko {
    constructor(x, y, red, green, blue) {
        var options = {
            restitution: 0.7,
            isStatic:true
        }
        this.r = z;
        if(red !== undefined) {
            this.red = red;
            this.green = green;
            this.blue = blue;
        }
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        if(currentPlinko < 63) {
            fill("white");
        }
        if(this.red) {
            fill(this.red, this.green, this.blue);
        }
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r);
        pop();
    }

}
