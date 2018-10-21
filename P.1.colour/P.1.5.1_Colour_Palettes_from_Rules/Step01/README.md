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
