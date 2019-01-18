'use strict';

var tileCountX = 50;
var tileCountY = 10;

//creating a global variable and setting it tp 20
var colorCount = 20;

//creating global variables for the HSB and setting them to arrays to use later
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  noLoop();

  //creating a colour palette based on a set of rules
  //creating an array of colours that switches and generates contrasting colours between certain values
  for (var i = 0; i < colorCount; i++) {
    if (i % 2 == 0) {
      hueValues[i] = random(360);
      saturationValues[i] = 100;
      brightnessValues[i] = random(100);
    } else {
      hueValues[i] = 195;
      saturationValues[i] = random(20);
      brightnessValues[i] = 100;
    }
  }

  //counting the tiles
  var counter = 0;

  var tileWidth = width / tileCountX;
  var tileHeight = height / tileCountY;

  for (var gridY = 0; gridY < tileCountY; gridY++) {
    for (var gridX = 0; gridX < tileCountX; gridX++) {
        var posX = tileWidth * gridX;
        var posY = tileHeight * gridY;

        //this makes sure that the index selected will always be in the range of colourCount even if the counter goes above the number
        var index = counter % colorCount;
        
        //getting the values stored in each colour array to fill the grid of tiles
        var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
        fill(col);

        rect(posX, posY, tileWidth, tileHeight);

        //adding to the counter
        counter++;
    }
  }


}

