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

