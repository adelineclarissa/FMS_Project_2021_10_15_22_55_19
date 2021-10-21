function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#9BDEFB');

    matchButton = createButton('Match the shape!')
    colorButton = createButton('Color Me Right!')
    traceButton = createButton('Tracing Game!')
    wordButton = createButton('Building Words!')
    
    matchButton.position(windowWidth*1/3,windowHeight*1/3);
    matchButton.style('background-color', '#E56365');
    
    colorButton.position(windowWidth*2/3,windowHeight*1/3)
    colorButton.style('background-color', '#FAD518');
    
    traceButton.position(windowWidth*1/3,windowHeight*2/3);
    traceButton.style('background-color', '#79DB87');
    
    wordButton.position(windowWidth*2/3,windowHeight*2/3);
    wordButton.style('background-color', '#62A2DD');
    
    matchButton.mousePressed(shapeGame)
    colorButton.mousePressed(colorGame)
    traceButton.mousePressed(traceGame)
    wordButton.mousePressed(wordGame)

}

function shapeGame(){
  window.location = "matchtheshape.html"
  }
  
function colorGame(){
  window.location = "colormeright.html"
}
  
function traceGame(){
  window.location = "tracinggame.html"
}
  
function wordGame(){
  window.location = "buildingwords.html"
}  

