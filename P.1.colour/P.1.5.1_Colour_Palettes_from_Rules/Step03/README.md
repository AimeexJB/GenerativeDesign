# Colour Palettes from Rules - Step 3


```js
//Declaring variables for the hue, saturation and brightness that are empty arrays
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
```


```js
//Creating random colour values for each variable
    //The colour will correspond to the tiles in the columns
    for (var i = 0; i < tileCountX; i++) {
        hueValues[i] = random(360);
        saturationValues[i] = random(100);
        brightnessValues[i] = random(100);
    }
```


```js
//A tile counter variable thats set to 0
    var counter = 0;
```


```js
 //With each loop the counter is incremented and cycles through the same colour values, 
//depending on the tilecount because of the '%' modulo symbol 
//This resets the counter to 1 when the color passes the current tile counts
var index = counter % currentTileCountX;

//getting the values stored in each array to fill the grid of tiles
fill(hueValues[index], saturationValues[index], brightnessValues[index]);
rect(posX, posY, tileWidth, tileHeight);
counter++;
```