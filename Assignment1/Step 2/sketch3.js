//Adding in Mouse interaction to affect circle diameter on Canvas

'use strict';

var stepX = 60;
var stepY = 60;

//Creating the maxDistance variable and setting it to 600
//Changing this affects the size of the circle from the mouse
var maxDistance = 600;

function setup() {
    createCanvas(1240, 1748);
    noStroke();
    colorMode(HSB, 360, 100, 100);
}

function draw() {
    //Clearing the canvas with each loop
    clear();

    for (var gridY = 0; gridY < height; gridY += stepY) {
        for (var gridX = 0; gridX < width; gridX += stepX) {
            //Creating the variable diameter which is getting the distance between 2 points on the canvas
            var diameter = dist(mouseX, mouseY, gridX, gridY);
            //taking the distance, dividing it by the maxDistance variable and multipying it by 60.
            //This changes the reach the mouse has on the canvas
            diameter = diameter / maxDistance * 60;

            //adding push() and pop() so that the translation is only on the circles
            push();
                translate(gridX, gridY, diameter);
                fill(260, 67, 68);
                //changing the rectangles to ellipses for a nicer effect
                //making the width and height equal to the diameter, this makes them change with the mouse
                ellipse(0, 0, diameter, diameter);
            pop();
        }
    }
}



