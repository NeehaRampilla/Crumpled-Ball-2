const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var crumpledBall,ground

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;
	//Crumpled ball
	crumpledBall= new Ball (100,500,20);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 side1=new Ground (600,650,200,10);
     side2=new Ground(500,600,10,100);
	 side3=new Ground(700,600,10,100);
	 
		Engine.run(engine);
  
}


function draw() {
  background(0);

crumpledBall.display();
  drawSprites();
  ellipseMode()
  side1.display();
  side2.display();
  side3.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	   Matter.Body.applyForce(crumpledBall.body,crumpledBall.body.position,{x:65,y:-45});
	}

	}