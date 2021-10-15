let canvasWidth = 600, canvasHeight = 400;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background('#9BDEEB');
}

function draw() {
  
  startButton();
  insButton();

}

function startButton() {
  noStroke();
  fill('#FAD518');
  rect(280, 150, 220, 55, 30);
  textSize(32);
  fill('#636161');
  text('START', 10, 30);
}

function insButton() {
  noStroke();
  fill('#E56365');
  rect(280, 220, 220, 55, 30);
}

function start() {
  print("start button is pressed");
}

function instructions() {
  print("instructions button is pressed");
}
