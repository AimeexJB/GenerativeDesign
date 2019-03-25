let font;
let textImg;
let numOfTiles = 100;
let tileWidth;

let xPos;
let yPos;

let startPos = [];
let endPos = [];

let pointDensity = 9;
let pointSlider;

let circleRadius = 5;
let radiusSlider;

let checkBox;
let filled = true;

let checkBox2;
let jitter = false;

let radio;
let shape = 1;
let mouse;
let mouseShape = false;

let textBox;
let textTyped = "Hello";
let tSize = 150;
let textSlider;

let currentGradient = [];
let gradient1;
let gradient2;
let gradient3;
let gradient4;
let gradient5;

let lerpAmount = 0;
let easing = 0.00001;

let maxDist;

function preload() {
    font = loadFont('data/FreeSansBold.ttf');

    gradient1 = loadImage('data/gradient.png');
    gradient2 = loadImage('data/gradient2.png');
    gradient3 = loadImage('data/gradient3.png');
    gradient4 = loadImage('data/gradient4.png');
    gradient5 = loadImage('data/gradient5.png');

}

function setup() {
    let canvas = createCanvas(760,500);

    maxDist = dist(0, 0, width*2, height*2);
    canvas.parent('canvasHolder')

    radiusSlider = createSlider(1, 20, 5);
    radiusSlider.parent('radiusController')
    radiusSlider.input(update);

    checkBox = createCheckbox('Fill Me!', filled);
    checkBox.parent('fillController');
    checkBox.changed(update);

    checkBox2 = createCheckbox('Jitter Me!', jitter);
    checkBox2.parent('jitterController');
    checkBox2.changed(update);

    mouse = createCheckbox('Mouse Move', mouseShape);
    mouse.parent('mouseController');
    mouse.changed(update);

    radio = createRadio();
    radio.option('Rect', 1);
    radio.option('Ellipse', 2);
    radio._getInputChildrenArray()[0].checked = true;
    radio.parent('shapeController');
    radio.changed(update);

    textBox = createInput(textTyped, 'text');
    textBox.addClass('form-control');
    textBox.parent('textController');
    textBox.changed(update);

    textSlider = createSlider(50, 400, 250);
    textSlider.parent('textSizeController')
    textSlider.input(update);

    pointSlider = createSlider(5, 30, 10);
    pointSlider.parent('densityController')
    pointSlider.input(update);

    gradient1.loadPixels();
    gradient2.loadPixels();
    gradient3.loadPixels();
    gradient4.loadPixels();
    gradient5.loadPixels();
    currentGradient = gradient1.pixels;

    setUpText();
    startPoints();

}

function startPoints() {
    for(let y = 0; y < height; y += pointDensity) {
        for(let x = 0; x < width; x += pointDensity) {

            let index = (x + y * textImg.width) * 4;

            startPos[index] = {x: Math.floor(random(0,width)), y: Math.floor(random(0,height))};
            endPos[index] = {x: x, y: y};
        }
    }
}

function draw() {
    background(51);
    fill(50);

    for(let y = 0; y < height; y += pointDensity) {
        for(let x = 0; x < width; x += pointDensity) {

            let size = dist(mouseX, mouseY, x, y);
            size = (size/maxDist) * 80;

            let index = (x + y * textImg.width) * 4;
            let tr = textImg.pixels[index];
            let r = currentGradient[index];
            let g = currentGradient[index +1];
            let b = currentGradient[index +2];
            let colour = color(r,g,b);

            var dx = 1 - lerpAmount;
            lerpAmount += dx * easing;

            xPos = lerp(startPos[index].x, endPos[index].x, lerpAmount);
            yPos = lerp(startPos[index].y, endPos[index].y, lerpAmount);

            if (jitter) {
                xPos = random(xPos-4, xPos+4);
                yPos = random(yPos-4, yPos+4);
            }

            if (mouseShape) {
                circleRadius = size;
                // ellipse(xPos, yPos, size, size );
            }

            if (tr < 128) {
                if (filled) {
                    fill(colour);
                    noStroke()
                } else{
                    noFill();
                    stroke(0)
                }
                if (shape == 1 ){
                    rectMode(CENTER)
                    rect(xPos, yPos, circleRadius, circleRadius);
                } else if (shape == 2) {
                    ellipse(xPos, yPos, circleRadius, circleRadius );
                }
            }
        }
    }
}

function keyPressed() {
    if ( keyCode === ENTER ) lerpAmount = 0;

    if (key == '1') currentGradient = gradient1.pixels;
    if (key == '2') currentGradient = gradient2.pixels;
    if (key == '3') currentGradient = gradient3.pixels;
    if (key == '4') currentGradient = gradient4.pixels;
    if (key == '5') currentGradient = gradient5.pixels;
}

function setUpText() {
    textImg = createGraphics(760,500);
    textImg.pixelDensity(1);
    textImg.background(255);
    textImg.textFont(font);
    textImg.textSize(tSize);
    textImg.textAlign(CENTER, CENTER);
    textImg.text(textTyped, width/2, height/2);
    textImg.loadPixels();
}

function update() {
    circleRadius = radiusSlider.value();
    filled = checkBox.checked();
    jitter = checkBox2.checked();
    mouseShape = mouse.checked();
    shape = radio.value();
    textTyped = textBox.value();
    tSize = textSlider.value();
    pointDensity = pointSlider.value();
    setUpText();
    startPoints();
}
