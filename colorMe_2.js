let apple, orange, avocado, banana, grape; // for the images
let myFont; // for the font

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
    image(banana, 200, 400, 200, 200);
    image(orange, 500, 400, 200, 200);
    image(avocado, 800, 400, 200, 200);

    appleButton = createButton("Yellow");
    appleButton.position(200,300);
    appleButton.style('background-color', '#FED330');
    appleButton.style('padding', '20px 40px');
    appleButton.style('font-size', '22px');
    appleButton.mouseReleased(rightAnswer);

    grapeButton = createButton("Orange");
    grapeButton.position(500,300);
    grapeButton.style('background-color', '#E57E25');
    grapeButton.style('padding', '20px 40px');
    grapeButton.style('font-size', '22px');
    grapeButton.mouseReleased(wrongAnswer);

    orangeButton = createButton("Green");
    orangeButton.position(800,300);
    orangeButton.style('background-color', '#50761E');
    orangeButton.style('padding', '20px 40px');
    orangeButton.style('font-size', '22px');
    orangeButton.mouseReleased(wrongAnswer);

  }

  function rightAnswer() {
    // If the user picked the correct answer,
    // a positive tone will play
    // and the app will go to the next level
    level3(); 
  }
  
  function wrongAnswer() {
    // If user picked the wrong answer, do nothing (for now)
  }
  
  function toHome() {
    window.location = "index.html";
  }

  function level3() {
    window.location = "colorMe_3.html";
  }