 
function setup() {
  createCanvas(600, 400);
  soundGame.loop();
}

function draw() {
  background(imageRoad);
  showActor();
  showCar();
  moveCar();
  moveActor();
  backtopositionstartcar();
  collisionTest();
  addPoints();
  madePoints();
}