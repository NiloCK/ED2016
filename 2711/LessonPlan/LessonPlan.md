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

There are no technical prerequisites other than knowing what is meant by a 'square root', so it is possible to deliver the same material in a middle school setting. Expectations will be lower in middle school; the programming should likely be abandoned altogether in favor of concentrating on group discussion to reason about and define the main points of the algorithmic solution.

## Instruction

The lesson has three sections: a discussion of the problem to be solved, an introduction to JavaScript programming, and the solution of the problem with JavaScript. It is probably best to do the JavaScript introduction first (computer time), followed by the problem discussion (lecture time), followed by the problem solution (computer time).

An instructor or class experienced with a different programming language should use it. Instructors with no prior experience in programming are advised to carefully work through the provided resource before running the lesson with a class.

### Problem Definition (30-45 minutes)

#### Introduction (5-10 minutes)
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

#### Group Activity (15 minutes)

Divide the class into groups of four or five, and inform them that they'll be competing against each other in a timed activity. Calculators are not permitted. Alternatively, if enough calculators without square root buttons are available, one can be given to each student or group. This is a good option where students aren't strong with pencil-and-paper arithmetic. It's also a possibility to do a round by hand followed by a round with calculators.

The competition is to produce the most accurate approximation of the square root of 20. The intended method is guess, check, refine, and repeat. When a guess is found to be too small (because squaring it results in something less than 20), the guess is revised up and a new guess is investigated, and similarly with guesses that are too large. The best case for a group is to have several members simultaneously investigating different guesses, and coordinating their findings to determine suitable, shrinking range for the next round of investigation.

Students may hesitate to start with this method (guessing may not feel *clever* enough to be a winning strategy), but the ticking clock, the progress of their peers, and a nudge from the instructor should get them moving.

Calculators with square root buttons should not be used - the temptation to 'peek' at the solution is very natural, and is an established norm for students in mathematical settings where seeing the solution often suggests a way forward in the problem. In this case though, seeing the solution poisons the ability to correctly reason about the intended method; one cannot guess in good faith after seeing the answer.

#### Discussion (5-10 minutes)

After the activity has concluded, discuss the method used, and discuss the existence of a calculator's square root button. This is a tool that all of the students have used

### Programming

The programming exercise is meant to provide all of the necessary tools for students to complete a square root algorithm, but it should be expected that many students will require guidance and troubleshooting along the way. Sample solutions with explanatory remarks for each question follow.

Where a function is defined more than once in the same block, this represents equivalent solutions expressed with different semantics - think 'quarter after five' versus 'five fifteen'.

##### 1.

No 'solution' here - exercise completed with the command line on the page.

##### 2.

```js
function twoMoreThan(x){
  return x + 2;
}
function oneThirdOf(x){
  return x / 3;
}
```

This question is meant to introduce the basic arithmetic operations.

##### 3.
```js
function average(a,b){
  return (a + b) / 2;
}
```
a and b here can be called anything - (x,y), (number1,number2), etc. Another solution which uses code already on the page is:

```js
function average(x,y){
  return sum(x,y) / 2;
}
```

##### 4.

##### 5.
##### 6.
##### 7.

```js
function upperBound(x){
  return x + 1;
}
function upperBound(x){
  x = x + 1;
  return x;
}
function upperBound(x){
  var boundary = x + 1;
  return boundary;
}
```
We're looking, here, for a number that will be bigger than the square root of x - an initial boundary for our search. Most numbers will have square roots smaller than themselves, so it may be tempting to use the number itself as the upper bound. Numbers smaller than one, however, have square roots larger than themselves (eg, $1/2 * 1/2 = 1/4$). Adding one to the input will guarantee that we get a suitable upper bound.

##### 8.

```js
function lowerBound(x){
  return 0;
}
```
The upperBound and lowerBound questions are somewhat deceptive; there is a tendency to overthink. The algorithmic solution discussed by the class will work as long as it starts with a boundary below and above - zero will be below every square root, so it is a suitable boundary. There is no need to estimate a tighter low bound, so go with what's simple.

##### 9.
```js
function newGuess(lowBound, highBound){
  var sum = lowBound + highBound;
  var average = sum / 2;
  return averge;
}
function newGuess(lowBound, highBound){
  return (lowBound + highBound) / 2;
}
```

Returning the average of the two bounds is the best solution here.

Another tempting path is to make a small increment to the lower bound and return that, or to similarly make a small decrement to the upper bound and return that. There are a couple of problems with this approach. The first is that it only contracts the search space from one side, and has no way to move the other boundary closer to the true square root. Second, only a small amount of search space is eliminated with each step, and if we start with a large search spade, this search will take a long time. By contrast, when the above solution is used, the search space is cut in half with each step, so that a search space that's twice as large as another doesn't take twice as long to search but instead takes only one extra step.

##### 10.
```js
function squareRoot(x){
  var low = lowerBound(x); // 0
  var high = upperBound(x); // x + 1

  // keep searching until the search space is very small
  while(high - low > 0.0000001){
    var guess = newGuess(low, high); // (high + low) / 2

    if (guess * guess > x){
      //guess is too big, so we use it as the new high bound
      high = guess;
    } else {
      //guess is too low, so we use it as the new low bound
      low - guess;
    }
  }

  // the stopping condition has been met, so high and low
  // are very close together, and therefore very close to
  // the square root. Returning either or the average of
  // the two is fine.
  return high;
}
```
