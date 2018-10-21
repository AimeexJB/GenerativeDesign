# Hello Colour - Step 3

In this step we add a rectmode to the center of the canvas and give it no strokes in the setup function

```js
    rectMode(CENTER);
    noStroke();
```

And in the draw function we draw the rectangles which will be centered and making it change size depending on the mouse positions.
We also fill the rect the opposite of the background colour by minusing it from the mouseY direction. 360-0 instead of 0-360. 

```js
    fill(360-mouseY/2, 80, 80);
    rect(width/2, height/2, mouseX, mouseX);
```
