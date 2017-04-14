window.onload = function() { 
    var paper = new Raphael(document.getElementById('canvas_container'), 500, 500);

    var obj = paper.rect(210, 225, 80, 50);
    obj.attr({fill: '#000', stroke: 'none', cursor: "move"});

    var move = function(dx, dy) {
        this.attr({x: this.ox + dx, y: this.oy + dy});
    }
    var start = function() {
        this.ox = this.attr("x");
        this.oy = this.attr("y");
    }
    var end = function() {}

    obj.drag(move, start, end);


}

