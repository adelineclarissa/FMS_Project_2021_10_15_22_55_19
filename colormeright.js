let score = 0;
let success = false;
let apple, orange, avocado, banana, grape;
let myFont;
let userInput;

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
  text('Which object has the same\ncolor as the cloud?', 200, 200);

  // format: image, x, y, sizex, sizey
  image(apple, 200, 400, 200, 200);
  image(grape, 500, 400, 200, 200);
  image(orange, 800, 400, 200, 200);

  appleButton = createButton("Red");
  appleButton.position(200,300);
  appleButton.style('background-color', '#F94848');
  appleButton.style('padding', '20px 40px');
  appleButton.style('font-size', '22px');
  //appleButton.mouseReleased(userInput = false);

  grapeButton = createButton("Purple");
  grapeButton.position(500,300);
  grapeButton.style('background-color', '#AA3DC8');
  grapeButton.style('padding', '20px 40px');
  grapeButton.style('font-size', '22px');
  //grapeButton.mouseReleased(userInput = true);

  orangeButton = createButton("Orange");
  orangeButton.position(800,300);
  orangeButton.style('backgorund-color', '#E57E25');
  orangeButton.style('padding', '20px 40px');
  orangeButton.style('font-size', '22px');
  //orangeButton.mouseReleased(userInput = false);

  if(userInput) {
    score++;
    level2();
  }

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