# Colour Spectrum in a Grid - Step 3

We add two new global variables to the start of the srcript that canbe used throughout the code. These act as the width and height of the rectangles

```js
var stepX = 10;
var stepY = 15;
```
The Hue and Saturation are set to the width and height of the canvas. The Hue is from 0 - 800 and the Saturation is from 0 - 500.

```js
colorMode(HSB, width, height, 100);
```

In the draw function we nest the gridX loop in a gridY loop to create rectangles all over the canvas. gridY is used to determin the rectangles along the Y axis

We then sub in stepX and stepY for the width and height

```js
for(var gridY = 0; gridY<800; gridY+=stepY){
        for(var gridX = 0; gridX<800; gridX+=stepX){
            fill(246, 296, 158)
            rect(gridX,gridY,stepX,stepY)
        }
    }
```
