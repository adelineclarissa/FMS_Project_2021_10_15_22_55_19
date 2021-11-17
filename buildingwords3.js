let userAns = 99;
function preload() {

    earth =loadImage('assets/earth.png')
    oval=loadImage('assets/oval.png')

    correctAns = loadImage('assets/correct_building.png.jpg');
    wrongAns = loadImage('assets/wrong_building.png.jpg');

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
    backButton = createButton("Back");
    backButton.position(141,0);
    backButton.style('background-color', '#D3A6ED');
    backButton.style('padding', '20px 40px');
    backButton.style('font-size', '22px');
    backButton.mouseReleased(toMenu);
  
    // Text 
    textSize(40);
    myFont = loadFont('assets/BalsamiqSans-Bold.ttf');
    textFont(myFont);
    text("Can you guess the word ?", 200, 200);
  
    // formate : image, x axis , y axis , xsize , ysize
    image(earth, 430, 430, 200, 200);
    image(oval,800, 100, 600, 700);
    
  
    // Answer buttons 
    ansBox1 = createButton("E");
    ansBox1.position(100,250);
    ansBox1.style('background-color', '#FFD700');
    
  
    ansBox2 = createButton("A");
    ansBox2.position(250,250);
    ansBox2.style('background-color', '#FFD700');
  
    ansBox3 = createButton("R");
    ansBox3.position(400,250);
    ansBox3.style('background-color', '#FFD700');
    // ansBox3.style('font-size', '30px');
    // ansBox3.style('padding', '50px 60px');

    ansBox4 = createButton("T");
    ansBox4.position(550,250);
    ansBox4.style('background-color', '#FFD700');
    

    ansBox5 = createButton(" ");
    ansBox5.position(700,250);
    ansBox5.style('background-color', '#FFD700');
    ansBox5.style('font-size', '30px');
    ansBox5.style('padding', '50px 60px');
    
    
    // Letter Buttons 
    
    letterA = createButton("A");
    letterA.position(1000,500);
    letterA.style('background-color', '#FF4500');
    letterA.style('font-size', '30px');
    letterA.style('padding', '20px 20px');
    //letterA.mouseReleased(aPressed);
  
    letterB = createButton("B");
    letterB.position(1100,600);
    letterB.style('background-color', '#9ACD32');
    letterB.style('font-size', '30px');
    letterB.style('padding', '20px 20px');
    
  
    letterC = createButton("C");
    letterC.position(1200,400);
    letterC.style('background-color', '#FA8072');
    letterC.style('font-size', '30px');
    letterC.style('padding', '20px 20px');
  
    letterD = createButton("D");
    letterD.position(1200,500);
    letterD.style('background-color', '#20B2AA');
    letterD.style('font-size', '30px');
    letterD.style('padding', '20px 20px');
  
    letterE = createButton("E");
    letterE.position(1100,500);
    letterE.style('background-color', '#FF8C00');
    letterE.style('font-size', '30px');
    letterE.style('padding', '20px 20px');
  
    letterF= createButton("F");
    letterF.position(1100,400);
    letterF.style('background-color', '#FFDAB9');
    letterF.style('font-size', '30px');
    letterF.style('padding', '20px 20px');
  
    letterG = createButton("G");
    letterG.position(1000,600);
    letterG.style('background-color', '#98FB98');
    letterG.style('font-size', '30px');
    letterG.style('padding', '20px 20px');
  
    letterT = createButton("T");
    letterT.position(1200,600);
    letterT.style('background-color', '#FF8C00');
    letterT.style('font-size', '30px');
    letterT.style('padding', '20px 20px');
    //letterT.mouseReleased(tPressed);
  
    letterH= createButton("H");
    letterH.position(1000,400);
    letterH.style('background-color', '#ADD8E6');
    letterH.style('font-size', '30px');
    letterH.style('padding', '20px 20px');
    letterH.mouseReleased(hPressed);
  
    letterI = createButton("I");
    letterI.position(1000,300);
    letterI.style('background-color', '#ADFF2F');
    letterI.style('font-size', '30px');
    letterI.style('padding', '20px 20px');
  
    letterN = createButton("N");
    letterN.position(1100,300);
    letterN.style('background-color', '#B22222');
    letterN.style('font-size', '30px');
    letterN.style('padding', '20px 20px');
  
    letterP = createButton("P");
    letterP.position(1200,300);
    letterP.style('background-color', '#FFDAB9');
    letterP.style('font-size', '30px');
    letterP.style('padding', '20px 20px');

    
    letterQ = createButton("Q");
  letterQ.position(1100,200);
  letterQ.style('background-color', '#F87217');
  letterQ.style('font-size', '30px');
  letterQ.style('padding', '20px 20px');

  letterR = createButton("R");
  letterR.position(1200,200);
  letterR.style('background-color', '#REFAB8');
  letterR.style('font-size', '30px');
  letterR.style('padding', '20px 20px');

  letterS = createButton("S");
  letterS.position(1000,200);
  letterS.style('background-color', '#O99966');
  letterS.style('font-size', '30px');
  letterS.style('padding', '20px 20px');

  letterT = createButton("T");
  letterT.position(915,200);
  letterT.style('background-color', '#99FF66');
  letterT.style('font-size', '30px');
  letterT.style('padding', '20px 20px');

  letterU = createButton("U");
  letterU.position(900,300);
  letterU.style('background-color', '#990033');
  letterU.style('font-size', '30px');
  letterU.style('padding', '20px 20px');

  letterV = createButton("V");
  letterV.position(900,400);
  letterV.style('background-color', '#FFFF66');
  letterV.style('font-size', '30px');
  letterV.style('padding', '20px 20px');

  letterW = createButton("W");
  letterW.position(900,500);
  letterW.style('background-color', '#33FF33');
  letterW.style('font-size', '30px');
  letterW.style('padding', '20px 20px');

  letterX = createButton("X");
  letterX.position(910,600);
  letterX.style('background-color', '#003366');
  letterX.style('font-size', '30px');
  letterX.style('padding', '20px 20px');
    //window.location ="buildingwords2.html"
  
  
//     if( ansBox2 == letterA ){
//       window.location = "buildingWords2.html";
//     }

//   }
  
  
  
  function toHome() {
    window.location = "index.html";
  }
  
  function toMenu(){
    window.location = "menu.html";
  }
  
//   function aPressed() {
//     letterA.remove();
//     ansBox2.remove();
//     lettera = createButton("X");
//     lettera.position(500,250);
//   }
  
  function hPressed() {
    letterH.remove();
    ansBox5.remove();
    lettert = createButton("H");
    lettert.position(700,250);
    window.location ="menu.html"
  }
  // function cPressed() {
  //   letterC.remove();
  //   ansBox2.remove();
  //   letterC.createButton("T");
  //   letterC.position(350,250);
  // }
  
  
  
  // button colors
  // FF8C00 dark orange
  // 2F4F4F grey
  // ADD8E6 blue
  // E0FFFF lightBlue
  // 98FB98 paleGreen
  // FFDAB9 PEACH
}