// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(0);

//   fill(200, 60, 40);
//   push(); //push: create a context temporarily
//   rotate(PI/6.0);
//   rect(0, 0, 100, 150);
//   pop(); //return back to the 0,0 point
  
//   push();
//   translate(width/2, 0);
//   rotate(PI/6);
//   rect(0 , 0, 70, 100);
//   pop();
// }
 


////// bouncing circle//////
// let posX;
// let posY;
// let radius;


// function setup(){
//   createCanvas(400, 400);
  
//   posX = width / 2;
//   posY = height / 2;
//   radius = 50;
// }

// function draw(){
//   background(51);
//   noStroke();
//   fill(200, 60, 60);
  
//   posX = cos(frameCount * 0.009) * 100 + width / 2;
//   posY = sin(frameCount * 0.01) * 50 + height / 2;
  
//   radius = sin(frameCount * 0.08) * 30 + 30;
  
//   circle(posX, posY, radius*2);
// }

let radius;
let strWeight = 20;
let numRings = 10;
let interval = 1000;
let bgColor;

function setup(){
  createCanvas(500, 550);
  colorMode(HSB, TWO_PI, 1, 1);
  bgColor = (0, 0, 0);
  
  radius = width * 0.1;
  
  noFill();
  
  let timer1 = setInterval(() => {
    bgColor = color(0, 0, random());
  }, interval) //<what function, interval-time>
}

function draw(){
  background(bgColor);
  
  strokeWeight(strWeight);
  for(let i = 0; i < numRings; i++){
    stroke(i*TWO_PI/numRings, 0.9, 0.9);
    
    let thisR = radius + i * strWeight;
    
    push();
    translate(width/2, height/2);
    
    rotate(sin(millis()*0.001 * (i*0.5+1)));
    arc(0, 0, thisR*2, thisR*2, HALF_PI+QUARTER_PI, TWO_PI+QUARTER_PI);
    pop();
  }
}