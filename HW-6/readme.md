# HW-6
## My Experience
This week I was able to put my local storage knowledge from last week to work in the second addition of my "Memory" game. I've also been able to call JSON objects in and out of storage while viewing them in HTML.

## Something New
I took it upon myself this week to look up how to create a timer in JavaScript. I really wanted to have the time spent be apart of the score like an old school version of windows solitaire. I was able to also store this in local storage with JSON just as I stored everything else.

## Problems
The first problem I came across was actually more of a bug. When a set of cards where not considered a match, both cards would flip back over before the second card was ever visible. I fixed this by adding a `setTimeout()` for one second before the cards flipped back over. I used this same technique to fix an error where there wasn't enough time for the end game sound to play before the page changed to the end screen. The second bug I found was if you clicked the cards too quickly, the third card clicked would register as part of the pair, leaving an earlier card left open. The way I was able to fix this was by disabling mouse events after two cards are flipped. A bigger issue I ran into was not realizing I needed to restore objects after changing them. I was under the false impression that they would update when changed. They do not! Once I figured this out, the rest went fairly quick.
