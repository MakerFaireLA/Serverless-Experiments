
var widget;

function setup() {
    createCanvas(710, 400);
    // Create object
    widget = new pickUp;
}

function mousePressed() {
    widget.myMousePressed();
}

function mouseReleased() {
    widget.myMouseReleased();
}

function draw() {
    background(50, 89, 100);
    widget.display();
}
