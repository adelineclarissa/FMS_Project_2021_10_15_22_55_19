let home_button;

function preload() {
  home_button = loadImage('assets/home.png')
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#9BDEEB');

    imageMode(CORNER);
    image(bg, 0, 0, 20, 20);

    homeButton = createButton("Home");
    homeButton.position(0,0);
    homeButton.mouseReleased(toHome);
  
  }
  
  function toHome() {
    window.location = "index.html";
  }