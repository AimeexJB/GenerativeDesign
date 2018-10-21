# Colour Palettes from Images - Step 3

we change the tileCount variable to use the mouse to determine the number of rows and columns in the grid then use the max function to selsct the larger value and floor it.

```js
    var tileCount = floor(width/max(mouseX, 5));
```

We use anothe loop to draw the colours out using the colour array then set the rectangles.

```js
    var i = 0;

     for (var gridY = 0; gridY < tileCount; gridY++) {
        for (var gridX = 0; gridX < tileCount; gridX++) {
            fill(colors[i]);
            rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
            i++;
        }
    }
```

