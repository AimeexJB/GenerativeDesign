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




