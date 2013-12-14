# Debounce and Throttle patterns, in a more interactive way

<img
  src="https://raw.github.com/caiogondim/js-debounce-throttle-visual-explanation/gh-pages/images/logo.png"
  alt="Logo"
  align="right"
/>

__Debounce__ and __Throttle__ enables us to limit the frequency of execution of a
given function.

A _throttled_ function will execute no more than once every X
seconds, being X a variable. Repeated calls to a _throttled_ function that was
already being called in the last X seconds will be just ignored. Very useful for
some events that triggers a lot and very quickly, like `mousemove` or `onscroll`.

A _debounced_ function, in the other hand, is a function that postpones its
execution if its called again in less than X seconds. Very useful for ajax submit
buttons, when the user usually clicks more than once and fires many calls to
the server.


# How to use (and learn)

Visit the [experiment](http://caiogondim.github.io/js-debounce-throttle-visual-explanation/)
and keep moving your mouse. Everytime a `mousemove` event is triggered, we call
a function to update the row with a high vertical bar. If there was no
`mousemove` event in the last 200 ms, we draw a smaller bar. Every bar is
equivalent to 200ms.

To see the __debounced__ `mousemove` event to gets fired, just move and stop
your mouse. In no more than 200ms, it will get fired. Keep moving your mouse and
its execution will be postponed until you stop for, at least, 200ms.

The __throttled__ event is more easy to understand. It limits the frequency of
the function's execution to no more than once every 400ms. And since every bar on
the experiment stands for 200ms, that's why we get alternating bars.


# How to contribute

1. Fork this repository
2. Run `npm install`
3. Create a new branch for each feature or improvement
5. Run `grunt test` to ensure that your code respects the project standards
6. Send a pull request from each feature branch


# License

Copyright © 2013 [Caio Gondim](http://caiogondim.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
