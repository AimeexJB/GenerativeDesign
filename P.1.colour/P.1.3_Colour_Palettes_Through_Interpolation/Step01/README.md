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

