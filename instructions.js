let bg;

function preload() {
  bg = loadImage('assets/Instructions.png');    
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CORNER);
    image(bg, 0, 0, windowWidth, windowHeight);

    // home button
    homeButton = createButton("Home");
    homeButton.position(0,0);
    homeButton.style('padding', '20px 40px');
    homeButton.style('font-size', '22px');
    homeButton.style('background-color', '#D3A6ED');
    homeButton.mouseReleased(toHome);

     // menu button
     menuButton = createButton("Menu");
     menuButton.position(140,0);
     menuButton.style('padding', '20px 40px');
     menuButton.style('font-size', '22px');
     menuButton.mouseReleased(toMenu);

  }
  
  function toHome() {
    window.location = "index.html";
  }

  function toMenu() {
    window.location = "menu.html";
  }