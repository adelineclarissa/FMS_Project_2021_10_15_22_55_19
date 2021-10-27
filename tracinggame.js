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
  backButton.position(100,0);
  backButton.style('background-color', '#F2BCD6');
  backButton.style('padding', '20px 40px');
  backButton.style('font-size', '22px');
  backButton.mouseReleased(toMenu);

}

function toHome() {
  window.location = "index.html";
}