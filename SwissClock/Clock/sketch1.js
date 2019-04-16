let minuteStrokeLength = 10;
let minuteStrokeWeight = 4;
let minuteStrokeColor;
let minuteStrokeCap;

let hourStrokeLength = 30;
let hourStrokeWeight = 4;
let hourStrokeColor;
let hourStrokeCap;

let clockRadius = 200;

let hourHandsTaper = 6;
let hourHandsLength = 195;
let hourHandsOffset = 80;
let hourHandsStartWidth = 20;

let minuteHandsTaper = 6;
let minuteHandsLength = 155;
let minuteHandsOffset = 80;
let minuteHandsStartWidth = 20;

let secondHandsTaper = 2;
let secondHandsLength = 155;
let secondHandsOffset = 80;
let secondHandsStartWidth = 10;

function setup(){
	createCanvas(500, 500);
	noLoop();
	angleMode(CENTER);
	ellipseMode(CENTER);

	minuteStrokeColor = color(30,30,30);
	minuteStrokeCap = SQUARE;

	hourStrokeColor = color(30,30,30);
	hourStrokeCap = SQUARE;
}

function draw(){

	background(255);
	translate(width/2, height/2);
	fill(0);

	push();
	for(var i = 0; i<72; i++){
		if(i%6){
			rotate(30);
			rect(0, -20, 6, 40);
		}
		else{
			rotate(6);
			rect(0, -20, 2, 25);
		}
	}
	pop();

	//hourhand
	push();
		beginShape();
			vertex(-15, 10);
			vertex(-5, 15);
			vertex(100, -190);
			vertex(108, -185);
		endShape();
	pop();

	//minutehand
	push();
		beginShape();
			vertex(0, -15);
			vertex(-20,-13);
			vertex(6, 150);
			vertex(15, 145);
		endShape();
	pop();

	//secondhand
	push();
		fill(255, 0, 0);
		ellipse(0, 0, 15, 15);
		ellipse(150, -50, 25, 25);
		beginShape();
			vertex(-50, 5);
			vertex(-40, 3);
			vertex(150, -45);
			vertex(148, -43);
		endShape();
	pop();

}
