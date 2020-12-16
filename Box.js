class Box {
    constructor(x, y, width, height) {
        var options = {
            friction: 0.0,
            restitution: 1,
            isStatic: false,
            density: 5
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = "white";
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        World.add(world, this.body); 
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("black");
        fill(this.color);
        rect(0, 0, this.width, this.height);
        pop();
    }
}