let bg;

function preload() {
  bg = loadImage('assets/home_bg.png');
}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  imageMode(CORNER);
  image(bg, 0, 0, windowWidth, windowHeight);

  start_button = createButton("START");
  start_button.position(windowWidth*3/5,windowHeight*1/3);
  start_button.mouseReleased(toMenu);

  ins_button = createButton("INSTRUCTIONS");
  ins_button.position(windowWidth*3/5,windowHeight*2/3);
  ins_button.mouseReleased(toInstructions);

}

function toMenu(){
  window.location = "menu.html"
}

function toInstructions() {
  window.location = "instructions.html"
}

function draw() {

}