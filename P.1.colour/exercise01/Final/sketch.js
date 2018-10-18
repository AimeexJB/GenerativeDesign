function setup() {

	createCanvas(500, 500);
	colorMode(HSB, 360, 100, 100);
	rectMode(CENTER);
	noStroke();

}

function draw() {

	background(mouseY/2, mouseX/2, 80)
	//fill(mouseX/2, mouseY/2, 80);
	fill(360-mouseY/2, 80, 80);
	rect(width/2, height/2, mouseX, mouseX);

}

//Adding in the keypressed functions to save the canvas
function keyPressed() {

	if (key == 's'|| key == 'S') saveCanvas(gd.timestamp() + '_MouseX' + mouseX + '_MouseY' + mouseY, 'png');

}