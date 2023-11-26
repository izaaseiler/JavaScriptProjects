//Car Code

let xCars = [520, 520, 520, 520, 520, 520];
let yCars = [40, 96, 149, 210, 265, 318];
let speedCars = [2, 2.5, 3.2, 5, 3.3, 2.3];
let lengthCars = 50;
let heightCars = 40;


function showCar(){
  for (let i = 0; i < imageCars.length; i++){
  image(imageCars[i], xCars[i], yCars[i], 50, 40);
 }
}  

function moveCar(){
  for (let i = 0; i < imageCars.length; i++){
 xCars[i] -= speedCars[i];
 }
} 

function backtopositionstartcar(){
   for (let i = 0; i < imageCars.length; i++){
         if (crossall(xCars[i])){
    xCars[i] = 600;
  } 
 }
}

function crossall(xCars){
  return xCars < -50;
}