'use strict';

var colorCount = 20;

var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

//creating the variable for the random seed and setting it to 0
var actRandomSeed = 0;

//creating the variable for alpha value and setting it to 27
var alphaValue = 27;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  noLoop();

  //setting the background color
  background(0);

  //will generate the same random values every loop
  randomSeed(actRandomSeed);

  for (var i = 0; i < colorCount; i++) {
    if (i % 2 == 0) {
      hueValues[i] = random(360);
      saturationValues[i] = 100;
      brightnessValues[i] = random(100);
    } else {
      hueValues[i] = 195;
      saturationValues[i] = random(100);
      brightnessValues[i] = 100;
    }
  }


  var counter = 0;

  var tileCountY = int(random(5, 30));
  var tileHeight = height / tileCountY;


  for (var gridY = tileCountY; gridY >= 0; gridY--) {
    var partCount = gridY + 1;
    var parts = [];

    for (var i = 0; i < partCount; i++) {

      if (random() < 0.075) {
        var fragments = int(random(2, 20));
        partCount = partCount + fragments;
        for (var iii = 0; iii < fragments; iii++) {
          parts.push(random(2));
        }
      } else {
        parts.push(random(2, 20));
      }
    }

    var sumPartsTotal = 0;
    for (var j = 0; j < partCount; j++) {
      sumPartsTotal += parts[j];
    }

    var sumPartsNow = 0;
    for (var gridX = 0; gridX < parts.length; gridX++) {
      sumPartsNow += parts[gridX];

      var x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
      var y = tileHeight * i;
      var w = -map(parts[gridX], 0, sumPartsTotal, 0, width);
      var h = tileHeight * 1.5;

      var index = counter % colorCount;

      //creating 2 colour variables 
      //setting the first to 0 and the second to the values stored in each colour array to fill the grid of tiles
      var col1 = color(0);
      var col2 = color(hueValues[index], saturationValues[index], brightnessValues[index], alphaValue);
      //setting the gradient with the colour variables
      gradient(x, y, w, h, col1, col2);

      counter++;
    }
  }
}


//creating a gradient function with parameters
function gradient(x, y, w, h, c1, c2) {
  var ctx = drawingContext; // global canvas context p5.js var
  //creating a linear gradient with staring points x & y and ending point x & y+h
  var grd = ctx.createLinearGradient(x, y, x, y + h);
  //adding colour stops to allow for the interpolation of colours between the two values, 0 & 1
  grd.addColorStop(0, c1.toString());
  grd.addColorStop(1, c2.toString());

  //filling the rectangles on screen
  ctx.fillStyle = grd;
  ctx.fillRect(x, y, w, h);
}

//changes the seed to a different integer between 0 and 100000 everytime the mouse is clicked
function mouseReleased() {
  actRandomSeed = random(100000);
  loop();
}

//Adding the keypressed function to the canvas. when s is pressed it will save the canvas with a timestamp
//when c is pressed it will save the current colour values as an ase file to be used in adobe photoshop
function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == 'c' || key == 'C') {
    //save an ase file for adobe
    var colors = [];
    for (var i = 0; i < hueValues.length; i++) {
      colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
    }
    writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  }
}
