// pickUp class
function pickUp() {
    this.x = 355;
    this.y = 200;
    this.r = 20;
    this.col = color(255, 100);
    this.grabbed = false;

    this.myMousePressed = function() {
        if(dist(this.x, this.y, mouseX, mouseY) < this.r) {
            this.grabbed = true;
        }
    }

    this.myMouseReleased = function() {
        if(dist(this.x, this.y, mouseX, mouseY) < this.r) {
            this.grabbed = false;
        }
    }

    this.display = function() {
        if(this.grabbed) {
            this.col = color(250, 80, 120);
            this.x = mouseX;
            this.y = mouseY;           
        } else {
            this.col = color(250, 100);
        }
        fill(this.col);
        // noStroke();
        ellipse(this.x, this.y, 2*this.r, 2*this.r);
    }
};