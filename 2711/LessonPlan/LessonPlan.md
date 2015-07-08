# An Algorithmic Approach to Square Root Finding

## Background and Purpose

One topic explored throughout the middle school mathematics curriculum is the notion of using 'benchmarks' in order to inform estimations. A particular case is to use perfect square benchmarks in order to estimate the value of unknown square roots.

For example, 20 is between 16 and 25, so its square root must be between 4 and 5 (the roots of 16 and 25, respectively). Being roughly halfway between 16 and 25, we estimate that the root is similarly spaced between 4 and 5, at  around 4.5. By contrast, 17 also lies inside the 16-25 benchmarks, but its proximity to 16 might lead to an estimate for its square of about 4.1.

This lesson uses this square-root estimation technique as a jumping off point in order to introduce:

 - Algorithmic thinking
 - Computation as a medium for tool-making
 - Computer programming

## Intended Audience and Schedule

This lesson is intended as a lecture / project for a senior high classroom. Activities surrounding the first two points (Algorithmic thinking, Computation as a medium for tool-making) should take an hour or less. The third point will take anywhere between half an hour and two hours depending on levels of supervision.

There are no technical prerequisites other than knowing what is meant by a 'square root', so it is possible to deliver the same material in a middle school setting. Expectations will be lower in middle school; the programming should likely be abandoned altogether in favor of concentrating on group discussion to reason about and define the main points of the solution.

## Instruction Schedule

### Introduction (2-5 minutes)

Begin with a question to the class:

> Can anyone tell me the square root of 16?

After getting a correct response, sketch a 4 by 4 square on the board, and use it to refresh the concept of square roots for those students in class who will benefit from it.
 - A shape's "Area" refers to the number of 1x1 squares that fit inside of it
 - The large square has an area of 16
 - The width and height of this square are 4, resulting in 4 rows each with 4 little squares - 16 in total.
 - The "Square root" of X refers to the side length of the square which has area X. Eg, the side length of the square which fits X little 1x1 squares inside of it.
 - Equivalently, the "Square root" of X refers to the number which, when multiplied by itself, produces X.

Follow with a second question to the class:

> Can anyone tell me the square root of 25?

Correct, confident responses will follow. Sketch the 5 by 5 solution on the board to the right of the previous 4 by 4, but leave space between them.

### Activity 1 (15 minutes)

Divide the class into groups of four or five, and inform them that they'll be competing against each other in a timed activity. Communicate that calculators are prohibited, and instruct them to police one another on this point.

Alternatively, if enough calculators that don't have square root buttons are available, one can be given to each student or group. This is a good option where students aren't able to do pencil-and-paper arithmetic. It's also a possibility to repeat the activity for )

The competition is to produce the most accurate approximation of the square root of 20. The intended method is guess, check, repeat. When a guess is found to be too small (because squaring it results in something less than 20), the guess is revised up and a new guess is investigated. The best case for a group is to have all members simultaneously investigating different guesses, and coordinating their findings to determine suitable range for the next round of investigation.

Students may hesitate to start with this method (guessing may not feel *clever* enough to be a winning strategy), but the ticking clock, the progress of their peers, and a nudge from the instructor should get them moving.

### Discussion (5-10 minutes)

After 

### Programming

```js
function squareRoot(number) {
   var i = 0;
}
```
