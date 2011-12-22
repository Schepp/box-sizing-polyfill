# Preface and Credits

This box-sizing polyfill is based on previous work done by Erik Arvidsson, which he published in 2002 on [WebFX](http://webfx.eae.net/dhtml/boxsizing/boxsizing.html).

Since there were some edge/heavy usage cases where it broke I started pushing it further.

During that I also borrowed dimension measuring techniques form Dean Edwards' [IE7.js](http://code.google.com/p/ie7-js/) script.

Since the original was not aware of IE8 I added feature-detection for box-sizing, to do nothing when detected positive.

# Usage

Add the behavior/HTC after every *box-sizing: border-box;* that you assign:

`box-sizing: border-box;
*behavior: url(scripts/boxsizing.htc);`

If you prefix the `behavior` property with a star, like seen above, it will only be seen by IE6 & IE7, not by IE8+ (it's a hack) which is better for the performance on those newer browsers.
