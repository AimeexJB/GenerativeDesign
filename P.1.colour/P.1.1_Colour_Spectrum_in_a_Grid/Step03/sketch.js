'use strict';

//Adding these variables to increment in the loop. These act as the width and height of the rectangles
var stepX = 10;
var stepY = 15;

function setup() {

	createCanvas(800,500);
	//The Hue and Saturation are set to the width and height of the canvas. 
	//The Hue is from 0 - 800 and the Saturation is from 0 - 500
	colorMode(HSB, width, height, 100);
	//noStroke();

}

function draw() {

	//Nesting the gridX loop in a gridY loop to create rectangles all over the canvas.
	//gridY is used to determin the rectangles along the Y axis
	for(var gridY = 0; gridY<800; gridY+=stepY){
		for(var gridX = 0; gridX<800; gridX+=stepX){
			fill(246, 296, 158)
			//subbing in stepX and stepY for the width and height 
			rect(gridX,gridY,stepX,stepY)
		}
	}
}

