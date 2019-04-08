//Creating a grid

//creatine variables that represent the amount of space between each rectangle
var stepX = 30;
var stepY = 30;

function setup() {
  createCanvas(1240, 1748);
  colorMode(HSB, 360, 100, 100);
}

function draw() {

	//Creating the loop that draws the grid on the canvas
	for (var gridY = 0; gridY < height; gridY += stepY) {
		for (var gridX = 0; gridX < width; gridX += stepX) {
			fill(0,0,100)
		    rect(gridX,gridY,stepX,stepY)
		}
	}
}



