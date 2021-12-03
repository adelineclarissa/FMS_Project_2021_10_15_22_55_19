function preload(){
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
  insButton.position(275, 0);
  insButton.style('background-color', '#00BFFF');
  insButton.style('padding', '20px 40px');
  insButton.style('font-size', '22px');
  insButton.mouseReleased(toInstructions);

    //Yes button
    yesButton = createButton("Yes");
    yesButton.position(730, 550);
    yesButton.style('background-color', '#F2BCD6');
    yesButton.style('padding', '20px 40px');
    yesButton.style('font-size', '40px');
    yesButton.mouseReleased(nextlevel);

    //No button
    noButton = createButton("No");
    noButton.position(920, 550);
    noButton.style('background-color', '#F2BCD6');
    noButton.style('padding', '20px 40px');
    noButton.style('font-size', '40px');
    noButton.mouseReleased(restartlevel);

  fill('green');
  textSize(50);
  textFont(myFont);

  text('Did you really finish your drawing? Do not lie!!', windowWidth*.2, windowHeight*.3)

}

function toMenu(){
    window.location = "menu.html";
}
  
  function toHome() {
    window.location = "index.html";
}

function toInstructions() {
  window.location = "instructions.html";
}

function restartlevel(){
    window.location = "tracinggame.html";
}

function nextlevel(){
    window.location = "tracinggame_2.html";
}

