'use strict';

var numberOfRows = 2;
var numberOfColumns = 10;

var colorsLeft = []
var colorsRight = [];

var colors = [];

var interpolateShortest = true;

function setup() {

  createCanvas(800, 800);
  colorMode(HSB);
  noStroke();
  shakeColors();

}

function draw() {

  numberOfRows = int(map(mouseX, 0, width, 2, 100));
  numberOfColumns = int(map(mouseY, 0, height, 2, 10));
  
  var tileWidth = width / numberOfRows;
  var tileHeight = height / numberOfColumns;
  var interCol;
  colors = [];

  for (var gridY = 0; gridY < numberOfColumns; gridY++) {
    var startColor = colorsLeft[gridY];
    var endColor = colorsRight[gridY];

    for (var gridX = 0; gridX < numberOfRows; gridX++) {
      var amount = map(gridX, 0, numberOfRows - 1, 0, 1);

      //If the variable is truw we will interpolate using the RGB colourmode.
      //If the variable is false then we will interpolate using the HSB colourmode.
      if (interpolateShortest) {
        // switch to rgb
        colorMode(RGB);
        interCol = lerpColor(startColor, endColor, amount);
        // switch back
        colorMode(HSB);
      } else {
        interCol = lerpColor(startColor, endColor, amount);
      }

      fill(interCol);

      rect(gridX*tileWidth, gridY*tileHeight, tileWidth, tileHeight)

      colors.push(interCol);
    }
  }
}

function shakeColors() {
  for (var i = 0; i < numberOfColumns; i++) {
    colorsLeft[i] = color(random(0, 60), random(0, 100), 100);
    colorsRight[i] = color(random(160, 190), 100, random(0, 100));
  }
}

//When the mouse is clicked and released then the colours on the left and right columns will switch
function mouseReleased() {
  shakeColors();
}

//Adding in the keypressed functions to save the canvas when the letter s is pressed. 
//Using the generative design timestamp function to save the picture as a PNG
//by pressing the letter 'c' a file will be made saving the colour palette
//The keys 1 and 2 will change the variable to either true or false and therefore change the colourmode
function keyPressed() {
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode( colors )], gd.timestamp(), 'ase');
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == '1') interpolateShortest = true;
  if (key == '2') interpolateShortest = false;
}




