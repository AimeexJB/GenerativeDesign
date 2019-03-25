//adding in color interpolation from a mouse point on the canvas

'use strict';

var stepX = 60;
var stepY = 60;

var maxDistance = 600;

function setup() {
    createCanvas(1240, 1748);
    noStroke();
    colorMode(HSB, 360, 100, 100);
}

function draw() {
    clear();

    //changing the background colour to black
    background(0,0,0);

    //creating the start and end colours for the interpolation
    var startCol = color(132, 100, 100);
    var endCol = color(298, 100, 100);

    for (var gridY = 0; gridY < height; gridY += stepY) {
        for (var gridX = 0; gridX < width; gridX += stepX) {
            var diameter = dist(mouseX, mouseY, gridX, gridY);
            diameter = diameter / maxDistance * 60;

            //creating a new variable that is also getting the distance between 2 points on the canvas
            var distance = dist(mouseX, mouseY, gridX, gridY);
            //creating the variable amount which maps the distance from 0 to the width of the canvas from 0 to 1.
            var amount = map(distance, 0, width, 0, 1);
            //interpolating between the start and end colour by the amount.
            //the interpolation will happen from the mouse position and go out to the edges of the canvas.
            var interCol = lerpColor(startCol, endCol, amount);

            //Removing the push and pop methods and adding in the gridX and gridY into the ellipse
            fill(interCol);
            ellipse(gridX, gridY, diameter, diameter);

        }
    }
}


