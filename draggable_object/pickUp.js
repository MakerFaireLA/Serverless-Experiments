// pickUp class
class pickUp {
  constructor(){
      this.x = 355;
      this.y = 200;
      this.r = 20;
      this.col = color(255, 100);
      this.grabbed = false;
      this.offsetX;
      this.offsetY;
  }

    myMousePressed() {
        if(dist(this.x, this.y, mouseX, mouseY) < this.r) {
            this.grabbed = true;
            this.offsetX = this.x - mouseX;
            this.offsetY = this.y - mouseY;
        }
    }

    myMouseReleased() {
        if(dist(this.x, this.y, mouseX, mouseY) < this.r) {
            this.grabbed = false;
        }
    }

    display() {
        if(this.grabbed) {
            this.col = color(250, 80, 120);
            this.x = mouseX + this.offsetX;
            this.y = mouseY + this.offsetY;
        } else {
            this.col = color(250, 100);
        }
        fill(this.col);
        // noStroke();
        ellipse(this.x, this.y, 2*this.r, 2*this.r);
    }
};
