function setup() {

	createCanvas(800,500);
	colorMode(HSB, width, height, 100);
	//Disabling the no stroke so we can see the individual rectangles on the screen
	//noStroke();

}

function draw() {

	//Looping the rectangle to crete a row of 10 rectangles across the canvas
	//gridX is used to determine the position of the rectangles along the X axis
	for(var gridX = 0; gridX<800; gridX+=80){
		fill(246, 296, 158)
		rect(gridX,0, 100, 100)
	}
	
}

