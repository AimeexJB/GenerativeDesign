# Hello Colour

1. [Step 1](Step01/)
2. [Step 2](Step02/)
3. [Step 3](Step03/)
4. [Final](Final/)

# Hello Colour - Step 1

In this step we set up the canvas using the 2 main functions.

The setup function is where we create the canvas that will be displayed on the screen. It run once when the page is initialized

The Draw function is constantly looping through each line of code that is inside it


```js
function setup() {
    createCanvas(500, 500);
}

function draw() {

}
```

# Hello Colour - Step 2

In this step we add in the colour mode to the setup function,HSB (Hue Saturation Brightness) between 0 and 360 with a saturation and brightness of 100%

```js
colorMode(HSB, 360, 100, 100);
```
And in the draw function we add the background colour and making it change depending on the mouse positions with a brightness of 80


```js
background(mouseY/2, mouseX/2, 80)
```


# Hello Colour - Step 3

In this step we add a rectmode to the center of the canvas and give it no strokes in the setup function

```js
    rectMode(CENTER);
    noStroke();
```

And in the draw function we draw the rectangles which will be centered and making it change size depending on the mouse positions.
We also fill the rect the opposite of the background colour by minusing it from the mouseY direction. 360-0 instead of 0-360.

```js
    fill(360-mouseY/2, 80, 80);
    rect(width/2, height/2, mouseX, mouseX);
```


# Hello Colour - Final Step

In the final step we add another function called keyPressed. This will save the canvas when the letter is pressed using the generative design timestamp function to lable saved picture with the mouse positions.

```js
function keyPressed() {

    if (key == 's'|| key == 'S') saveCanvas(gd.timestamp() + '_MouseX' + mouseX + '_MouseY' + mouseY, 'png');

}
```
