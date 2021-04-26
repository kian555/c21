var movingRect, fixedRect;
function setup() {
  

  createCanvas(800,400);
  movingRect= createSprite(400, 300, 70, 50)
  fixedRect=createSprite(100, 300, 80, 50);
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
  movingRect.velocityX=-3
fixedRect.velocityX=3
  go1=createSprite(100,100,50,50);
  go1.shapeColor="green";
  go2=createSprite(200,100,50,50);
  go2.shapeColor="green";


}

function draw() {
  background(255,255,255); 
 // movingRect.x=mouseX;
 //movingRect.y=mouseY;
  if(isTouching(movingRect,go1)){
  movingRect.shapeColor="red";
  go1.shapeColor="red";
  }
  else{
  movingRect.shapeColor="green";
  go1.shapeColor="green";

  }
 bounceOff(movingRect,fixedRect);


  drawSprites();
}
