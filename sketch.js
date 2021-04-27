
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1250, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(625,600,1250,20)
dustbin1 = new Dustbin(1200,525,20,100);
dustbin2 = new Dustbin(1000,525,20,100);
dustbin3 = new Dustbin(1100,580,220,20)
paper = new Paper(100,590,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}
function keyPressed() 
{ if (keyDown(UP_ARROW)) {
	 Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85}); 
	} 
}



