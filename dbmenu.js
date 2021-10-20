function setup() {
  createCanvas(600, 600);
  background('#9BDEEB');
  matchButton = createButton('Match the shape!')
  colorButton = createButton('Color Me Right!')
  traceButton = createButton('Tracing Game!')
  wordButton = createButton('Building Words!')
  
  matchButton.position(50,100)
  matchButton.style('background-color', '#E56365')
  matchButton.style('font-size', '20px')
  matchButton.style('border-radius', '16px')
  matchButton.style('padding', '15px')
  matchButton.style('border', 'none')
  
  colorButton.position(350,100)
  colorButton.style('background-color', '#FAD518')
  colorButton.style('font-size', '20px')
  colorButton.style('border-radius', '16px')
  colorButton.style('padding', '15px')
  colorButton.style('border', 'none')
  
  traceButton.position(50,400)
  traceButton.style('background-color', '#79DB87')
  traceButton.style('font-size', '20px')
  traceButton.style('border-radius', '16px')
  traceButton.style('padding', '15px')
  traceButton.style('border', 'none')
  
  wordButton.position(350,400)
  wordButton.style('background-color', '#62A2DD')
  wordButton.style('font-size', '20px')
  wordButton.style('border-radius', '16px')
  wordButton.style('padding', '15px')
  wordButton.style('border', 'none')
  
}

function draw(){
  matchButton.mousePressed(shapeGame)
  colorButton.mousePressed(colorGame)
  traceButton.mousePressed(traceGame)
  wordButton.mousePressed(wordGame)
}


function shapeGame(){
  window.location("./matchtheshape.html");
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
