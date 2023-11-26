//Image und Sound Code

let imageRoad;
let imageActor;
let imageCar;
let imageCar2;
let imageCar3;
let soundGame;
let soundCollision;
let soundPoints;

function preload(){
  imageRoad = loadImage("image/estrada.png");
  imageActor = loadImage("image/ator-1.png");
  imageCar = loadImage("image/carro-1.png");
  imageCar2 = loadImage("image/carro-2.png");
  imageCar3 = loadImage("image/carro-3.png");
  imageCars = [imageCar, imageCar2, imageCar3, imageCar, imageCar2, imageCar3];
  
  soundGame = loadSound("sounds/trilha.mp3");
  soundCollision = loadSound("sounds/colidiu.mp3")
  soundPoints = loadSound("sounds/pontos.wav")
}