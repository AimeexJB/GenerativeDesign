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


