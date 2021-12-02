let timer = 30

function preload(){
  wrong = loadImage('assets/wrong.png');

  myFont = loadFont('assets/BalsamiqSans-Bold.ttf');
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  background('#9BDEEB');

  // home button
  homeButton = createButton("Home");
  homeButton.position(0*windowWidth,0*windowHeight);
  homeButton.style('padding', '20px 40px');
  homeButton.style('font-size', '22px');
  homeButton.mouseReleased(toHome);

  // back button
  backButton = createButton("Back");
  backButton.position(.075*windowWidth,0*windowHeight);
  backButton.style('background-color', '#F2BCD6');
  backButton.style('padding', '20px 40px');
  backButton.style('font-size', '22px');
  backButton.mouseReleased(toMenu);

  //reset Button
  resetButton = createButton("Reset");
  resetButton.position(.925*windowWidth, .92*windowHeight);
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
  checkButton.mouseReleased(tolevel3);

  fill('green');
  textSize(50);
  textFont(myFont);
  text('Draw a toasty pizza! You have 30 seconds', 450, 80)
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

/*function checkAnswer(x, y, myWidth, myHeight){
  //print(x + " " + y + " " + myWidth + " " + myHeight);
  let black = color(0,0,0,255);
  let passStatus = false;
  let mycolor;
  let currentcolor;

  for(let i = x; i < (x + myWidth); i++){
    for(let j = y; j < (y + myHeight); j++){
      mycolor = get(i, j);
      print(mycolor);
      //currentcolor = color(mycolor);
      if(mycolor.toString() != black.toString()){
        passStatus = false;
      }
    }
  }
  if(passStatus === true){
    clear();
  }
}*/

function clearCanvas(){
  clear();
  setup();
  timer = 30;
}

function toMenu(){
  window.location = "menu.html"
}

function toHome() {
  window.location = "index.html";
}

function mouseDragged(){
  fill(0,0,0,255);
	ellipse(mouseX, mouseY, 20, 20); 
}

function tolevel3(){
    window.location = "liecheck_2.html";
  }