'use strict';

//Creating 2 arrays for the colours that will be in the left andrigh columns
var colorLeft = [];
var colorRight = [];

var numberOfRows = 5;
var numberOfColumns = 5;

var tileWidth;
var tileHeight;


function setup() {

	createCanvas(600, 600);
	colorMode(HSB);
	noStroke();
	shakeColor();
	
}

function draw(){

	//moving the tileWidth and tileHeight to the draw function so they are redrawn every frame
	tileWidth = width/numberOfRows;
	tileHeight = height/numberOfColumns;
	
	for(var gridY = 0; gridY < numberOfColumns; gridY++){
		//Creating variables that will be used in a later function
		//These variables store the colours in the left and right columns
		var startColor = colorLeft[gridY];
		var endColor = colorRight[gridY];

		for(var gridX = 0; gridX < numberOfRows; gridX++){
			//mapping gridX from 0-5 to 0-1 which will determine the startColor and endColor
			var amount = map(gridX, 0, 5, 0, 1)

			//The lerpColorfunction performs the interpolation between the startColor and the endColor
			//and the variable amount will determine the position between 0 and 1 
			var interCol = lerpColor(startColor, endColor, amount)
			fill(interCol)

			rect(gridX*tileWidth, gridY*tileHeight, tileWidth, tileHeight)
		}
	}
	

}

//Gets a random colour for the start and end of each rows to interpolate
function shakeColor() {
	for (var i = 0; i < numberOfRows; i++){
		colorLeft[i] = color(random(255), random(255), random(255)); //generating 5 random colours
		colorRight[i] = color(random(255), random(255), random(255)); //generating 5 random colours
	}
}

