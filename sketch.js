let canvasWidth = 600, canvasHeight = 400;
let balsamiq;
let start_button, ins_button;

function preload() {
  balsamiq = loadfont('assets/BalsamiqSans-Bold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#9BDEEB');

  start_button = createButton("START");
  start_button.position(windowWidth*3/5,windowHeight*1/3);
  start_button.onMouseReleased(window.location = "menu.html");

  ins_button = createButton("INSTRUCTIONS");
  start_button.position(windowWidth*3/5,windowHeight*2/3);
  ins_button.onMouseReleased(instructions());

}

function draw() {

}

function createStartButton() {
  noStroke();
  fill('#FAD518');
  rect(280, 150, 220, 55, 30);
  textSize(32);
  fill('#000000');
  text('START', 340, 190);
}

function createInsButton() {
  noStroke();
  fill('#E56365');
  rect(280, 220, 220, 55, 30);
  textSize(24);
  fill('#000000');
  text('INSTRUCTIONS', 300, 257);
}

function start() {
  print("start button is pressed");
}

function instructions() {
  print("instructions button is pressed");
}
