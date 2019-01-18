'use strict';

var colorCount = 20;

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

  // row count and row height. converting to an integer
  var tileCountY = int(random(5, 30));
  var tileHeight = height / tileCountY;

  // seperate each line in parts
  for (var gridY = tileCountY; gridY >= 0; gridY--) {
    // how many fragments
    //starting the partCount at 1
    var partCount = gridY + 1;
    var parts = [];

    //
    for (var i = 0; i < partCount; i++) {
      // sub fragments or not?
      //checking a random value. gives you a value between 0 and 1
      //7.5% chance it will be this
      if (random() < 0.075) {
        // take care of big values
        var fragments = int(random(2, 20));
        //looping through the array and adding the parts together
        partCount = partCount + fragments;
        for (var ii = 0; ii < fragments; ii++) {
          parts.push(random(2));
        }
      } else {
        //generating an array or random number that will be used to calculate the over scale of each part compared to the sum of all parts
        parts.push(random(2, 20));
      }
    }

    // add all subparts
    var sumPartsTotal = 0;
    for (var j = 0; j < partCount; j++) {
      sumPartsTotal += parts[j];
    }

    // draw rects
    var sumPartsNow = 0;
    for (var gridX = 0; gridX < parts.length; gridX++) {
      sumPartsNow += parts[gridX];

      //useing the mapping function to scale from thr part length relative to the sumPartsTotal to 0 and the width
      //the x position has to be tracked
      var x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
      var y = tileHeight * i;
      var w = -map(parts[gridX], 0, sumPartsTotal, 0, width);
      var h = tileHeight;

      var index = counter % colorCount;
      var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
      fill(col);
      rect(x, y, w, h);

      counter++;
    }
  }
}

