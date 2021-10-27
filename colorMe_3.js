let apple, orange, avocado, banana, grape, coconuts, dragonFruit; // for the images
let myFont; // for the font

function preload() {

    // Load images
    apple = loadImage('assets/apple.png');
    avocado = loadImage('assets/avocado.png');
    orange = loadImage('assets/orange.png');
    banana = loadImage('assets/banana.png');
    grape = loadImage('assets/grape.png');
    coconuts = loadImage('assets/coconuts.png');
    dragonFruit = loadImage('assets/dragon-fruit.png');
  
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
    image(dragonFruit, 500, 400, 200, 200);
    image(coconuts, 800, 400, 200, 200);

    appleButton = createButton("Red");
    appleButton.position(200,300);
    appleButton.style('background-color', '#E23D3D');
    appleButton.style('padding', '20px 40px');
    appleButton.style('font-size', '22px');
    appleButton.mouseReleased(rightAnswer);

    grapeButton = createButton("Pink");
    grapeButton.position(500,300);
    grapeButton.style('background-color', '#D73474');
    grapeButton.style('padding', '20px 40px');
    grapeButton.style('font-size', '22px');
    grapeButton.mouseReleased(wrongAnswer);

    orangeButton = createButton("Brown");
    orangeButton.position(800,300);
    orangeButton.style('background-color', '#A46A43');
    orangeButton.style('padding', '20px 40px');
    orangeButton.style('font-size', '22px');
    orangeButton.mouseReleased(wrongAnswer);

  }

  function rightAnswer() {
    // If the user picked the correct answer,
    // a positive tone will play
    // and the end screen will show

    //endScreen();
  }
  
  function wrongAnswer() {
    // If user picked the wrong answer, do nothing (for now)
  }
  
  function toHome() {
    window.location = "index.html";
  }