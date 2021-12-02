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
  correctAns = loadImage('assets/correct_building.png.jpg');
  wrongAns = loadImage('assets/wrong_building.png.jpg');
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
    fill('#999999')
    s_ellipse = ellipse(730,height/3,boxSize*2,boxSize*2);
    fill('#999999')
    s_triangle = triangle(950,height*(2.3/5),1200,height*(2.3/5),1075,height/5)
  
    // Test if the cursor is over the box
    if (
      mouseX > bx - boxSize*2 &&
      mouseX < bx + boxSize*2 &&
      mouseY > by - boxSize*2 &&
      mouseY < by + boxSize*2
    ) {
      overBox = true;
      if (!locked) {
        fill(244, 122, 158);
      }
    } else {
      fill(244, 122, 158);
      overBox = false;
    }

  // Draw the ellipse
  fill('#E56365')
  elli1 = ellipse(bx,by,boxSize*2,boxSize*2);

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

  // if the circle is released over the correct shadow
  if (
    mouseX > 400 - boxSize &&
    mouseX < 400 + boxSize &&
    mouseY > height/3 - boxSize &&
    mouseY < height/3 + boxSize
  )
     {
       s_fill = ('#E56365');
       user_answer = 1;
       
     }

   
}

function toMenu(){
    window.location = "menu.html"
}
  
function toHome() {
    window.location = "index.html";
}