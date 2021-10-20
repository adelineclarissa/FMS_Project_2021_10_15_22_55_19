let canvasWidth = 600, canvasHeight = 400;
let balsamiq;
let start_button, ins_button;

function preload() {
  balsamiq = loadFont('assets/BalsamiqSans-Bold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#9BDEEB');

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