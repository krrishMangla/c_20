var a,b;


function setup() {
  createCanvas(800,400);
  a=createSprite(200, 200, 50, 80);
  a.velocityX = 3;
  b =createSprite(400, 200, 80, 30);
  b.velocityX = -3;
  a.debug=true;
  b.debug=true;
  a.shapeColor="red";
  b.shapeColor="red";
}

function draw() {
  background("black"); 
 
if(b.x-a.x < a.width/2+b.width/2 && a.x-b.x < a.width/2+b.width/2)
 {
  a.velocityX = a.velocityX *(-1);
  b.velocityX = b.velocityX *(-1)

 }
 
 if(b.y-a.y < a.height/2+b.height/2 && a.y-b.y < a.height/2+b.height/2)
 {
  a.velocityY = a.velocityY *(-1);
  b.velocityY = b.velocityY *(-1)

 }
  // b.x=World.mouseX; 
  //b.y=World.mouseY; 
  //v= b.x-a.x;
  // console.log(v);
  /*if(b.x-a.x < a.width/2+b.width/2 && a.x-b.x < a.width/2+b.width/2 
    && b.y-a.y < a.height/2+b.height/2 && a.y-b.y < a.height/2+b.height/2)
  {
    a.shapeColor="green";
    b.shapeColor="green";
  }
  else{
    a.shapeColor="red";
    b.shapeColor="red";
  }*/
 
  drawSprites();
}