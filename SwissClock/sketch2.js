let minuteStrokeLength = 10;
let minuteStrokeWeight = 4;
let minuteStrokeColor;
let minuteStrokeCap;

let hourStrokeLength = 30;
let hourStrokeWeight = 10;
let hourStrokeColor;
let hourStrokeCap;

let clockRadius = 200;

let hourHandsTaper = 6;
let hourHandsLength = 195;
let hourHandsOffset = 50;
let hourHandsStartWidth = 20;

let minuteHandsTaper = 6;
let minuteHandsLength = 155;
let minuteHandsOffset = 50;
let minuteHandsStartWidth = 20;

let secondHandsTaper = 2;
let secondHandsLength = 155;
let secondHandsOffset = 50;
let secondHandsStartWidth = 10;

function setup(){
	createCanvas(500, 500);
	noLoop();
	angleMode(DEGREES);
	//rectMode(CENTER);

	minuteStrokeColor = color(30,30,30);
	minuteStrokeCap = SQUARE;

	hourStrokeColor = color(30,30,30);
	hourStrokeCap = SQUARE;
}

function draw(){

	background(255);
	translate(width/2, height/2);
	fill(0);

	for(var i = 0; i<72; i++){
        if(i%6){
            rotate(6);
            rect(-4, -180, 2, 10);
        }
        else{
            rotate(0);
            rect(-5, -180, 7, 30);
        }
    }

	//hour hand
	push();
		rotate(305)

		beginShape();
			vertex(hourHandsLength-hourHandsOffset, -(hourHandsStartWidth/2)+(hourHandsTaper/2));
			vertex(hourHandsLength-hourHandsOffset, (hourHandsStartWidth/2)-(hourHandsTaper/2));
			vertex(-hourHandsOffset, (hourHandsStartWidth/2));
			vertex(-hourHandsOffset, -(hourHandsStartWidth/2));
		endShape();
	pop();

	//minute hand
	push();
		rotate(75);

		beginShape();
			vertex(minuteHandsLength-minuteHandsOffset, -(minuteHandsStartWidth/2)+(minuteHandsTaper/2));
			vertex(minuteHandsLength-minuteHandsOffset, (minuteHandsStartWidth/2)-(minuteHandsTaper/2));
			vertex(-minuteHandsOffset, (minuteHandsStartWidth/2));
			vertex(-minuteHandsOffset, -(minuteHandsStartWidth/2));
		endShape();
	pop();

	//second hand
	push();
		rotate(340);
		fill(255,0,0)
		noStroke();

		beginShape();
			vertex(secondHandsLength-secondHandsOffset, -(secondHandsStartWidth/2)+(secondHandsTaper/2));
			vertex(secondHandsLength-secondHandsOffset, (secondHandsStartWidth/2)-(secondHandsTaper/2));
			vertex(-secondHandsOffset, (secondHandsStartWidth/2));
			vertex(-secondHandsOffset, -(secondHandsStartWidth/2));
		endShape();

		ellipse(0,0,15,15)
		ellipse(secondHandsLength-secondHandsOffset,0,25,25)
	pop();

}
