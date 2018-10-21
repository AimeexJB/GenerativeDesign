# Colour Palettes from Images - Final Step

Creating a sortMode variable to store the sort mode that is being used

```js
var sortMode = null;
```

Adding in the keypressed functions to save the canvas when the letter s is pressed and using the generative design timestamp function to save the picture as a PNG
By pressing the letter 'c' a file will be made saving the colour palette and
Pressing the kets 1, 2, 3 & 4 will cycle through the different images saved.

```js
function keyReleased() {
    if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
    if (key == '1') img = loadImage('data/pic1.jpg');
    if (key == '2') img = loadImage('data/pic2.jpg');
    if (key == '3') img = loadImage('data/pic3.jpg');
    if (key == '4') img = loadImage('data/pic4.jpg');

    if (key == '5') sortMode = null;
    if (key == '6') sortMode = gd.HUE;
    if (key == '7') sortMode = gd.SATURATION;
    if (key == '8') sortMode = gd.BRIGHTNESS;
    if (key == '9') sortMode = gd.GRAYSCALE;
}
```



