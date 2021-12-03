let userAnswer = 99; // to keep track of the user's answer
                    // 0 if the user pick the wrong answer
                    // 1 if the user pick the correct answer

function preload() {

    // Load images
    option1 = loadImage('assets/banana.png');
    option2 = loadImage('assets/orange.png');
    option3 = loadImage('assets/avocado.png');
    question = loadImage('assets/star.png');

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
    menuButton.position(140,0);
    menuButton.style('background-color', '#F2BCD6');
    menuButton.style('padding', '20px 40px');
    menuButton.style('font-size', '22px');
    menuButton.mouseReleased(toMenu);

    //Instruction button
    insButton = createButton("?");
    insButton.position(277, 0);
    insButton.style('background-color', '#00BFFF');
    insButton.style('padding', '20px 40px');
    insButton.style('font-size', '22px');
    insButton.mouseReleased(toInstructions);

    textSize(40);
    textFont(myFont);
    text('Which object has the same\ncolor as the star?', 0.1*windowWidth, 0.13*windowWidth);

    // format: image, x, y, sizex, sizey
    image(option1, 0.1*windowWidth, 0.6*windowHeight, 200, 200);
    image(option2, 0.3*windowWidth, 0.6*windowHeight, 200, 200);
    image(option3, 0.5*windowWidth, 0.6*windowHeight, 200, 200);
    image(question, 0.7*windowWidth, 0.1*windowHeight, 300, 300);

    button1 = createButton("Yellow");
    button1.position(0.1*windowWidth,0.45*windowHeight);
    button1.style('background-color', '#FED330');
    button1.style('padding', '20px 40px');
    button1.style('font-size', '22px');
    button1.mouseReleased(correctAnswer);

    button2 = createButton("Orange");
    button2.position(0.3*windowWidth,0.45*windowHeight);
    button2.style('background-color', '#E57E25');
    button2.style('padding', '20px 40px');
    button2.style('font-size', '22px');
    button2.mouseReleased(wrongAnswer);

    button3 = createButton("Green");
    button3.position(0.5*windowWidth,0.45*windowHeight);
    button3.style('background-color', '#50761E');
    button3.style('padding', '20px 40px');
    button3.style('font-size', '22px');
    button3.mouseReleased(wrongAnswer);

  }

  function correctAnswer() {
    // remove the buttons
    button1.remove();
    button2.remove();
    button3.remove();

    // display "correct" window
    imageMode(CORNER);
    img = image(correct, 0, 0, windowWidth, windowHeight);

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

  function toHome() {
    window.location = "index.html";
  }

  function toMenu() {
    window.location = "menu.html";
  }

  function level2() {
    window.location = "colorMe_2.html";
  }

  function level3() {
    window.location = "colorMe_3.html";
  }

  function mousePressed() {
    if (userAnswer == 1) {
       level3();
     }
    else if (userAnswer == 0) {
      level2();
    }
  }

  function toInstructions() {
    window.location = "instructions.html"
  }