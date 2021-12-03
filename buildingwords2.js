let userAns = 99;

function preload() {

    fox =loadImage('assets/fox.png')
    oval=loadImage('assets/oval.png')

    correctAns = loadImage('assets/correct_building.png.jpg');
  wrongAns = loadImage('assets/wrong_building.png.jpg');

  myFont = loadFont('assets/BalsamiqSans-Bold.ttf');

  }
  
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#9BDEEB');
  
    //home button
    homeButton = createButton("Home");
    homeButton.position(0,0);
    homeButton.style('background-color', '#00BFFF');
    homeButton.style('padding', '20px 40px');
    homeButton.style('font-size', '22px');
    homeButton.mouseReleased(toHome);
  
    // menu button
    backButton = createButton("Menu");
    backButton.position(140,0);
    backButton.style('background-color', '#D3A6ED');
    backButton.style('padding', '20px 40px');
    backButton.style('font-size', '22px');
    backButton.mouseReleased(toMenu);

    //Instructions button
  insButton = createButton("?");
  insButton.position(277, 0);
  insButton.style('background-color', '#00BFFF');
  insButton.style('padding', '20px 40px');
  insButton.style('font-size', '22px');
  insButton.mouseReleased(toInstructions);
  
    // Text 
    textSize(40);
    textFont(myFont);
    text("Can you guess the word ?", 200, 200);
  
    // formate : image, x axis , y axis , xsize , ysize
    image(fox, 430, 430, 200, 200);
    image(oval,800, 100, 600, 700);
    
  
    // Answer buttons 
    ansBox1 = createButton("F");
    ansBox1.position(200,250);
    ansBox1.style('background-color', '#FFD700');
    
  
    ansBox2 = createButton("O");
    ansBox2.position(350,250);
    ansBox2.style('background-color', '#FFD700');
    
  
    ansBox3 = createButton(" ");
    ansBox3.position(500,250);
    ansBox3.style('background-color', '#FFD700');
    ansBox3.style('font-size', '30px');
    ansBox3.style('padding', '50px 60px');
  
    
    
    // Letter Buttons 
    
  letterA = createButton("A");
  letterA.position(1000, 500);
  letterA.style('background-color', '#FF4500');
  letterA.style('font-size', '30px');
  letterA.style('padding', '20px 20px');
  //letterA.mouseReleased(aPressed);
  letterA.mouseReleased(wrongAnswer);

  letterB = createButton("B");
  letterB.position(1100, 600);
  letterB.style('background-color', '#9ACD32');
  letterB.style('font-size', '30px');
  letterB.style('padding', '20px 20px');
  letterB.mouseReleased(wrongAnswer);

  letterC = createButton("C");
  letterC.position(1200, 400);
  letterC.style('background-color', '#FA8072');
  letterC.style('font-size', '30px');
  letterC.style('padding', '20px 20px');
  letterC.mouseReleased(wrongAnswer);

  letterD = createButton("D");
  letterD.position(1200, 500);
  letterD.style('background-color', '#20B2AA');
  letterD.style('font-size', '30px');
  letterD.style('padding', '20px 20px');
  letterD.mouseReleased(wrongAnswer);

  letterE = createButton("E");
  letterE.position(1100, 500);
  letterE.style('background-color', '#FF8C00');
  letterE.style('font-size', '30px');
  letterE.style('padding', '20px 20px');
  letterE.mouseReleased(wrongAnswer);

  letterF = createButton("F");
  letterF.position(1100, 400);
  letterF.style('background-color', '#FFDAB9');
  letterF.style('font-size', '30px');
  letterF.style('padding', '20px 20px');
  letterF.mouseReleased(wrongAnswer);

  letterG = createButton("G");
  letterG.position(1000, 600);
  letterG.style('background-color', '#98FB98');
  letterG.style('font-size', '30px');
  letterG.style('padding', '20px 20px');
  letterG.mouseReleased(wrongAnswer);

  letterZ = createButton("Z");
  letterZ.position(1200, 600);
  letterZ.style('background-color', '#FF8C00');
  letterZ.style('font-size', '30px');
  letterZ.style('padding', '20px 20px');
  letterZ.mouseReleased(wrongAnswer);
  // letterT.mouseReleased(tPressed);

  letterH = createButton("H");
  letterH.position(1000, 400);
  letterH.style('background-color', '#ADD8E6');
  letterH.style('font-size', '30px');
  letterH.style('padding', '20px 20px');
  letterH.mouseReleased(wrongAnswer);

  letterI = createButton("I");
  letterI.position(1000, 300);
  letterI.style('background-color', '#ADFF2F');
  letterI.style('font-size', '30px');
  letterI.style('padding', '20px 20px');
  letterI.mouseReleased(wrongAnswer);

  letterN = createButton("N");
  letterN.position(1100, 300);
  letterN.style('background-color', '#9ACD32');
  letterN.style('font-size', '30px');
  letterN.style('padding', '20px 20px');
  letterN.mouseReleased(wrongAnswer);

  letterP = createButton("P");
  letterP.position(1200, 300);
  letterP.style('background-color', '#FFDAB9');
  letterP.style('font-size', '30px');
  letterP.style('padding', '20px 20px');
  letterP.mouseReleased(wrongAnswer);

  letterQ = createButton("Q");
  letterQ.position(1100, 200);
  letterQ.style('background-color', '#F87217');
  letterQ.style('font-size', '30px');
  letterQ.style('padding', '20px 20px');
  letterQ.mouseReleased(wrongAnswer);

  letterR = createButton("R");
  letterR.position(1200, 200);
  letterR.style('background-color', '#REFAB8');
  letterR.style('font-size', '30px');
  letterR.style('padding', '20px 20px');
  letterR.mouseReleased(wrongAnswer);

  letterS = createButton("S");
  letterS.position(1000, 200);
  letterS.style('background-color', '#O99966');
  letterS.style('font-size', '30px');
  letterS.style('padding', '20px 20px');
  letterS.mouseReleased(wrongAnswer);

  letterT = createButton("T");
  letterT.position(915, 200);
  letterT.style('background-color', '#99FF66');
  letterT.style('font-size', '30px');
  letterT.style('padding', '20px 20px');
  letterT.mouseReleased(wrongAnswer);

  letterU = createButton("U");
  letterU.position(900, 300);
  letterU.style('background-color', '#FF8C00');
  letterU.style('font-size', '30px');
  letterU.style('padding', '20px 20px');
  letterU.mouseReleased(wrongAnswer);

  letterV = createButton("V");
  letterV.position(900, 400);
  letterV.style('background-color', '#FFFF66');
  letterV.style('font-size', '30px');
  letterV.style('padding', '20px 20px');
  letterV.mouseReleased(wrongAnswer);

  letterW = createButton("W");
  letterW.position(900, 500);
  letterW.style('background-color', '#33FF33');
  letterW.style('font-size', '30px');
  letterW.style('padding', '20px 20px');
  letterW.mouseReleased(wrongAnswer);

  letterX = createButton("X");
  letterX.position(910, 600);
  letterX.style('background-color', '#FA8072');
  letterX.style('font-size', '30px');
  letterX.style('padding', '20px 20px');
  letterX.mouseReleased(correctAnswer);
  }
  
  function toHome() {
    window.location = "index.html";
  }
  
  function toMenu(){
    window.location = "menu.html";
  }
  
  function toInstructions() {
    window.location = "instructions.html"
  }

