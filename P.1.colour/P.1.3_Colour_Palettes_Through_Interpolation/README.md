# Colour Palettes Through Interpolation

1. [Step 1](Step01/)
2. [Step 2](Step02/)
3. [Step 3](Step03/)
4. [Final](Final/)


# Colour Palettes Through Interpolation - Step 1

We start off by declaring global variables for the rows and columns and setting them to 5 and also for the tileWidth and tileHeight.

```js
var numberOfRows = 5;
var numberOfColumns = 5;

var tileWidth;
var tileHeight;
```

In the setup function we divide the width and height by the number of rows and columns and setting i to the variables

```js
tileWidth = width/numberOfRows;
tileHeight = height/numberOfColumns;
```

Then in the draw function we use a loop to create a grid of rectangles that fills the canvas

```js
for(var gridY = 0; gridY < numberOfColumns; gridY++){
    for(var gridX = 0; gridX < numberOfRows; gridX++){

        fill(50,55,100)

        rect(gridX*tileWidth, gridY*tileHeight, tileWidth, tileHeight)
    }
}
```


# Colour Palettes Through Interpolation - Step 2

In Step 2 we create 2 global arrays for the colours that will be in the left andrigh columns.

```js
var colorLeft = [];
var colorRight = [];
```

In the draw function we move the tileWidth and tileHeight to the draw function so they are redrawn every frame

```js
    tileWidth = width/numberOfRows;
    tileHeight = height/numberOfColumns;
```

In the grid Y loop we create variables that will be used in a later function. These variables store the colours in the left and right columns.

In the grid X loop we first map gridX from 0-5 to 0-1 which will determine the startColor and endColor and set it to the variable amount. The lerpColor function performs the interpolation between the startColor and the endColor and the variable amount will determine the position between 0 and 1.

```js    
    for(var gridY = 0; gridY < numberOfColumns; gridY++){
        var startColor = colorLeft[gridY];
        var endColor = colorRight[gridY];

        for(var gridX = 0; gridX < numberOfRows; gridX++){
            var amount = map(gridX, 0, 5, 0, 1)

            var interCol = lerpColor(startColor, endColor, amount)
            fill(interCol)

            rect(gridX*tileWidth, gridY*tileHeight, tileWidth, tileHeight)
        }
    }
```

the shakeColor function gets a random colour for the start and end of each rows to interpolate between.

```js
function shakeColor() {
    for (var i = 0; i < numberOfRows; i++){
        colorLeft[i] = color(random(255), random(255), random(255));
        colorRight[i] = color(random(255), random(255), random(255));
    }
}

```


# Colour Palettes Through Interpolation - Step 3

First, we create another array called colours which will store the interpolated colours and then declare the interpolateShortest variable as true.

```js
var colors = [];

var interpolateShortest = true;
```

In the Draw function, we determine the number of rows and columns by the position of the mouse x and y positions and use the map function to convert it to an integer.

```js
numberOfRows = int(map(mouseX, 0, width, 2, 100));
numberOfColumns = int(map(mouseY, 0, height, 2, 10));
```

At the end of the grid loop we push the interpolation colours to the empty array.

```js
colors.push(interCol);
```

Lastly, in the shakeColors function, instead of being completely random, the colours are now set to switch between two values.

```js
colorsLeft[i] = color(random(0, 60), random(0, 100), 100);
colorsRight[i] = color(random(160, 190), 100, random(0, 100));
```


# Colour Palettes Through Interpolation - Final Step

WE add an if statement to the Grid loop. If the variable is truw we will interpolate using the RGB colourmode. If the variable is false then we will interpolate using the HSB colourmode.

```js
if (interpolateShortest) {
    colorMode(RGB);
    interCol = lerpColor(startColor, endColor, amount);
    colorMode(HSB);
} else {
    interCol = lerpColor(startColor, endColor, amount);
}
```

We add a new function called mouseReleased. When the mouse is clicked and released then the colours on the left and right columns will switch.

```js
function mouseReleased() {
    shakeColors();
}

```

Adding in the keypressed functions to save the canvas when the letter s is pressed. Using the generative design timestamp function to save the picture as a PNG.
By pressing the letter 'c' a file will be made saving the colour palette.
The keys 1 and 2 will change the variable to either true or false and therefore change the colourmode

```js
function keyPressed() {
    if (key == 'c' || key == 'C') writeFile([gd.ase.encode( colors )], gd.timestamp(), 'ase');
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
    if (key == '1') interpolateShortest = true;
    if (key == '2') interpolateShortest = false;
}

```
