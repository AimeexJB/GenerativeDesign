'use strict';

var colorCount = 20;

var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

//creating the variable for the random seed and setting it to 0
var actRandomSeed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  noLoop();
  //will generate the same random values every loop
  randomSeed(actRandomSeed);


  for (var i = 0; i < colorCount; i++) {
    if (i % 2 == 0) {
      hueValues[i] = random(130, 220);
      saturationValues[i] = 100;
      brightnessValues[i] = random(15, 100);
    } else {
      hueValues[i] = 195;
      saturationValues[i] = random(20, 100);
      brightnessValues[i] = 100;
    }
  }

  var counter = 0;
  
  var tileCountY = int(random(5, 30));
  var tileHeight = height / tileCountY;

  
  for (var i = tileCountY; i >= 0; i--) {
    
    var partCount = i + 1;
    var parts = [];

    for (var ii = 0; ii < partCount; ii++) {
      
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

    var partsPosition = 0;
    for (var gridX = 0; gridX < parts.length; gridX++) {
      //partsPosition += parts[gridX];

      var x = map(partsPosition, 0, sumPartsTotal, 0, width);
      var y = tileHeight * i;
      //var w = -map(parts[gridX], 0, sumPartsTotal, 0, width);
      var w = map(parts[gridX], 0, sumPartsTotal, 0, width);

      var h = tileHeight;

       var index = counter % colorCount;
      var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
      fill(col);
      rect(x, y, w, h);

      //removing this line from the top of the loop to the bottom to avoid the -map variable
      partsPosition += parts[gridX];

      counter++;
    }
  }
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