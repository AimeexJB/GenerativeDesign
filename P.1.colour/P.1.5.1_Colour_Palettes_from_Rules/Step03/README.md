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


