let score = 0;
let success = false;
let q;
let apple, orange, avocado, banana, grape;

function preload() {
  apple = loadImage('assets/apple.png');
  avocado = loadImage('assets/avocado.png');
  orange = loadImage('assets/orange.png');
  banana = loadImage('assets/banana.png');
  grape = loadImage('assets/grape.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#9BDEEB');

  homeButton = createButton("Home");
  homeButton.position(0,0);
  homeButton.mouseReleased(toHome);

  textSize(30);
  // TODO: Change the font into BalsamiqSans
  text('Click on the object that matches the color of the cloud!', 200, 200);

}

function toHome() {
  window.location = "index.html";
}

function level1() {
  
}

function level2() {
  // window.location = "colorMe_l2.html";
}

function level3() {
  // window.location = "colorMe_l3.html";
}