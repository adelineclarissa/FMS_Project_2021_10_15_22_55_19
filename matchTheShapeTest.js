let bx;
let by;
let boxSize = 75;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;
let s_fill = 'black'; // the color of the shadow

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
    backButton = createButton("Home");
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

    fill(s_fill)
    s_rect = rect(400,height/3,boxSize,boxSize);
    fill('black')
    s_ellipse = ellipse(730,height/3,boxSize*2,boxSize*2);
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
       s_fill = ('red');
      
       
     }

   
}

function toMenu(){
    window.location = "menu.html"
}
  
function toHome() {
    window.location = "index.html";
}