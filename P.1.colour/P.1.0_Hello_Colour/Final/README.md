# Hello Colour - Final Step

In the final step we add another function called keyPressed. This will save the canvas when the letter is pressed using the generative design timestamp function to lable saved picture with the mouse positions.


```js
function keyPressed() {

    if (key == 's'|| key == 'S') saveCanvas(gd.timestamp() + '_MouseX' + mouseX + '_MouseY' + mouseY, 'png');

}
```
