var stoneObj, tree, boy, ground, launcher;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var mango1, mango2, mango3, mango4, mango5;
function preload()
{
	tree=loadImage("tree.png");
	mango1=loadImage("mango.png");
	mango2=loadImage("mango.png");
	mango3=loadImage("mango.png");
	mango4=loadImage("mango.png");
	mango5=loadImage("mango.png");
	boy=loadImage("boy.png");
	stoneObj=loadImage("stone.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	mango1 = new Mango(230, 320, 280, 100);
	mango2 = new Mango(400, 320, 200, 20);
	mango3 = new Mango(450, 335, 20, 100);
	mango4 = new Mango(400, 320, 200, 20);
	mango5 = new Mango(450, 335, 20, 100);

    launcher = new Launcher(stone.body,{x:200, y:30});
	
	//Create the Bodies Here.
	stoneObj = new Stone(235,420,30); 

	stoneObj = createSprite(width/2, 80, 10,10);
	stoneObj.addImage(stoneIMG);
	stoneObj.scale=0.2;

	tree=createSprite(width/2, 200, 10,10);
	tree.addImage(treeIMG);
	tree.scale = 0.6;

	boy=createSprite(width/2, 200, 10,10);
	boy.addImage(boyIMG);
	boy.scale = 0.6;

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor = color(255);

	keyPressed();
    detectCollision();
    mouseDragged();
	mouseReleased()

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  detectCollision(stoneObj, mango1);
  detectCollision(stoneObj, mango2);
  detectCollision(stoneObj, mango3);
  detectCollision(stoneObj, mango4);
  detectCollision(stoneObj, mango5);
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  launcher.display();
  boy.display();
  ground.display();
  stone.display();
  tree.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: 235 , y: 420});
}


function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
  if(keyCode === 32) {
    Matter.Body.SetPosition(stoneObj.body, {x:235, y:420});
    launcherObject.attach(stoneObj.body);
 }
}

function detectCollision(){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<-lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body, false);
	}
}


