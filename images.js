//IMAGENS e SONS
let bgImg;
let carImg;
let pImg;
let carImg2;
let carImg3;
//
let hitS;
let scoreS;
let track;


function preload(){
 bgImg = loadImage('images/estrada.png')
  carImg = loadImage('images/carro-1.png')
    pImg = loadImage('images/chicken2.png')
      carImg2 = loadImage('images/carro-2.png')
        carImg3 = loadImage('images/carro-3.png')
  carImgs = [carImg, carImg2, carImg3, carImg2, carImg3, carImg]

hitS = loadSound("som/colidiu.mp3")
scoreS = loadSound("som/pontos.wav")
track = loadSound("som/trilha.mp3")
  
}

