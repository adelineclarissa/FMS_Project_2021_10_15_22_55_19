let timer = 30

function preload() {
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

  resetButton = createButton("Reset");
  resetButton.position(1720, 850);
  resetButton.style('background-color', '#F2BCD6');
  resetButton.style('padding', '20px 40px');
  resetButton.style('font-size', '22px');
  resetButton.mouseReleased(clearCanvas);

  //check Button
  checkButton = createButton("Done!");
  checkButton.position(.925*windowWidth, 0*windowHeight);
  checkButton.style('background-color', '#F2BCD6');
  checkButton.style('padding', '20px 40px');
  checkButton.style('font-size', '22px');
  checkButton.mouseReleased(tolevel2);

  fill('green');
  textSize(40);
  textFont(myFont);
  text('Draw a big and yummy cookie! You have 30 seconds', 450, 80)
}

function draw(){
  textSize(100);
  textFont(myFont);
  text(timer, 460, 500);
  fill('black');
  if (frameCount % 60 == 0 && timer > 0) {
    fill('#9BDEEB');
    noStroke();
    rect(460, 420, 120, 120);
    timer --;
  }

  if (timer == 0){
   imageMode(CORNER);
   image(wrong, 0, 0, windowWidth, windowHeight);
  }

}

function clearCanvas(){
  clear();
  background('#9BDEEB');
}

function toMenu(){
  window.location = "menu.html"
}

function toHome() {
  window.location = "index.html";
}

function mouseDragged(){
  fill('black');
	ellipse(mouseX, mouseY, 20, 20); 
}

function tolevel2(){
  window.location = "liecheck.html";
}

function toInstructions() {
  window.location = "instructions.html"
}