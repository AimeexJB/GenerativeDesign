'use strict';

var tileCountX = 50;
var tileCountY = 10;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 100);
}

function draw() {

    background(0, 0, 100);

    //limit mouse coordinates from 0 to the width and height of the canvas using the consrain function
    var mX = constrain(mouseX, 0, width);
    var mY = constrain(mouseY, 0, height);

    // map mouse to grid resolution
    //Mapping the mouse from 1 to the number of rows and columns on the screen and converting them to integers
    var currentTileCountX = int(map(mX, 0, width, 1, tileCountX));
    var currentTileCountY = int(map(mY, 0, height, 1, tileCountY));

    var tileWidth = width / currentTileCountX;
    var tileHeight = height / currentTileCountY;

    for (var gridY = 0; gridY < tileCountY; gridY++) {
        for (var gridX = 0; gridX < tileCountX; gridX++) {
            var posX = tileWidth * gridX;
            var posY = tileHeight * gridY;

            fill(50,55,100)
            rect(posX, posY, tileWidth, tileHeight);
        }
    }
}
