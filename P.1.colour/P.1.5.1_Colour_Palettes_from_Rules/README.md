# Colour Palettes from Rules

1. [Step 1](Step01/)
2. [Step 2](Step02/)
3. [Step 3](Step03/)
4. [Final](StepFinal/)


# Colour Palettes from Rules - Step 1

First we declare the variables that create the rectangles along the X and Y axis.

```js
var tileCountX = 50;
var tileCountY = 10;
```

In the setup functionwe make the canvas equal to the browser window.

```js
function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100);
}
```

We set the background to white and then divide the width and height of the rectangles by the number of rows and columns and set it to the variables.

```js
    background(0, 0, 100);

    var tileWidth = width / tileCountX;
    var tileHeight = height / tileCountY;
```

We use a loop to create the grid and fill it with rectangles.

```js
    for (var gridY = 0; gridY < tileCountY; gridY++) {
        for (var gridX = 0; gridX < tileCountX; gridX++) {
            var posX = tileWidth * gridX;
            var posY = tileHeight * gridY;

            fill(50,55,100)
            rect(posX, posY, tileWidth, tileHeight);
        }
    }
```


# Colour Palettes from Rules - Step 2

We limit the mouse coordinates from 0 to the width and height of the canvas using the consrain function.

```js
    var mX = constrain(mouseX, 0, width);
    var mY = constrain(mouseY, 0, height);
```

We then map the mouse to grid resolution.
it is mapped from 1 to the number of rows and columns on the screen and c onverting them to integers.

```js
    var currentTileCountX = int(map(mX, 0, width, 1, tileCountX));
    var currentTileCountY = int(map(mY, 0, height, 1, tileCountY));
```


# Colour Palettes from Rules - Step 3

We declare variables for the hue, saturation and brightness that are empty arrays.

```js
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
```

Making a loop that creates random colour values for each variable. The colour will correspond to the tiles in the columns.

```js
for (var i = 0; i < tileCountX; i++) {
    hueValues[i] = random(360);
    saturationValues[i] = random(100);
    brightnessValues[i] = random(100);
}
```

A tile counter variable thats set to 0

```js
var counter = 0;
```

In the grid loop we add a new variable, index.
With each loop the counter is incremented and cycles through the same colour values, depending on the tilecount because of the '%' modulo symbol. This resets the counter to 1 when the color passes the current tile counts

we also get the values stored in each array index to fill the grid of tiles.

```js
var index = counter % currentTileCountX;

fill(hueValues[index], saturationValues[index], brightnessValues[index]);
rect(posX, posY, tileWidth, tileHeight);
counter++;
```


# Colour Palettes from Rules - Final Step


```js
if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == 'c' || key == 'C') {
    // -- save an ase file (adobe swatch export) --
    var colors = [];
    for (var i = 0; i < hueValues.length; i++) {
      colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
    }
    writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  }
```


```js
  if (key == '1') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = random(360);
      saturationValues[i] = random(100);
      brightnessValues[i] = random(100);
    }
  }

  if (key == '2') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = random(360);
      saturationValues[i] = random(100);
      brightnessValues[i] = 100;
    }
  }
```
