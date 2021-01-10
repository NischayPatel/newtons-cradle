
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	paperObject=new paper(200,450,40);
	paperObject1=new paper(200,450,40);
	paperObject2=new paper(200,450,40);
	paperObject3=new paper(200,450,40);
	paperObject4=new paper(200,450,40);

	groundObject=new ground(200,300,200,300);
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperObject.display();
  paperObject1.display();
  paperObject2.display();
  paperObject3.display();
  paperObject4.display();
  
  drawSprites();
 
}




