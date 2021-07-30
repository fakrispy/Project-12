var garden,rabbit,apple;
var gardenImg,rabbitImg,appleImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

function createapples(){
  apple = createSprite(100, 40, 10, 10);
  apple.addImage(appleImg);
  apple.velocityY = 2;
}
}



function draw() {
  background(0);

  rabbit.position.x = World.mouseX
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}