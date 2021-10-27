let score = 0;  // to keep track of scores
let apple, orange, avocado, banana, grape; // for the images
let myFont; // for the font
let message; // to display message, UNUSED

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

  // home button
  homeButton = createButton("Home");
  homeButton.position(0,0);
  homeButton.style('padding', '20px 40px');
  homeButton.style('font-size', '22px');
  homeButton.mouseReleased(toHome);

  // menu button
  menuButton = createButton("Menu");
  menuButton.position(150,0);
  menuButton.style('background-color', '#F2BCD6');
  menuButton.style('padding', '20px 40px');
  menuButton.style('font-size', '22px');
  menuButton.mouseReleased(toMenu);

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
  appleButton.mouseReleased(wrongAnswer);

  grapeButton = createButton("Purple");
  grapeButton.position(500,300);
  grapeButton.style('background-color', '#AA3DC8');
  grapeButton.style('padding', '20px 40px');
  grapeButton.style('font-size', '22px');
  grapeButton.mouseReleased(rightAnswer);

  orangeButton = createButton("Orange");
  orangeButton.position(800,300);
  orangeButton.style('background-color', '#E57E25');
  orangeButton.style('padding', '20px 40px');
  orangeButton.style('font-size', '22px');
  orangeButton.mouseReleased(wrongAnswer);

}

function rightAnswer() {
  // If the user picked the correct answer,
  // a positive tone will play
  // and the app will go to the next level
  level2(); 
}

function wrongAnswer() {
  // If user picked the wrong answer, do nothing (for now)
}

function toHome() {
  window.location = "index.html";
}

function toMenu() {
  window.location = "menu.html";
}

function level2() {
  window.location = "colorMe_2.html";
}