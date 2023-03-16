//PLAYER MEASURES
let hPlayer = 33;
let lPlayer = 35;
let xPlayer = 300;
let yPlayer = 462;
let colisao = false;
let pontos = 0;

////////////////
function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < carImgs.length; i++){
    colisao = collideRectCircle(xCars[i], yCars[i], lCars, hCars, xPlayer, yPlayer, 15)
              if (colisao){
                      bateu();
                                    if (pontos > 0){
                                          pontos -= 1;
}
      }
                }
}
function bateu(){
  yPlayer = 462;
  hitS.play();
    }
////////////////
function showPlayer(){
  image (pImg,xPlayer,yPlayer,lPlayer,hPlayer)
}
//Controls
function controlP(){
  if (keyIsDown(UP_ARROW)){
    yPlayer -= 3
  }
  if (keyIsDown(DOWN_ARROW)){
    if(yPlayer < 462){
    yPlayer += 3
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    xPlayer -= 3
  }
  if (keyIsDown(RIGHT_ARROW)){
    xPlayer += 3
}

}

function addScore(){
  textSize(25)
  text(pontos, width / 2, 31);
  if (yPlayer <= 30){
    pontos += 1;
    yPlayer = 462
    scoreS.play();
  } 
  
}