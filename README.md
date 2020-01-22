# Simon-Game
Classic Simon Game - inspired by Udemy Course w/ Angela Yu

*****Simon Game, by Clifton Hill*****
clifton [@] cliftonh [dot] com / https://github.com/CliftonHill
*Made with vanilla JS and jQuery. Game inspired by Angela Yu (App Brewery) Udemy course on Complete Web Development (https://www.udemy.com/course/the-complete-web-development-bootcamp). Code and approach to coding was all done by Clifton Hill with major help from a Stack Overflow answer (https://stackoverflow.com/questions/59762779/how-to-pause-javascript-execution/59762867#59762867), as well as checking the Udemy course solution for how to make the audio play as expected. Sounds are part of Udemy course.

Code is © 2020 by Clifton Hill

FEATURES:
With each success, level increasese and time to reply decreases
Game resets with each new game.
Game faiure is run when input is wrong and time runs out, or input sequence length is equal to computer sequence but does not match.

Future Improvements/Current failings:
At times, first buttonAnimation starts too early after user finishes input and it is confusing as to how many times it flashes. Need a delay between levels. Prior attempt at this solution failed, but this may have been because of overlapping asynchrous function timing for userTurn func. userTurn has been fixed, so this
*Want: fail state for wrong sequence input at time of actual wrong input, and fail once input sequence exceeds played sequence, even if time has not run out
*Want: increase speed of sequence play by program


