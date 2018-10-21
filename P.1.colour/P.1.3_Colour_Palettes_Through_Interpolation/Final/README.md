# Colour Palettes Through Interpolation - Final Step

WE add an if statement to the Grid loop. If the variable is truw we will interpolate using the RGB colourmode. If the variable is false then we will interpolate using the HSB colourmode.

```js
if (interpolateShortest) {
    colorMode(RGB);
    interCol = lerpColor(startColor, endColor, amount);
    colorMode(HSB);
} else {
    interCol = lerpColor(startColor, endColor, amount);
}
```

We add a new function called mouseReleased. When the mouse is clicked and released then the colours on the left and right columns will switch.

```js
function mouseReleased() {
    shakeColors();
}

```

Adding in the keypressed functions to save the canvas when the letter s is pressed. Using the generative design timestamp function to save the picture as a PNG.
By pressing the letter 'c' a file will be made saving the colour palette.
The keys 1 and 2 will change the variable to either true or false and therefore change the colourmode

```js
function keyPressed() {
    if (key == 'c' || key == 'C') writeFile([gd.ase.encode( colors )], gd.timestamp(), 'ase');
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
    if (key == '1') interpolateShortest = true;
    if (key == '2') interpolateShortest = false;
}

```
