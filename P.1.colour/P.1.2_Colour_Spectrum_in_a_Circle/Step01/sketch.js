
//We set up the canvas and make the colourmode HSB where the Hue is 360 and the Saturation and Brightness are 100
function setup() {
	createCanvas(800, 400);

}


function draw() {

 	//We call the begin shape function which allows us to create complex shapes using the vertext to created each point and connect them
 	// and pass in the TRIANGL FAN parameter
 	//then the endShape function is called to stop the drawing
	beginShape(TRIANGLE_FAN);
		vertex(57.5, 50);
		vertex(57.5, 15);
		vertex(92, 50);
		vertex(57.5, 85);
		vertex(22, 50);
		vertex(57.5, 15);
	endShape();

}
