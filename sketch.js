
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ob1,ob2,ob3,ob4
var top1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    top1=new Ground(400,200,400,20)
    ob1=new ball(200,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  top1.display()
  drawSprites();
 
}