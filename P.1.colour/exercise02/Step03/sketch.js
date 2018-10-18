function setup() {

	createCanvas(500, 500);
	colorMode(HSB, width, height, 100);
	noStroke();

}

function draw() {

	numberOfCols = 100;
	numberOfRows = 100;

	//
	var stepX = width/numberOfCols;
	var stepY = width/numberOfRows;

	for (var gridY = 0; gridY < width; gridY += stepY){
		for (var gridX = 0; gridX < width; gridX += stepX) {
			fill(gridX, height - gridY, 100);
			rect(gridX, gridY, stepX, stepY);
		}
	}

}
