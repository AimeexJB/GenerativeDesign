'use strict';

var numberOfRows = 2;
var numberOfColumns = 10;

var colorsLeft = []
var colorsRight = [];

//Creating another array called colours which will store the interpolated colours
var colors = [];

//Declaring a variable as true
var interpolateShortest = true;

function setup() {

	createCanvas(800, 800);
	colorMode(HSB);
	noStroke();
	shakeColors();

}

function draw() {

	//Determining the number of rows and columns by the position of the mouse x and y positions
	//using the map funtion and converting it to an integer
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

			interCol = lerpColor(startColor, endColor, amount)
			fill(interCol);

			rect(gridX*tileWidth, gridY*tileHeight, tileWidth, tileHeight)

			//pushing the interpolation colours to the array
			colors.push(interCol);
		}
	}
}

function shakeColors() {
	for (var i = 0; i < numberOfColumns; i++) {
		//instead of being completely random, the colours are now set to switch between two values
		colorsLeft[i] = color(random(0, 60), random(0, 100), 100);
		colorsRight[i] = color(random(160, 190), 100, random(0, 100));
	}
}

