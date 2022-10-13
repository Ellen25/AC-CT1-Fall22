var inc = 0.1;
var scl = 10;
var cols, rows;
var zoff = 0;

// var fr;

var particles = [];
var flowfield = [];

function setup() {
  background(255);
  createCanvas(windowWidth, windowHeight);
  cols = floor(width/scl);
  rows = floor(height/scl);
  // fr = createP('');
  
  flowfield = new Array();
  
  for(var i = 0; i < 1500; i++){
    particles[i] = new Particle();
  }
}

function draw() {
  var yoff = 0;

  for (var y = 0; y < rows; y++) {
    var xoff = 0;//for each row, reset x offset at the beginning
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 2;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);//comtrols how exact they follow the vectors; larger = samer
      flowfield[index] = v;
      xoff += inc;
      ////representing the vectors!////
      // stroke(0, 50);
      // push();
      // translate(x*scl, y*scl);
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      // pop();//for every vector, translate to the spot, draw a line, rotate according to th heading (the angle)
      
      
    }
    yoff += inc; //each pixel have close relationship with the one between them
    zoff += 0.0004;
  }
  
  for (let i = 0; i < particles.length; i++){
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].updateLifespan();
    particles[i].edges();
    particles[i].show();
  }
   for (let i = particles.length - 1; i >= 0; i--){
    let p = particles[i];
    if (p.isDone == true){
      particles.splice(i, 1);
    }
  }
  
  // fr.html(floor(frameRate()));
  
}





function Particle(){
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.maxspeed = 1.6;
  this.isDone = false;
  this.lifespan = 1;
  // this.lifeReduction = random(0.01, 0.02);
  this.lifeReduction = 0.01;
  
  this.prevPos = this.pos.copy();
  
  this.update = function(){
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  
  this.updateLifespan = function() {
    this.lifespan -= this.lifeReduction;
    if (this.lifespan < 0) {
      this.isDone = true;
      this.lifespan = 0;
    }
  }

  this.follow = function(vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  }
  
  this.applyForce = function(force){
    this.acc.add(force);
  }
  
  this.show = function(){
    stroke(57, random(20));
    strokeWeight(1.6);
    //point(this.pos.x, this.pos.y);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
  }
  
  this.updatePrev = function(){
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }
  
  this.edges = function(){
    if (this.pos.x > width){
      this.pos.x = 0;
      this.updatePrev();
      this.isDone = true;
    }
    if (this.pos.x < 0){ 
      this.pos.x = width;
      this.updatePrev();
      this.isDone = true;
    }
    if (this.pos.y > height){
      this.pos.y = 0;
      this.updatePrev();   
      this.isDone = true;
    }
    if (this.pos.y < 0){
      this.pos.y = height;
      this.updatePrev();
      this.isDone = true;
    }
  }
}