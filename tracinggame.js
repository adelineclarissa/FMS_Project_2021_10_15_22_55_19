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
  backButton.position(1720,0);
  backButton.style('background-color', '#F2BCD6');
  backButton.style('padding', '20px 40px');
  backButton.style('font-size', '22px');
  backButton.mouseReleased(toMenu);

  resetButton = createButton("Reset");
  resetButton.position(1600, 800);
  resetButton.style('background-color', '#F2BCD6');
  resetButton.style('padding', '20px 40px');
  resetButton.style('font-size', '22px');
  resetButton.mouseReleased(clearCanvas);
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