let counter = 0;
let interval;

let lineCol = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  interval = setInterval(timeIt, 500);
}

function timeIt() {
  console.log(counter);
  counter++;
}

function draw() {
  background(10, 20, 30);

  noFill();
  strokeWeight(1);
  stroke(255);
  translate(width / 2, height / 2);

  for (let i = 0; i < 200; i++) {
    push();
    rotate(sin(frameCount + i) * 130);
    rect(0, 0, 600 - i * 3, 600 - i * 3, 200 - i);
    pop();
  }

  if (counter % 2 == 0) {
    lineCol = color(random(255), random(255), random(255));
  } else {
    lineCol = color(255);
  }

  noFill();
  strokeWeight(1.5);
  stroke(lineCol);
  beginShape();
  for (let a = 0; a < 8; a++) {
    for (let i = 0; i < 360; i++) {
      let r1Min = map(sin(frameCount), -1, 1, 100 + a, 200 + 0.5 * a);
      let r1Max = map(sin(frameCount), -1, 1, 200 + 0.5 * a, 0 + a);

      let r2Min = map(sin(frameCount), -1, 1, 300 + a, 25 + a);
      let r2Max = map(sin(frameCount), -1, 1, 0 + 2 * a, 300 + a);

      let r1 = map(sin(i * 3), -1, 1, r1Min, r1Max);
      let r2 = map(sin(i * 6 + 60), -1, 1, r2Min, r2Max);
      let r = r1 + r2;
      let x = r * cos(i);
      let y = r * sin(i);
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}
