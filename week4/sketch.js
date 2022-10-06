let gridStep = 50;
let cRadius = gridStep * 0.37;

function setup() {
  createCanvas(800, 600);
  colorMode(HSB, width, 100, 100);
  
}

function draw() {
background('black');
  
  // showGrid();
  
  noStroke();
  for(let x = 0; x < width / gridStep; x++){
    for(let y = 0; y < height/gridStep; y++){
      let posX = (x+0.5)*gridStep;
      let posY = (y+0.5)*gridStep;
      
      posX += random(-1, 1);
      posY += random(-1, 1);
      
      fill(posX, 30, 100);
      circle(posX, posY, cRadius*2);
    }
  }
}

function showGrid(){
  stroke(255, 0, 0);
  for(let x = 0; x < width; x += gridStep){
    line(x, 0, x, height);
  }
  
  stroke(0, 0, 255);
  for(let y = 0; y < height; y += gridStep){
    line(0, y, width, y);
  }
}