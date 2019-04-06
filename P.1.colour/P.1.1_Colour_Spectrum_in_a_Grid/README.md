# Colour Spectrum in a Grid

1. [Step 1](Step01/)
2. [Step 2](Step02/)
3. [Step 3](Step03/)
4. [Final](Final/)


# Colour Spectrum in a Grid - Step 1

In step 1 we create the 2 main functions.

In the setup function we create the canvas, give it the colour mode HSB and give out shape no stroke.

```js
function setup() {

    createCanvas(800,500);
    colorMode(HSB, 360, 100, 100);
    noStroke();

}
```
In the draw function we add a rectangle to the top corner of the canvas and fill it with a colour.

```js
function draw() {

    rect(0, 0, 100, 100);
    fill(246, 296, 158);

}

```


# Colour Spectrum in a Grid - Step 2

We disable the no stroke by commenting it out so we can see the individual rectangles on the screen

Then in the draw function we create a loop to draw a row of 10 rectangles across the canvas where gridX is used to determine the position of the rectangles along the X axis.

```js
for(var gridX = 0; gridX<800; gridX+=80){
        fill(246, 296, 158)
        rect(gridX,0, 100, 100)
    }
```


# Colour Spectrum in a Grid - Step 3

We add two new global variables to the start of the srcript that canbe used throughout the code. These act as the width and height of the rectangles

```js
var stepX = 10;
var stepY = 15;
```
The Hue and Saturation are set to the width and height of the canvas. The Hue is from 0 - 800 and the Saturation is from 0 - 500.

```js
colorMode(HSB, width, height, 100);
```

In the draw function we nest the gridX loop in a gridY loop to create rectangles all over the canvas. gridY is used to determin the rectangles along the Y axis

We then sub in stepX and stepY for the width and height

```js
for(var gridY = 0; gridY<800; gridY+=stepY){
        for(var gridX = 0; gridX<800; gridX+=stepX){
            fill(246, 296, 158)
            rect(gridX,gridY,stepX,stepY)
        }
    }
```


# Colour Spectrum in a Grid - Final Step

We add the 2 global variables to the draw function and change the stepX and stepY so they are now determined by the mouse position. We divde by 5 to reduce the amount of steps there are and add 1 to prevent the value from being to small and causing the page to freeze.

```js
    stepX = mouseX/5 +1;
    stepY = mouseY/5 +1;
```

In the loop we change the fill so that the Hue is now determined by the gridX, The saturation is determined by the gridY minus the Height of the canvas so that the colours appear going downwards
```js
fill(gridX, height - gridY, 100)
```

Weadd the keyPressed function. This will save the canvas when the letter is pressed using the generative design timestamp function to lable saved picture with the mouse positions.
```js
function keyPressed() {

    if (key == 's'|| key == 'S') saveCanvas(gd.timestamp() + '_MouseX' + mouseX + '_MouseY' + mouseY, 'png');

}
```
