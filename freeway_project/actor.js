//Actor Code

let xActor = 140;
let yActor = 366;
let collision = false
let myPoints = 0;

function showActor(){
  image(imageActor, xActor, yActor, 30, 30);
  print(yActor)
}

function moveActor(){
    if (keyIsDown(UP_ARROW)){
    yActor -= 3;
  }
    if (keyIsDown(DOWN_ARROW)){
    if(canMove())
      yActor += 3;
  }
}

function collisionTest(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imageCars.length; i++){
    collision = collideRectCircle(xCars[i], yCars[i], lengthCars, heightCars, xActor, yActor, 15)
    if (collision){
      backActorStart();
      soundCollision.play();
      if (pointsAbove0())
      myPoints -= 1;
    } 
  }
}

function backActorStart(){
  yActor = 366;
}

function addPoints(){
  textAlign(CENTER);
  textSize(25);
  fill(color(240,230,140));
  text(myPoints, width / 4, 27);
}

function madePoints(){
  if (yActor < 15){
    myPoints += 1;
    soundPoints.play();
    backActorStart();
  }
}
function pointsAbove0(){
  return myPoints > 0
}
function canMove(){
  return yActor < 366;
}






