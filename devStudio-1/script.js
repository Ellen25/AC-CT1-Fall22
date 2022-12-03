let bubbles = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);


   for (let j = 0; j < bubbles.length; j++) {
      let b = bubbles[j];
      b.move();
      b.updateLifespan();
      b.show();
    }
    for (let j = bubbles.length - 1; j >= 0; j--) {
      let b = bubbles[j];
      if (b.isDone == true) {
        bubbles.splice(j, 1);
      }
      }
}

  function mousePressed() {
    console.log("mouse pressed");
    for (let j = 0; j < 300; j++) {
      bubbles.push(new Bubble(mouseX, mouseY));
    }
  }

  class Bubble {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.dia = random(5, 20);
      this.isDone = false;
      this.lifespan = 5.0;
    }
    updateLifespan() {
      this.lifespan -= 0.01;
      if (this.lifespan < 0) {
        this.isDone = true;
        this.lifespan = 0;
      }
    }
    move() {
      this.x += random(-5, 5);
      this.y += random(-5, 5);
    }
    show() {
      noFill();
      stroke(255, 50);
      strokeWeight(3);
      circle(this.x, this.y, this.dia);
    }
  }