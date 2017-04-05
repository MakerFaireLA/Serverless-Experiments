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

    myMouseHover() {
      if(dist(this.x, this.y, mouseX, mouseY) < this.r) {
          selected = this;
      }
    }

    myMousePressed() {
        if(dist(this.x, this.y, mouseX, mouseY) < this.r) {
            this.grabbed = true;
            this.offsetX = this.x - mouseX;
            this.offsetY = this.y - mouseY;
        }
    }

    myMouseReleased() {
            this.grabbed = false;
    }

    myDisplay() {
        if(this.grabbed && selected == this) {
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
