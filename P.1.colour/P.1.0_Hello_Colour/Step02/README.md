# Hello Colour - Step 2

In this step we add in the colour mode to the setup function,HSB (Hue Saturation Brightness) between 0 and 360 with a saturation and brightness of 100%

```js
colorMode(HSB, 360, 100, 100);
```
And in the draw function we add the background colour and making it change depending on the mouse positions with a brightness of 80


```js
background(mouseY/2, mouseX/2, 80)
```