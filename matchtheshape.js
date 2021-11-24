let shape1, shape2;

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

  //level 1
  ellipse(windowWidth/2,windowHeight*(1/4), 250,250);
  circle1 = createButton("circle");
  circle1.position(350,400);
  let rect1 = createButton("square")
  rect1.position(600,400)
  let triangle1 = createButton("triangle")
  triangle1.position(850,400)

  circle1.mouseReleased(correct)

}
function draw(){
  let circle1;
  let x = window.innerWidth;
  let y = window.innerHeight;
  //let missingShape = random(1,2,3);
  var shapeIndex = Math.random(2);
  /*
  switch (shapeIndex)
  {
     case 
      0:
      ellipse(windowWidth/2,windowHeight*(1/4), 250,250);
      circle1 = createButton("circle");
      circle1.position(windowWidth*(1/3),windowHeight(2/3))
      break;
    case 
      1:
      Rect(windowWidth/2,windowHeight*(1/4),200,200);
      break;
    case 
      2:
      triangle(windowWidth*(2/5),windowHeight*(1/2),windowWidth*(3/5),windowHeight*(1/2),windowWidth*(1/2),windowHeight*(1/3));
      break;
  }*/
}
function correct(){
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
  
    //level 1
    ellipse(windowWidth/2,windowHeight*(1/4), 250,250);
    circle1 = createButton("circle");
    circle1.position(350,400);
    let rect1 = createButton("square")
    rect1.position(600,400)
    let triangle1 = createButton("triangle")
    triangle1.position(850,400)
}

function toHome() {
  window.location = "index.html";
}

function toMenu() {
  window.location = "menu.html";
}
