# Colour Palettes from Rules - Step 1


```js
//Declaring the variables that create the rectangles along the X and Y axis
var tileCountX = 50;
var tileCountY = 10;
```


```js
function setup() {
    //making the canvas the size of the browser window
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100);
}
```


```js
    //white background
    background(0, 0, 100);

    //Dividing the width and height of the rectangles by the number of rows and columns and setting it to the variables
    var tileWidth = width / tileCountX;
    var tileHeight = height / tileCountY;
```


```js
    //Using a loop to create a grid or rectangles that fills the canvas
    for (var gridY = 0; gridY < tileCountY; gridY++) {
        for (var gridX = 0; gridX < tileCountX; gridX++) {
            var posX = tileWidth * gridX;
            var posY = tileHeight * gridY;

            fill(50,55,100)
            rect(posX, posY, tileWidth, tileHeight);
        }
    }
```
