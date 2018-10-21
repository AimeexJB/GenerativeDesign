# Colour Palettes from Rules - Step 2


```js
    //limit mouse coordinates from 0 to the width and height of the canvas using the consrain function
    var mX = constrain(mouseX, 0, width);
    var mY = constrain(mouseY, 0, height);
```


```js
    // map mouse to grid resolution
    //Mapping the mouse from 1 to the number of rows and columns on the screen and converting them to integers
    var currentTileCountX = int(map(mX, 0, width, 1, tileCountX));
    var currentTileCountY = int(map(mY, 0, height, 1, tileCountY));
```

