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



// let posX, posY;
// let velX, velY;
// let cRadius = 40;

// function setup() {
//   createCanvas(800, 600);
  
//   posX = width/2;
//   posY = height/2;
  
//   velX = -2.5;
//   velY = 3.2;
// }

// function draw() {
//   background(220, 220, 220, 50);
  
//   posX += velX;
//   posY += velY;
  
//   if(posX+cRadius >= width || posX-cRadius <= 0){
//     velX *= -1;
//   }
//   if(posY+cRadius >= height || posY-cRadius <= 0){
//     velY *= -1;
//   }
  
//   fill(127, 255, 127);
//   noStroke();
//   circle(posX, posY, cRadius*2);
// }