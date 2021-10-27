function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#9BDEEB');

  homeButton = createButton("Home");
  homeButton.position(0,0);
  homeButton.mouseReleased(toHome);

  resetButton = createButton("Home");
  homebutton.position(windowWidth, windowHeight)
  homebutton.mousePressed(clearCanvas);
}

function clearCanvas(){
  clear();
}

function toHome() {
  window.location = "index.html";
}

function mouseDragged(){
  fill('black');
	ellipse(mouseX, mouseY, 20, 20); 
}