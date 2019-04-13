# Algorithms.js

*Instructions*

After cloning:
```
npm install
npm test
```

...then make the tests pass.

Once you've completed the basic tests which help you practice writing code, move on to the stories below where you will practice writing your own tests.

## Exercises

Use TDD to implement the functions and methods below. The features can help you form tests before you begin coding.

Implement `Array.prototype.mapper()` which functions the same as `Array.prototype.map()`. 

* mapper takes a callback
* mapper is an Array method
* applies the callback to the array
* returns the expected result of the callback

Implement `Array.prototype.filterer()` which functions the same as `Array.prototype.filter()`.

* filterer takes a callback
* filterer is an Array method
* filters the array with the callback
* returns the expected result of the callback

Implement a `range(start, stop, step)` function which creates a new array. It has 1 mandatory argument: the length of the resulting array. It can take up to 3 arguments though: starting and stopping point OR starting and stopping point and steps (increments).

```
// Example usage:
range(10)       //-> [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
range(1, 10)    //-> [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
range(1, 10, 2) //-> [ 1, 3, 5, 7, 9 ]
``` 

* the step argument works with all integers (positive and negative)
* the stop and start arguments must be positive integers only

Resources:
* [Algorithm Deck](https://drive.google.com/open?id=1raZx8K8cWmQkwmjxJ3qZ-GG6zEAawtsmtGgxnd-DXfU)
* Public Link: https://github.com/code-workshops/algorithmsjs

Try to practice one algorithm a day. If you don't come up with a solution by the end of the day, _look up the solution and study it_!
Don't stay stuck on a problem for too long. You'll benefit more from studying the solution and trying again afterwards.


*Summary*

During a white board session, go step by step, asking questions throughout:

1. Analyze and question
    * What does the algorithm do?
    * What are the inputs and outputs (data types)?
    * Any restraints or rules?
2. Example/test of how it will be used
3. Visualize and discuss (draw it out if necessary)
4. Pseudocode the approach
5. Code
