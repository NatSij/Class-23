const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var floor, ball;
var box1, box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
floor = new ground(200,380,400,10);
box1 = new box(200,300,50,50);
box2 = new box(240,100,50,90);
}

function draw(){
    background(0);
    Engine.update(engine);
floor.display();
box1.display();
box2.display();
}