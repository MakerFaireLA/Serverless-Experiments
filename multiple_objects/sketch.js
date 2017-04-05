
var widget;
var selected;

function setup() {
    createCanvas(710, 400);
    // Create object
    widget = [];
    for(var i = 0; i < 20; ++i)
    {
      widget[i] = new pickUp(i);
    }
}

function mousePressed() {
    selected.myMousePressed();
}

function mouseReleased() {
  widget.forEach(function(obj) {
  obj.myMouseReleased();
});
}

function draw() {
    background(50, 89, 100);

    widget.forEach(function(obj) {
    obj.myMouseHover();
    obj.myDisplay();
  });
  console.log(selected);

}
