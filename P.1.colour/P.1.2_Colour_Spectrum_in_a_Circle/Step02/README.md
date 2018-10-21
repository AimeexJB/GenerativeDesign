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
