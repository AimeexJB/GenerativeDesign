function setup() {

	createCanvas(500, 500);
	colorMode(HSB, 360, 100, 100);

	//Making the rectangle centered in the canvas
	rectMode(CENTER);
	//Giving the rect no stokes around the sides
	noStroke();

}

function draw() {

	background(mouseY/2, mouseX/2, 80)

	//making the fill of the rect the opposite of the background colour by minusing it from the mouseY direction. 360-0 instead of 0-360.
	fill(360-mouseY/2, 80, 80);
	//positioning the rect in the center of the canvas and making it change size depending on the mouse positions 
	rect(width/2, height/2, mouseX, mouseX);

}
