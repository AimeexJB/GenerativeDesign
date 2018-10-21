
'use strict';

var img;

function preload() {
    //loads an image into the canvas from the path
    img = loadImage('data/pic1.jpg');
}

function setup() {
    createCanvas(500, 500);
    noCursor();
    noStroke();

    //a function to stop of loop effect on draw function
    noLoop();
}

function draw() {
    //loads the pixels data for this image into the [pixels] attributes
    img.loadPixels();

    console.log(img.loadPixels());
}
