let bx;
let by;
let boxSize = 75;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;
let s_fill = '#999999'; // the color of the shadow

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

  // Draw the ellipse
  fill('#E56365')
  elli1 = ellipse(730,height/1.25,boxSize*2,boxSize*2);

}

function mousePressed() {
  if (overBox) {
    locked = true;
    fill(255, 255, 255);
  } else {
    locked = false;
  }
  xOffset = mouseX - 730;
  yOffset = mouseY - (height/1.25);

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
      imageMode(CORNER);
      image(correct, 0, 0, windowWidth, windowHeight);
       
     }

   
}

function toMenu(){
    window.location = "menu.html"
}
  
function toHome() {
    window.location = "index.html";
}

function toInstructions() {
  window.location = "instructions.html"
}