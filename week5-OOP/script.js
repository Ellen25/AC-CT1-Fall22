// let posX;
// let posY;
// let velX;
// let velY;
// let radius = 30;

// function setup(){
//   createCanvas(500, 500);
//   posX = width/2;
//   posY = height/2;
//   velX = random(-4, 4);
//   velY = random(-4, 4);
// }

// function draw(){
//   background(0);
//   fill(200, 60, 40);
  
//   posX += velX;
//   posY += velY;
  
//   if(posX + radius >= width || posX - radius <= 0){
//     velX *= -1;
//   }
//   if(posY + radius >= height || posY - radius <= 0){
//     velY *= -1;
//   }
  
//   circle(posX, posY, radius *2);
  
// }

let particles = [];

function setup(){
  createCanvas(500, 500);
}

function draw(){
  background(0);
  
  particles.forEach((p, i) => {
    p.move();
    p.bounce();
    p.display();
  })
  
}

function mouseReleased(){
  particles.push(new Particle(mouseX, mouseY));
}