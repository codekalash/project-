
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobobject1 ,  bobobject2 , bobobject3 ,  bobobject4 , bobobject5 ;   
var rope1 , rope2 , rope3 , rope4 , rope5
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	roofObject=new Roof(width/2,height/4,width/7,20);
	bobDiameter=40; 
	startBobPositionX=width/2; 
	startBobPositionY=height/4+500;
	 bobobject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	  bobobject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter); 
	  bobobject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	   bobobject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	    bobobject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	//Create the Bodies Here.

	var render = Render.create({
		 element: document.body,
		  engine: engine,
		   options:
		    { width: 1200,
				 height: 700, 
				 wireframes: false }
				 });
				  rope1=new rope(bobobject1.body,roofObject.body,-bobDiameter*2, 0)
				   rope2=new rope(bobobject2.body,roofObject.body,-bobDiameter*1, 0) 
				   rope3=new rope(bobobject3.body,roofObject.body,0, 0)
					 rope4=new rope(bobobject4.body,roofObject.body,bobDiameter*1, 0)
					  rope5=new rope(bobobject5.body,roofObject.body,bobDiameter*2, 0)


	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  bobobject1.display()
  bobobject2.display()
  bobobject3.display()
  bobobject4.display()
  bobobject5.display()

  roofObject.display();

  

  
  drawSprites();
 
}
function keyPressed(){
	if(KeyCode===UP_ARROW){
		Matter.Body.applyForce(bobobject1.body,bobobject1.body.position,{x:-50,y:-45})
	}
	


}

