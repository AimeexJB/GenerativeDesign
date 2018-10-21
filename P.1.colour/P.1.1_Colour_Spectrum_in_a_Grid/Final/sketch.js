'use strict';

var stepX = 10;
var stepY = 15;

function setup() {

	createCanvas(800,500);
	colorMode(HSB, width, height, 100);
	//If you change the colourMode to RGB you get a cool effect
	//colorMode(RGB, width, height, 100);
	noStroke();

}

function draw() {

	//Changing the stepX and stepY so they are now determinedby the mouse position
	//We divde by 5 to reduce the amount of steps there are and
	//add 1 to prevent the value from being to small and causing the page to freeze
	stepX = mouseX/5 +1;
	stepY = mouseY/5 +1;

	for(var gridY = 0; gridY<800; gridY+=stepY){
		for(var gridX = 0; gridX<800; gridX+=stepX){
			//The Hue is now determined by the gridX
			//The saturation is determined by the gridY minus the Height of the canvas so that the colours appear going downwards
			fill(gridX, height - gridY, 100)
			rect(gridX,gridY,stepX,stepY)
		}
	}
}

//Adding in the keypressed functions to save the canvas when the letter s is pressed. 
//Using the generative design timestamp function to lable saved picture with the mouse positions
function keyPressed() {

	if (key == 's'|| key == 'S') saveCanvas(gd.timestamp() + '_MouseX' + mouseX + '_MouseY' + mouseY, 'png');

}

