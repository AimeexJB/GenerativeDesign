function setup() {

	createCanvas(800, 400);
	colorMode(HSB, 360, 100, 100);
	noStroke();

}

function draw() {

	background(374, 296, 158);

	var segmentCount = map(mouseY, 0, height, 1, 360);
	var angleIncrement = 360/segmentCount
	var radius = 200;

	beginShape(TRIANGLE_FAN);
		
		vertex(width/2, height/2);

		for(var angle = 0; angle <= 360; angle = angle+angleIncrement){
			var vx = radius * cos(radians(angle)) + width/2;
			var vy = radius * sin(radians(angle)) + height/2;
			vertex(vx, vy);
			fill(angle, 100, 100);
		}

	endShape();

}

function keyPressed() {

	//Adding in the keypressed functions to save the canvas when the letter s is pressed. 
	//Using the generative design timestamp function to save the picture as a PNG
	if (key == 's'|| key == 'S') saveCanvas(gd.timestamp(), 'png');

	//The switch command checks the last key pressed so that is is easy to switch between different cases
	switch(key) {
		case '1':
			segmentCount = 360;
			break;
		case '2':
			segmentCount = 45;
			break;
		case '3':
			segmentCount = 24;
			break;
		case '4':
			segmentCount = 12;
			break;
		case '5':
			segmentCount = 6;
			break;

	}
}

