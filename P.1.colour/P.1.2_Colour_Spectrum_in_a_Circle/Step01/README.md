# Colour Spectrum in a Circle - Step 1




We set up the canvas and make the colourmode HSB where the Hue is 360 and the Saturation and Brightness are 100

```js
function setup() {
    createCanvas(800, 400);
    colorMode(HSB, 360, 100, 100);

}
```

In the draw function, we call the begin shape function which allows us to create complex shapes using the vertext to created each point and connect them and pass in the TRIANGL FAN parameter then the endShape function is called to stop the drawing

```js 
    beginShape(TRIANGLE_FAN);
        vertex(57.5, 50);
        vertex(57.5, 15);
        vertex(92, 50);
        vertex(57.5, 85);
        vertex(22, 50);
        vertex(57.5, 15);
    endShape();
```