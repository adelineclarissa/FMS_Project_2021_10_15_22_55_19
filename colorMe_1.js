let userAnswer = 99; // to keep track of the user's answer
                    // 0 if the user pick the wrong answer
                    // 1 if the user pick the correct answer

function preload() {

  // Load images
  option1 = loadImage('assets/apple.png');
  option2 = loadImage('assets/grape.png');
  option3 = loadImage('assets/orange.png'); 
  question = loadImage('assets/balloon.png');
  
  correct = loadImage('assets/correct.png');
  wrong = loadImage('assets/wrong.png');

  // Load font
  myFont = loadFont('assets/BalsamiqSans-Bold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#9BDEEB');

  // home button
  homeButton = createButton("Home");
  homeButton.position(0,0);
  homeButton.style('background-color', '#D3A6ED');
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
  text('Which object has the same\ncolor as the balloon?', 200, 200);

  // format: image, x, y, sizex, sizey
  image(option1, 0.1*windowWidth, 0.6*windowHeight, 200, 200);
  image(option2, 0.3*windowWidth, 0.6*windowHeight, 200, 200);
  image(option3, 0.5*windowWidth, 0.6*windowHeight, 200, 200);
  image(question, 0.7*windowWidth, 0.1*windowHeight, 300, 300);

  button1 = createButton("Red");
  button1.position(0.1*windowWidth,0.45*windowHeight);
  button1.style('background-color', '#F94848');
  button1.style('padding', '20px 40px');
  button1.style('font-size', '22px');
  button1.mouseReleased(correctAnswer);

  button2 = createButton("Purple");
  button2.position(0.3*windowWidth,0.45*windowHeight);
  button2.style('background-color', '#AA3DC8');
  button2.style('padding', '20px 40px');
  button2.style('font-size', '22px');
  button2.mouseReleased(wrongAnswer);

  button3 = createButton("Orange");
  button3.position(0.5*windowWidth,0.45*windowHeight);
  button3.style('background-color', '#E57E25');
  button3.style('padding', '20px 40px');
  button3.style('font-size', '22px');
  button3.mouseReleased(wrongAnswer);

}

function toHome() {
  window.location = "index.html";
}

function toMenu() {
  window.location = "menu.html";
}

function level1() {
  window.location = "colorMe_1.html";
}

function level2() {
  window.location = "colorMe_2.html";
}

function correctAnswer() {
  // remove the buttons
  button1.remove();
  button2.remove();
  button3.remove();

  // display "correct" window
  imageMode(CORNER);
  image(correct, 0, 0, windowWidth, windowHeight);

  // change userAnswer to 1
  userAnswer = 1;
}

function wrongAnswer() {
   // remove the buttons
   button1.remove();
   button2.remove();
   button3.remove();

   // display "wrong" window
   imageMode(CORNER);
   image(wrong, 0, 0, windowWidth, windowHeight);

   // when clicked, stay in level 2
   userAnswer = 0;
}

function mousePressed() {
  if (userAnswer == 1) {
     level2();
   }
  else if (userAnswer == 0) {
    level1();
  }
}
