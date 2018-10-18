function setup() {

	createCanvas(500, 500);
	//adding in the colour mode, Hue Saturation Brightness between 0 and 360 with a saturation and brightness of 100%
	colorMode(HSB, 360, 100, 100);

}

function draw() {

	//adding a background colour and making it change depending on the mouse positions with a brightness of 80
	background(mouseY/2, mouseX/2, 80)


}

