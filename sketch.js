var fixedrect, movingrect;
function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "green";
  fixedrect.debug = true;
  movingrect = createSprite(600, 100, 70, 60);
  movingrect.shapeColor ="green";
  movingrect.debug = true;
  fixedrect1 = createSprite(200,400,60,60);
  fixedrect1.shapeColor = "green";
  fixedrect1.debug = true;

}

function draw() {
  background(255,255,255);  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  console.log(fixedrect.width/2 + movingrect.width/2);
  console.log(movingrect.x - fixedrect.x);

  


  if(isTouching(movingrect,fixedrect)){
    fixedrect.shapeColor ="blue";
    movingrect.shapeColor ="red";
  }
  else if(isTouching(movingrect,fixedrect1)){
    fixedrect1.shapeColor ="blue";
    movingrect.shapeColor ="red";
  }
  else {
    fixedrect.shapeColor ="green";
    movingrect.shapeColor = "green";
    fixedrect1.shapeColor = "green";
  }
  drawSprites();
}

