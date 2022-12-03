class Particle {
    constructor(_x, _y) {
      this.posX = _x;
      this.posY = _y;
  
      this.velX = random(-4, 4);
      this.velY = random(-4, 4);
  
      this.radius = 30;
      this.pColor = color(random(255), random(255), random(255));
    }
    
    move() {
      this.posX += this.velX;
      this.posY += this.velY;
    }
  
    bounce() {
      if (this.posX + this.radius >= width || this.posX - this.radius <= 0) {
        this.velX *= -1;
      }
      if (this.posY + this.radius >= height || this.posY - this.radius <= 0) {
        this.velY *= -1;
      }
    }
    
    display(){
      stroke(this.pColor);
      noFill();
      circle(this.posX, this.posY, this.radius * 2);
    }
  }
  