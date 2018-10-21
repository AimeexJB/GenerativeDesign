'use strict';

//Declaring global variables for the rows and columns and setting them to 5
var numberOfRows = 5;
var numberOfColumns = 5;

//Creating Global variables
var tileWidth;
var tileHeight;


function setup() {

	createCanvas(600, 600);
	colorMode(HSB);

	//Dividing the width and height by the number of rown and columns and setting i to the variables
	tileWidth = width/numberOfRows;
	tileHeight = height/numberOfColumns;

	
}

function draw(){
	
	//Using a loop to create a grid or rectangles that fills the canvas
	for(var gridY = 0; gridY < numberOfColumns; gridY++){
		for(var gridX = 0; gridX < numberOfRows; gridX++){

			fill(50,55,100)

			rect(gridX*tileWidth, gridY*tileHeight, tileWidth, tileHeight)
		}
	}
	

}


