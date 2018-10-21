# Colour Spectrum in a Grid - Step 2

We disable the no stroke by commenting it out so we can see the individual rectangles on the screen

Then in the draw function we create a loop to draw a row of 10 rectangles across the canvas where gridX is used to determine the position of the rectangles along the X axis.

```js
for(var gridX = 0; gridX<800; gridX+=80){
        fill(246, 296, 158)
        rect(gridX,0, 100, 100)
    }
```
