function setup() {

	createCanvas(800, 400);
	colorMode(HSB, 360, 100, 100);
	noStroke();

}

function draw() {

	background(374, 296, 158);

	//we use the map function for the segmentCount so that the amount of triangles changes depending on the mouseY position
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

