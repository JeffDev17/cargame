function setup() {
  createCanvas(600, 500);
  ;track.loop();
}

function draw() {
  image (bgImg,0,0,600,500);
  showCars(); 
  moveCars();
  showPlayer();
  controlP();
  back();
  verificaColisao();
  addScore();

}