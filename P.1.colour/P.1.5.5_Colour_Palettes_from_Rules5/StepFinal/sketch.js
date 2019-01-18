'use strict';

var colorCount = 20;

var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

//creating the variable for the random seed and setting it to 0
var actRandomSeed = 0;
//creating the variable for alpha value and setting it to 27
var alphaValue = 100;

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
      hueValues[i] = random(180);
      saturationValues[i] = random(50);
      brightnessValues[i] = 100;
    } else {
      hueValues[i] = random(360);
      saturationValues[i] = 100;
      brightnessValues[i] = random(100);
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

      //if the randomly generated number is less than 0.45 then this code will run
      if (random() < 0.45) {
        var w = map(parts[gridX], 0, sumPartsTotal, 0, width);
        var h = tileHeight * 1.5

        //
        var px1 = map(sumPartsNow, 0, sumPartsTotal, 0, width);
        var px2 = px1 + w;
        var py1 = tileHeight * i;
        var py2 = py1 + h;

        var index = counter % colorCount;
        //setting the col variable to the values stored in each colour array to fill the grid of tiles
        var col1 = color(hueValues[index], saturationValues[index], brightnessValues[index], alphaValue);
        // create complementary color
        var col2 = color(hueValues[index] - 180, saturationValues[index], brightnessValues[index], alphaValue);
        //setting the gradient with the colour variables
        centerGradient(px1, py1, 0, px2, py2, max(w, h), col1, col2);
      }

      counter++;
    }
  }
}

//creating a center gradient function with parameters
function centerGradient(x1, y1, r1, x2, y2, r2, c1, c2) {
  var ctx = drawingContext; // global canvas context p5.js var
  var cx = x1 + (x2 - x1) / 2;
  var cy = y1 + (y2 - y1) / 2;
  //creating a radial gradient with staring points cx, cy & r1 and ending point cx, cy & r2
  var grd = ctx.createRadialGradient(cx, cy, r1, cx, cy, r2);
  //adding colour stops to allow for the interpolation of colours between the two values, 0 & 1
  grd.addColorStop(0, c1.toString());
  grd.addColorStop(1, c2.toString());
  //filling the rectangles on screen
  ctx.fillStyle = grd;
  ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
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
    // -- save an ase file (adobe swatch export) --
    var colors = [];
    for (var i = 0; i < hueValues.length; i++) {
      colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
    }
    writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  }
}