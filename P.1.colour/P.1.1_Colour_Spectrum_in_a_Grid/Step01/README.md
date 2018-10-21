# Colour Spectrum in a Grid - Step 1

In step 1 we create the 2 main functions. 

In the setup function we create the canvas, give it the colour mode HSB and give out shape no stroke.

```js
function setup() {

    createCanvas(800,500);
    colorMode(HSB, 360, 100, 100);
    noStroke();

}
```
In the draw function we add a rectangle to the top corner of the canvas and fill it with a colour.

```js
function draw() {

    rect(0, 0, 100, 100);
    fill(246, 296, 158);

}

```

