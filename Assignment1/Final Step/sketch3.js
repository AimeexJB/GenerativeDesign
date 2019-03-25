//Adding mouse functions to change the Hue

'use strict';

var stepX = 60;
var stepY = 60;

//Creating global variables start Hue and end Hue
var startHue;
var endHue;

var maxDistance = 600;

function setup() {
    createCanvas(1240, 1748);
    noStroke();
    colorMode(HSB, 360, 100, 100);

    //Setting the start hue to 180 which is blue and the end hue to 0 which is red
    startHue = 180;
    endHue = 0;
}

function draw() {
    clear();
    background(0,0,0);

    //inserting the variables as the Hues of the start colour and end colour
    var startCol = color(startHue, 100, 100);
    var endCol = color(endHue, 100, 100);

    for (var gridY = 0; gridY < height; gridY += stepY) {
        for (var gridX = 0; gridX < width; gridX += stepX) {
            var diameter = dist(mouseX, mouseY, gridX, gridY);
            diameter = diameter / maxDistance * 60;

            var distance = dist(mouseX, mouseY, gridX, gridY);
            var amount = map(distance, 0, width, 0, 1);
            //Changing the colourmode to RGB for the interpolation and then back to HSB afterwards
            colorMode(RGB);
            var interCol = lerpColor(startCol, endCol, amount);
            colorMode(HSB);

            fill(interCol);
            ellipse(gridX, gridY, diameter, diameter);

        }
    }
}

//Adding a mouse pressed function so that everytime the mouse is clicked 
//it will change the start and end hues depending on the mouses position
//This will change the interpolation of the colours
function mousePressed() {
    startHue = map(mouseX, 0, width, 0, 360);
    endHue = map(mouseY, 0, height, 0, 360);
}

//Adding in the keyPressed functions to save the canvas as a png and to create and adobe ase file to save the colours as a swatch
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
    if (key == 'c' || key == 'C') {
        var colors = [];
        for (var i = 0; i < hueValues.length; i++) {
            colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
        }
        writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
    }

}

