function setup() {

	createCanvas(800, 400);
	colorMode(HSB, 360, 100, 100);
	noStroke();

}

function draw() {

	//adding in a background colour
	background(374, 296, 158);

	//Creating the variable segmentCount and setting it to 360 as a circle is 360 degrees, 360 segments
	var segmentCount = 360
	//the angleIncrement depends on how many segments are to be drawn
	var angleIncrement = 360/segmentCount
	//This is the size of the circle on the canvas
	var radius = 200;

	beginShape(TRIANGLE_FAN);
		
		//Here we are drawing the first vertex in the middle of the canvas
		vertex(width/2, height/2);

		//For the rest of the vertices we create a loop
		//we need to convert angle from degrees to radians because we use the functions sin() and cos()
		for(var angle = 0; angle <= 360; angle = angle+angleIncrement){
			var vx = radius * cos(radians(angle)) + width/2;
			var vy = radius * sin(radians(angle)) + height/2;
			//the values from converting the angle are then placed in the vertex to complete the circle
			vertex(vx, vy);
			//angle is used as the Hue to fill and give colours ranging from 0-360
			fill(angle, 100, 100);
		}

	endShape();

}