function level2() {
  window.location = "buildingwords2.html";
}

function level3() {
  window.location = "buildingwords3.html";
}

function correctAnswer() {

  // letterA.remove();
  // ansBox2.remove();
  // lettera = createButton("A");
  // lettera.position(350,250);
  // remove the buttons
  // remove ansBox buttons
  ansBox1.remove();
  ansBox2.remove();
  ansBox3.remove();
  letterA.remove();
  letterB.remove();
  letterC.remove();
  letterD.remove();
  letterE.remove();
  letterF.remove();
  letterG.remove();
  letterH.remove();
  letterI.remove();
  letterN.remove();
  letterP.remove();
  letterQ.remove();
  letterR.remove();
  letterS.remove();
  letterT.remove();
  letterU.remove();
  letterV.remove();
  letterW.remove();
  letterX.remove();
  letterZ.remove();


  // display "correct" window
  imageMode(CORNER);
  image(correctAns, 0, 0, windowWidth, windowHeight);

  // change userAnswer to 1
  userAns = 1;
}

function wrongAnswer() {

  // remove the letter buttons
  ansBox1.remove();
  ansBox2.remove();
  ansBox3.remove();
  letterA.remove();
  letterB.remove();
  letterC.remove();
  letterD.remove();
  letterE.remove();
  letterF.remove();
  letterG.remove();
  letterH.remove();
  letterI.remove();
  letterN.remove();
  letterP.remove();
  letterQ.remove();
  letterR.remove();
  letterS.remove();
  letterT.remove();
  letterU.remove();
  letterV.remove();
  letterW.remove();
  letterX.remove();
  letterZ.remove();


  // display "wrong" window
  imageMode(CORNER);
  image(wrongAns, 0, 0, windowWidth, windowHeight);

  // when clicked, stay in level 2
  userAns = 0;
}


  

function mousePressed() {
  if (userAns == 1) {
    level3();
  }
  else if (userAns == 0) {
    level2();
  }
}


