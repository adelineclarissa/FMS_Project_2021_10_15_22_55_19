let bx;
let by;
let boxSize = 75;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;

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

    bx = width / 2;
    by = height / 1.5;
    rectMode(RADIUS);
    strokeWeight(2);
}

function draw() {
    background('#9BDEEB');
    fill('black')
  blackRect = rect(400,height/3,boxSize,boxSize);
  ellipse(730,height/3,boxSize*2,boxSize*2);
  triangle(950,height*(2.3/5),1200,height*(2.3/5),1075,height/5)
  
  // Test if the cursor is over the box
  if (
    mouseX > bx - boxSize &&
    mouseX < bx + boxSize &&
    mouseY > by - boxSize &&
    mouseY < by + boxSize
  ) {
    overBox = true;
    if (!locked) {
      //stroke(255);
      fill(244, 122, 158);
    }
    
    // if the box is on top of the correct shadow
    if (mouseX > bx - boxSize &&
        mouseX < bx + boxSize &&
        mouseY > by - boxSize &&
        mouseY < by + boxSize)
    {overBox = true;
    if (!locked) {
      stroke(255);
      fill(244, 122, 158);
    }
  } else {
    //stroke(156, 39, 176);
    fill(244, 122, 158);
    overBox = false;
  }

  // Draw the box
  fill('red')
  rect1 = rect(bx, by, boxSize, boxSize);


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
  }

function mouseDragged() {
  if (locked) {
    bx = mouseX - xOffset;
    by = mouseY - yOffset;
  }
}

function mouseReleased() {
    if(mouseX < 475 &
        mouseX > 400 &
        mouseY > (height/3) &
        mouseY < (height*(9/20)) &
        locked == true
        )
    { 
        delete rect1
        fill('red')
        blackRect;}
        else{
  locked = false;
        }
}
function toMenu(){
    window.location = "menu.html"
}
  
function toHome() {
    window.location = "index.html";
}