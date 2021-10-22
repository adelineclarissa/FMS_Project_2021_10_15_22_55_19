let score = 0;
let success = false;
let apple, orange, avocado, banana, grape;
let myFont;

function preload() {

  // Load images
  apple = loadImage('assets/apple.png');
  avocado = loadImage('assets/avocado.png');
  orange = loadImage('assets/orange.png');
  banana = loadImage('assets/banana.png');
  grape = loadImage('assets/grape.png');

  // Load font
  myFont = loadFont('assets/BalsamiqSans-Bold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#9BDEEB');

  homeButton = createButton("Home");
  homeButton.position(0,0);
  homeButton.mouseReleased(toHome);

  textSize(40);
  textFont(myFont);
  text('Which object has the same\ncolor as the cloud?', 200, 250);

  // format: image, x, y, sizex, sizey
  image(apple, 200, 400, 200, 200);
  image(grape, 500, 400, 200, 200);
  image(orange, 800, 400, 200, 200);

}

function toHome() {
  window.location = "index.html";
}

function level1() {
  //Image(apple, 100, 100);
}

function level2() {
  // window.location = "colorMe_l2.html";
}

function level3() {
  // window.location = "colorMe_l3.html";
}