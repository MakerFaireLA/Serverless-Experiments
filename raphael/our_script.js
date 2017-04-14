window.onload = function() { 
    var paper = new Raphael(document.getElementById('canvas_container'), 500, 500);

    // var circle = paper.circle(100, 100, 80);
    // for(var i=0; i<5; i++) {
    //     var mult = i*5;
    //     paper.circle(250 + (2*mult), 100 + mult, 50 - mult);
    // }
    // var rectangle = paper.rect(200, 200, 250, 100);
    // var ellipse = paper.ellipse(200, 400, 100, 50);

    // var tetronimo = paper.path("M 250 250 l 0 -50 l-50 0 l 0 -50 l -50 0 l 0 50 l -50 0  l 0 50 z");
    // tetronimo.attr(
    //     {
    //         fill: '90-#526c7a-#64a0c1', 
    //         stroke: '#3b4449', 
    //         'stroke-width': 10,
    //         'stroke-linejoin': 'round',
    //         rotation: -90
    //     }
    // );
    // tetronimo.animate({rotation: 360}, 2000, 'bounce');

    var circ = paper.circle(250, 250, 40);
    circ.attr({fill: '#000', stroke: 'none'});

    var text = paper.text(250, 250, 'Bye Bye Circle!');
    text.attr({opacity: 0, 'font-size': 12}).toBack();

    circ.node.onmouseover = function() {
        this.style.cursor = 'pointer';
    }

    circ.node.onclick = function() {
        text.animate({opacity: 1}, 2000);
        circ.animate({opacity: 0}, 2000, function() {
            this.remove();
        });
    }
}

