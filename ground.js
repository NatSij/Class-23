class ground{
constructor(x,y,width,height){
var ground_options = {
isStatic: true
}
this.body = Bodies.rectangle(x,y,width,height,ground_options);
this.width = width;
this.heigth = height;
World.add(world, this.body);
}

display(){
var posi = this.body.position;
rectMode(CENTER);
fill("green");
rect(posi.x, posi.y, this.width, this.height);


}

}
