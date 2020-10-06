# Simon-Game
Classic Simon Game - inspired by Udemy Course w/ Angela Yu
* **by Clifton Hill**
* cliftonhhill [@] gmail [dot] com / [GitHub Profile](https://github.com/CliftonHill) / [LinkedIn](https://www.linkedin.com/in/crusadingthought)
* Game live at: <https://cliftonhill.github.io/Simon-Game/>

## Introduction
Game inspired by Angela Yu (App Brewery) Udemy course on [Complete Web Development](https://www.udemy.com/course/the-complete-web-development-bootcamp). Code and approach to coding was all done by Clifton Hill with help from a [Stack Overflow answer](https://stackoverflow.com/questions/59762779/how-to-pause-javascript-execution/59762867#59762867), as well as checking the Udemy course solution for how to make the audio play as expected.

* Made with vanilla JS and jQuery.
* Sounds are part of Udemy course.
* Code is © 2020 by Clifton Hill

## Features:
* With each success, level increases and time to reply decreases
* Game resets with each new game.
* Game failure is run when input is wrong and time runs out, or input sequence length is equal to computer sequence but does not match.

## Future Improvements
* Fail state for wrong sequence input at time of actual wrong input, and fail once input sequence exceeds played sequence, even if time has not run out
* Increase speed of sequence play by program
* Add/change start functionality so that game can be played on mobile. Current way to start game is to press letter "A" on keyboard. Need button to start play instead.

## Current Failings:
* At times, first buttonAnimation starts too early after user finishes input and it is confusing as to how many times it flashes. Need a delay between levels. Prior attempt at this solution failed, but this may have been because of overlapping asynchrous function timing for userTurn func. userTurn has been fixed, so this may now function. Need to test...
