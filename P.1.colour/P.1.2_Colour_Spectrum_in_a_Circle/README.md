# Colour Spectrum in a Circle

1. [Step 1](Step01/)
2. [Step 2](Step02/)
3. [Step 3](Step03/)
4. [Final](Final/)


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


# Colour Spectrum in a Circle - Step 2

In this step we only add code to the draw function.

We add in the background colour and 3 variables.
segmentCount is set to 360 as a circle is 360 degrees, 360 segments, The angleIncrement depends on how many segments are to be drawn and the radius is the size of the circle on the canvas

```js
    background(374, 296, 158);

    var segmentCount = 360
    var angleIncrement = 360/segmentCount
    var radius = 200;
```
Here we are drawing the first vertex in the middle of the canvas, we then remove all the other vertices and instead create a loop.

In this loop we need to convert angle from degrees to radians because we use the functions sin() and cos() and then use the values from converting the angle in the vertex to complete the circle.

The angle is then used as the Hue to fill and give colours ranging from 0-360.

```js

    beginShape(TRIANGLE_FAN);

        vertex(width/2, height/2);

        for(var angle = 0; angle <= 360; angle = angle+angleIncrement){
            var vx = radius * cos(radians(angle)) + width/2;
            var vy = radius * sin(radians(angle)) + height/2;

            vertex(vx, vy);
            fill(angle, 100, 100);
        }

    endShape();
```


# Colour Spectrum in a Circle - Step 3

In Step 3 we use the map function for the segmentCount so that the amount of triangles changes depending on the mouseY position

```js
    var segmentCount = map(mouseY, 0, height, 1, 360);
```


# Colour Spectrum in a Circle - Final Step

Adding in the keypressed functions to save the canvas when the letter s is pressed and using the generative design timestamp function to save the picture as a PNG.

The switch command checks the last key pressed so that is is easy to switch between different cases


```js
function keyPressed() {

    if (key == 's'|| key == 'S') saveCanvas(gd.timestamp(), 'png');

    switch(key) {
        case '1':
            segmentCount = 360;
            break;
        case '2':
            segmentCount = 45;
            break;
        case '3':
            segmentCount = 24;
            break;
        case '4':
            segmentCount = 12;
            break;
        case '5':
            segmentCount = 6;
            break;

    }
}
```
