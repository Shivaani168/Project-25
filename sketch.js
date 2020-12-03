const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
dustbinImage=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1500,580);

	engine = Engine.create();
  world = engine.world;
  
	//Create the Bodies Here.
  side1=new Side(width-200,height-30,200,20);
	side2=new Side(width-310,height-70,20,400);
  side3=new Side(width-90,height-70,20,400);
  ground=new Ground(width/2,height-10,1500,20)
  crushedPaper=new Paper(width-1400,height-30,70,70)
	Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("lightgrey");
  crushedPaper.display();
  ground.display();
  image(dustbinImage,width-330,height-270,260,250);
  drawSprites();
  textSize(50)
  fill("red")
  stroke("black")
  text("Please throw your rubbish in the trash bins",300,50);
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(crushedPaper.body,crushedPaper.body.position,{x:230,y:-230})
}
}

