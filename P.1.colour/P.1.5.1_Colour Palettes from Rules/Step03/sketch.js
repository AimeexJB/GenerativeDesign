'use strict';

var tileCountX = 50;
var tileCountY = 10;

//Declaring variables for the hue, saturation and brightness that are empty arrays
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();

    //Creating random colour values for each variable
    //The colour will correspond to the tiles in the columns
    for (var i = 0; i < tileCountX; i++) {
        hueValues[i] = random(360);
        saturationValues[i] = random(100);
        brightnessValues[i] = random(100);
    }
}

function draw() {

background(0, 0, 100);

    var mX = constrain(mouseX, 0, width);
    var mY = constrain(mouseY, 0, height);

    //A tile counter variable thats set to 0
    var counter = 0;

    var currentTileCountX = int(map(mX, 0, width, 1, tileCountX));
    var currentTileCountY = int(map(mY, 0, height, 1, tileCountY));

    var tileWidth = width / currentTileCountX;
    var tileHeight = height / currentTileCountY;

    for (var gridY = 0; gridY < tileCountY; gridY++) {
        for (var gridX = 0; gridX < tileCountX; gridX++) {
            var posX = tileWidth * gridX;
            var posY = tileHeight * gridY;

            //With each loop the counter is incremented and cycles through the same colour values, 
            //depending on the tilecount because of the '%' modulo symbol 
            //This resets the counter to 1 when the color passes the current tile counts
            var index = counter % currentTileCountX;

            //getting the values stored in each array to fill the grid of tiles
            fill(hueValues[index], saturationValues[index], brightnessValues[index]);
            rect(posX, posY, tileWidth, tileHeight);
            counter++;
        }
    }
}

