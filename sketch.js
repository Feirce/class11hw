var path, pathImage;
var runner;
var runnerImage;
var leftBoundary, rightBoundary;
function preload() {
  //pre-load images
  pathImage = loadImage("path.png")
  runnerImage = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup() {
  createCanvas(400, 400);
  //create sprites here
  path = createSprite(200, 200);
  path.addImage(pathImage);

  runner = createSprite(200, 300, 50, 70);
  runner.addAnimation("Runner", runnerImage);
  runner.scale = 0.07;


  leftBoundary = createSprite(0, 0, 100, 800);
  leftBoundary.visible = false;

  rightBoundary = createSprite(400, 0, 100, 800);
  rightBoundary.visible = false;
}



function draw() {
  background(0);

  runner.x = World.mouseX;

  if (path.y > 400) {
    path.y = height / 2;
  }
  path.velocityY = 1.2;

  edges = createEdgeSprites();

  runner.collide(edges[3]);
  runner.collide(leftBoundary);
  runner.collide(rightBoundary);

  drawSprites();
}
