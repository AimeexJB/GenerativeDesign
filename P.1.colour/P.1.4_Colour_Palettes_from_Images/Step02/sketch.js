
'use strict';

var img;
var colors = [];

function preload() {
    img = loadImage('data/pic1.jpg');
}

function setup() {
    createCanvas(500, 500);
    noCursor();
    noStroke();
    noLoop();
}

function draw() {

    //Declaring a variable tileCount and setting it to 20
    var tileCount = 20;

    //setting the width of each tile
    var rectSize = width / tileCount;

    img.loadPixels();

    //emptying the colours array through each loop of the draw function
    colors = [];

    //Creating the grid after loading the pixels into the canvas
    for (var gridY = 0; gridY < tileCount; gridY++) {
        //for each gridX value we need to work out a colours to be stored
        //The pixels are stored in the pixels array as a long list of values
        for (var gridX = 0; gridX < tileCount; gridX++) {
            //we work out the pixel value in the x and y
            var px = int(gridX * rectSize);
            var py = int(gridY * rectSize);

            //we then convert this to the appropraite index value in the pixels array
            var i = (py * img.width + px) * 4;
            //creating the colour object which stores the pixels in the index
            var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
            colors.push(c);
        }
    }

    console.log(colors);
}
