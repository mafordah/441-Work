# HW-5
## My Experience
This week I learned about the different ways to change state, and how to use arrays in JavaScript. In theory, I really should have figured arrays out faster as they are nearly identical to every other time I've used arrays. I haven't, however, used states before. I can see how cookies and query strings could be used to personalize user experience.

In beginning the creation of my matching game, I started implementing arrays into my code. They definitely made my code far more organized. Getting everything to work was actually fairly simple this time around, but I did have a few issues.

## Problems
The first issue I ran into was the in try to use `addEventListener`. I stubbornly wanted us an event listener instead of the `onclick` in HTML. However, I realized quickly that it wasn't going to be as simple as I thought it was. While I was able to get it to work with a single image, I wasn't able to pull a variable into the function to display the rest with out the event listener iterating completely through all the images at once. At that point, I fell back on `onclick`.

The second issue I had was displaying two of each card. Even after going through the example code, I couldn't for the life of me get it to work with 5 images rather than 2. Instead of just leaving it a 2, I opted to instead create an array with all of the images (inspiration curtesy of Claire) and google how to shuffle an array in JavaScript. At this point I could at least ensure only two of each image made it in.

## Continuing Onward
From this point forward I will definitely be using arrays more often, and I definitely see how I can implement them into my final project. As far as the matching game, I left some images in my images folder with alternate versions of the cards. In theory, I would like to create a matching game in a way that you would actually play "Memory" with playing cards (all of the suits). However, I'm thinking I might run into issues when matching the images together as they wouldn't have the same path, but we shall see.
