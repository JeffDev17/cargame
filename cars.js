//Códigos carros

let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [50, 120, 185, 260, 325, 390];
let sCars = [6, 8, 6, 5, 7, 3];
let lCars = 65;
let hCars = 55;


//Show Cars
function showCars(){
  for (let i = 0; i < carImgs.length; i++){
    image(carImgs[i], xCars[i], yCars[i], lCars, hCars)
    }
//image (carImgs[0], xCars[0], yCars[0], lCars, hCars)
//image (carImgs[1], xCars[1], yCars[1], lCars, hCars)
//image (carImgs[2], xCars[2], yCars[2], lCars, hCars)

  
}
//Movimentar carros
function moveCars(){
  for (let i = 0; i <carImgs.length; i++){
  xCars[i] -= sCars[i]
    }
}
//Retornar
function back(){
    if (xCars[0] < -90){
      xCars[0] = 598
    }
    if (xCars[1] < -110){
      xCars[1] = 605
    }
    if (xCars[2] < -150){
      xCars[2] = 598
    }
    if (xCars[3] < -90){
      xCars[3] = 598
    }
    if (xCars[4] < -110){
      xCars[4] = 605
    }
    if (xCars[5] < -150){
      xCars[5] = 598
    }
}