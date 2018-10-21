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
