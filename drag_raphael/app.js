window.onload = function() { 
    var paper = new Raphael(document.getElementById('canvas_container'), 500, 500);

    var obj = paper.rect(210, 225, 80, 50);
    obj.attr({fill: '#000', stroke: 'none', cursor: "move"});

    var move = function(dx, dy) {
        this.attr({x: this.attr("x") + dx, y: this.attr("y") + dy});
    }
    var start = function() {}
    var end = function() {}

    obj.drag(move, start, end);


}

