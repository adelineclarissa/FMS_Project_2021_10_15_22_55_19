function preload(){
    myFont = loadFont('assets/BalsamiqSans-Bold.ttf');

    correct = loadImage('assets/correct.png');
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
  
    // back button
    backButton = createButton("Back");
    backButton.position(141,0);
    backButton.style('background-color', '#F2BCD6');
    backButton.style('padding', '20px 40px');
    backButton.style('font-size', '22px');
    backButton.mouseReleased(toMenu);

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
  textSize(60);
  textFont(myFont);

  text('Did you really finish your drawing? Do not lie!!', windowWidth*.2, windowHeight*.3)

}

function toMenu(){
    window.location = "menu.html";
}
  
  function toHome() {
    window.location = "index.html";
}

function restartlevel(){
    window.location = "tracinggame_3.html";
}

function nextlevel(){
    noButton.remove();
    yesButton.remove();
    imageMode(CORNER);
    image(correct, 0, 0, windowWidth, windowHeight);
}