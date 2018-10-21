# Colour Spectrum in a Grid - Final Step

We add the 2 global variables to the draw function and change the stepX and stepY so they are now determined by the mouse position. We divde by 5 to reduce the amount of steps there are and add 1 to prevent the value from being to small and causing the page to freeze.

```js
    stepX = mouseX/5 +1;
    stepY = mouseY/5 +1;
```

In the loop we change the fill so that the Hue is now determined by the gridX, The saturation is determined by the gridY minus the Height of the canvas so that the colours appear going downwards
```js
fill(gridX, height - gridY, 100)
```

Weadd the keyPressed function. This will save the canvas when the letter is pressed using the generative design timestamp function to lable saved picture with the mouse positions.
```js
function keyPressed() {

    if (key == 's'|| key == 'S') saveCanvas(gd.timestamp() + '_MouseX' + mouseX + '_MouseY' + mouseY, 'png');

}
```
