'use strict';

var colorLeft = [];
var colorRight = [];

//var myColor;
//var randomColor;

var numberOfRows = 5;
var numberOfColumns = 5;

var tileWidth;
var tileHeight;


function setup() {

	createCanvas(600, 600);
	colorMode(HSB);
	noStroke();
	shakeColor();

	tileWidth = width/numberOfColumns;
	tileHeight = height/numberOfRows;

	//myColor = color(50,55,100);
	
}

function draw(){
	
	for(var gridY = 0; gridY < numberOfColumns; gridY++){
		for(var gridX = 0; gridX < numberOfRows; gridX++){

			var amount = map(gridX, 0, 5, 0, 1)
			var startColor = colorLeft[gridY];
			var endColor = colorRight[gridY]

			var interCol = lerpColor(startColor, endColor, amount)
			fill(interCol)

			rect(gridX*tileWidth, gridY*tileHeight, tileWidth, tileHeight)
		}
	}
	

}

function shakeColor() {

	for (var i = 0; i < numberOfRows; i++){
		colorLeft[i] = color(random(255), random(255), random(255)); //generating 5 random colours
		colorRight[i] = color(random(255), random(255), random(255)); //generating 5 random colours
	}

}

function keyPressed() {

	if (key == 's'|| key == 'S') saveCanvas(gd.timestamp(), 'png');

}
