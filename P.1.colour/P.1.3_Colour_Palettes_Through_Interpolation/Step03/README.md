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
