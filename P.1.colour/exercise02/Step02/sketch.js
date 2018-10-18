function setup() {

	createCanvas(500, 500);
	colorMode(HSB, width, height, 100);
	noStroke();

}

function draw() {

	//setting the number of rows and cols
	numberOfCols = 100;
	numberOfRows = 100;


	//Creating the grid for the X and Y axis using a nested loop. GridY is the number of rows down
	for (var gridY = 0; gridY < width; gridY += numberOfRows){
		//GridX is the number of Columns across
		for (var gridX = 0; gridX < width; gridX += numberOfCols) {
			// Minusing the GridY from the height so the colours appear from top to bottom
			fill(gridX, height - gridY, 100);
			rect(gridX, gridY, numberOfCols, numberOfRows);
		}
	}

}
