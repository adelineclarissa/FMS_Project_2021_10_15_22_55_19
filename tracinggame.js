function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#9BDEEB');

  homeButton = createButton("Home");
  homeButton.position(0,0);
  homeButton.mouseReleased(toHome);

  resetButton = createButton("Reset");
  resetButton.position(800, 0);
  resetButton.mouseReleased(clearCanvas);
}

function clearCanvas(){
  clear();
  background('#9BDEEB');
}

function toHome() {
  window.location = "index.html";
}

function mouseDragged(){
  fill('black');
	ellipse(mouseX, mouseY, 20, 20); 
}