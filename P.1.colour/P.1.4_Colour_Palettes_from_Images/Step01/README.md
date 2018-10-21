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

