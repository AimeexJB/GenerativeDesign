'use strict';

var stepX = 10;
var stepY = 15;

function setup() {

	createCanvas(800,500);
	colorMode(HSB, width, height, 100);
	noStroke();

}

function draw() {

	stepX = mouseX/5 +1;
	stepY = mouseY/5 +1;

	for(var gridY = 0; gridY<800; gridY=gridY+stepY){
		for(var gridX = 0; gridX<800; gridX=gridX+stepX){
			//fill(374, 296, 158) //really nice purple colour
			fill(gridX, height - gridY, 100)
			rect(gridX,gridY,stepX,stepY)
		}
	}
}

