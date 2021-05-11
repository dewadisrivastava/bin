
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin1;	
var world;
var ball1;
var can1


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	

	ball1=new Ball(100,600,50,50);
dustbin1=new Dustbin(600,550,100,100)
can1=new Can(100,600,60,70)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 


  groundObject.display();
  
  ball1.display();
  dustbin1.display();
  can1.display();

}

