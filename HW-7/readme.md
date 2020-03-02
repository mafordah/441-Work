# HW-7
## My Experience
I had a very pleasant time coding this project as after p5.js and Processing, I know object oriented programing fairly well. It made applying it to JavaScript very easy. After building a quick little HTML structure, getting the five variables in the object, using methods and displaying them I was done within a couple of hours.

## Problems
The only problem I ran into was as an object was called randomly, the random integer would often repeat, causing the appearance of the button not working. I solved this by calling the random integer in a `while` loop and calling the `random` and `imageCardI` variables outside of the function. When I initially had the variables in the function, they would be called each time the function was called, resetting them to `null`. The loop then had no way of referring back to the previous variable. Moving the variables out retained their previous values so that the while loop code tell whether `random` was truly equal to `imageCardI`.
