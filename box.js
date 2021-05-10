class box{
    constructor(x,y,width,height){
    var box_options = {
    restitution: 0.7
    }
    this.body = Bodies.rectangle(x,y,width,height,box_options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    }
    
    display(){
    var posi = this.body.position;
    var angle = this.body.angle;
    push ()
    translate(posi.x, posi.y)
    rotate (angle)
    rectMode(CENTER);

    rect(0, 0, this.width, this.height);
    pop();
    
    }
    
    }
    