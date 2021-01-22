const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine , world,ground
var ball
var box1,ground1,box2

function setup() {
  createCanvas(400,400);
engine=Engine.create();
world=engine.world






box1 = new Box(200,200,50,50)
box2 = new Box(230,100,50,80)
ground1=new Ground(200,390,400,20)
}

function draw() {
  background(0);
  Engine.update(engine)
  ground1.display()
  box1.display()
  box2.display();
}