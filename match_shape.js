function setup() {
    homeButton = createButton("Home");
    homeButton.position(0,0);
    homeButton.mouseReleased(toHome);
}

function toHome() {
    window.location = "menu.html";
}