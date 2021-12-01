let bx;
let by;
let boxSize = 75;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;
let s_fill = '#999999'; // the color of the shadow
let user_answer = 999;

function preload() {

  correct = loadImage('assets/correct_next.png');
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
    homeButton.style('padding', '20px 40px');
    homeButton.style('font-size', '22px');
    homeButton.mouseReleased(toHome);
  
    // back button
    backButton = createButton("Menu");
    backButton.position(140,0);
    backButton.style('background-color', '#F2BCD6');
    backButton.style('padding', '20px 40px');
    backButton.style('font-size', '22px');
    backButton.mouseReleased(toMenu);

    bx = width / 2;
    by = height / 1.5;
    rectMode(RADIUS);
    strokeWeight(2);
}

function draw() {
    background('#9BDEEB');

    textSize(30);
    textFont(myFont);
    fill('black');
    text('Drag and drop the red box to the grey box!', windowWidth*1/5, 130);

    fill(s_fill)
    s_rect = rect(400,height/3,boxSize,boxSize);
    fill('#999999')
    s_ellipse = ellipse(730,height/3,boxSize*2,boxSize*2);
    fill('#999999')
    s_triangle = triangle(950,height*(2.3/5),1200,height*(2.3/5),1075,height/5)
  
    // Test if the cursor is over the box
    if (
      mouseX > bx - boxSize &&
      mouseX < bx + boxSize &&
      mouseY > by - boxSize &&
      mouseY < by + boxSize
    ) {
      overBox = true;
      if (!locked) {
        fill(244, 122, 158);
      }
    } else {
      fill(244, 122, 158);
      overBox = false;
    }

  // Draw the rectangle 
  fill('#E56365')
  rect1 = rect(bx, by, boxSize, boxSize);

  if (user_answer == 0) {
    wrongAnswer();
  }

  else if(user_answer == 1) {
    correctAnswer();
  }

}

function mousePressed() {
  if (overBox) {
    locked = true;
    fill(255, 255, 255);
  } else {
    locked = false;
  }
  xOffset = mouseX - bx;
  yOffset = mouseY - by;

  }

function mouseDragged() {
  if (locked) {
    bx = mouseX - xOffset;
    by = mouseY - yOffset;
  }
}

function mouseReleased() {
  locked = false;

  // if the box is released over the correct shadow
  if (
    mouseX > 400 - boxSize &&
    mouseX < 400 + boxSize &&
    mouseY > height/3 - boxSize &&
    mouseY < height/3 + boxSize
  )
     {
       s_fill = ('#E56365');
       user_answer = 1; // the user picked the correct answer
       
     }

   
}

function toMenu(){
    window.location = "menu.html"
}
  
function toHome() {
    window.location = "index.html";
}

function wrongAnswer() {
  imageMode(CORNER);
  image(wrong, 0, 0, windowWidth, windowHeight);
}

function correctAnswer() {
  imageMode(CORNER);
  image(correct, 0, 0, windowWidth, windowHeight);

  nextButton = createButton("NEXT");
  nextButton.position(windowWidth*4/5, windowHeight*4/5);
  nextButton.mousePressed(level2);

}

function level2() {
  
}

function level1() {
  window.location = "matchtheshape.html"
}
