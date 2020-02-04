# HW-3
## My Experience
For this assignment I learned more about JavaScript and how it can be applied to a single page to create a text adventure. I refreshed on functions and variables among other areas that I could carry over from my knowledge of both p5.js and Processing.js.

## Something New
The new area of focus for this week was using JavaScript to change objects in the DOM. It took me longer than I am willing to admit that index.html is not required when calling a DOM file. I was trying to figure out how to get HTML files to talk to each other until I realized that it wasn't necessary.

## Problems
Other than my mix up, the first problem I ran into was getting the different stages of JavaScript called on click without overlapping. I was initially adding a number (1-4) each time a button was clicked but it caused functions and later states to be called at the wrong time (1 is it's own state and 3 is it's own state. But upon selection of state 1 and then state 2, you return to state 3 instead of progressing). After adding a secondary variable `stage` to the code (thank you), everything began to fall into place. Though I will say I can't wait to use arrays as I can only imagine how much cleaner it is to code. This way of changing the HTML in each text and button every time became a bit of a mess rather quickly... I would've also like to include changing images, but I was having some difficulty getting it implemented the same way the text was. But, other than the images of the sword, my story doesn't include many visuals yet, so I'm not entirely sure I'm ready for it yet.

## For Next Week
Along with adding images to my text adventure. I would also like to change the cursor according to the weapon/item or lack there of chosen over the course of the story. I'm not sure what the parameters of our final project will be, but I can definitely see this project as a contender for something to continue, even in my free time...
