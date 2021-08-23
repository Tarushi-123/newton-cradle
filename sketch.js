
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint = Matter.Constraint;

var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var world

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 roof=new Roof(400,250,230,20);
//World.add(world,roof);

 bobObj1=new Bob(320,575,40);
 bobObj2=new Bob(360,575,40);
 bobObj3=new Bob(400,575,40);
 bobObj4=new Bob(440,575,40);
 bobObj5=new Bob(480,575,40);

 rope1=new Rope(bobObj1.body,roof.body,-80);
 World.add(world,rope1);

 rope2=new Rope(bobObj2.body,roof.body,-40);
 World.add(world,rope2);

 rope3=new Rope(bobObj3.body,roof.body,0);
 World.add(world,rope3);

 rope4=new Rope(bobObj4.body,roof.body,40);
 World.add(world,rope4);

 rope5=new Rope(bobObj5.body,roof.body,80);
 World.add(world,rope5);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
  background(230);
  Engine.update(engine);

roof.display();

bobObj1.display();
bobObj2.display();
bobObj3.display();
bobObj4.display();
bobObj5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-150,y:-155});
	}
	
}



