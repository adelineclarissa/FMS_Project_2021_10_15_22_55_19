function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#9BDEFB');

    // Home button
    homeButton = createButton("Home");
    homeButton.position(0,0);
    homeButton.mouseReleased(toHome);

    // Games buttons
    matchButton = createButton('Match the shape!')
    colorButton = createButton('Color Me Right!')
    traceButton = createButton('Tracing Game!')
    wordButton = createButton('Building Words!')
    
    matchButton.position(200,windowHeight*1/3);
    matchButton.style('background-color', '#E56365');
    
    colorButton.position(800,windowHeight*1/3)
    colorButton.style('background-color', '#FAD518');
    
    traceButton.position(200,windowHeight*2/3);
    traceButton.style('background-color', '#79DB87');
    
    wordButton.position(800,windowHeight*2/3);
    wordButton.style('background-color', '#62A2DD');
    
    matchButton.mousePressed(shapeGame)
    colorButton.mousePressed(colorGame)
    traceButton.mousePressed(traceGame)
    wordButton.mousePressed(wordGame)

}

function toHome() {
    window.location = "index.html";
}

function shapeGame(){
    window.location("matchtheshape.html");
}
  
function colorGame(){
  window.location("colormeright.html");
}
  
function traceGame(){
  window.location("tracinggame.html");
}
  
function wordGame(){
  window.location("buildingwords.html");
}  

