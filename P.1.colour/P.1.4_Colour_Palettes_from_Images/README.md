# Colour Palettes from Images

1. [Step 1](Step01/)
2. [Step 2](Step02/)
3. [Step 3](Step03/)
4. [Final](StepFinal/)


# Colour Palettes from Images - Step 1

Before the setup function we introduce a new function called preload. It is used to load external files in a blocking way. We then load an image into the canvas from the path.

```js
var img;

function preload() {
    img = loadImage('data/pic1.jpg');
}
```

In the draw function we draw the pixels data for this image into the [pixels] attributes.

```js
    img.loadPixels();

    console.log(img.loadPixels());
```


# Colour Palettes from Images - Step 2

In the draw function, we declare the variable tileCount and setting it to 20
then we set the width of each tile using the rectSize variable.
By adding the colours array to the draw function, we empty the array through each itteration.

```js
    var tileCount = 20;
    var rectSize = width / tileCount;

    colors = [];
```

We then create the grid loop after loading the pixels into the canvas.
For each gridX value we need to work out a colours to be stored. The pixels are stored in the pixels array as a long list of values.

We then work out the pixel value in the x and y and convert it to the appropraite index value in the pixels array.

We create the colour object which stores the pixels in the index and push them to the array.

```js
    for (var gridY = 0; gridY < tileCount; gridY++) {
        for (var gridX = 0; gridX < tileCount; gridX++) {

            var px = int(gridX * rectSize);
            var py = int(gridY * rectSize);

            var i = (py * img.width + px) * 4;

            var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);

            colors.push(c);
        }
    }
```


# Colour Palettes from Images - Step 3

we change the tileCount variable to use the mouse to determine the number of rows and columns in the grid then use the max function to selsct the larger value and floor it.

```js
    var tileCount = floor(width/max(mouseX, 5));
```

We use anothe loop to draw the colours out using the colour array then set the rectangles.

```js
    var i = 0;

     for (var gridY = 0; gridY < tileCount; gridY++) {
        for (var gridX = 0; gridX < tileCount; gridX++) {
            fill(colors[i]);
            rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
            i++;
        }
    }
```


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
