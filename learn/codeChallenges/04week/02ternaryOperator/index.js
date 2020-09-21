// Refactor Challenge #1
1 + 1 === 2
  ? console.log("It is true that 1+1 equals 2.")
  : console.log("It is false that 1+1 equals 2.");

// Uncomment the below line (line 8) and hit the Run button. You should then see the console log "It is true that 1+1 equals 2." line twice.
//console.log(1+1===2 ? 'It is true that 1+1 equals 2.' : 'It is false that 1+1 equals 2.');

// Refactor Challenge #2 - you're on your own for this one buddy!
0 ? console.log("0 evaluates as true.") : console.log("0 evaluates as false.");

// Write your revision of the above code using the ternary operator here. Keep the above code - the expected result is that you will see "0 evaluates as false" in the console twice.

// Refactor Challenge #3
let hungry = true;
hungry ? console.log("Go eat something.") : console.log("Keep coding!");

// Write your revision of the above code using the ternary operator here. Keep the above code - the expected result is that you will see "Go eat something!" in the console twice.

// Refactor Challenge #4! The code you need to refactor is inside the function. For this one, go ahead and replace the contents of this function, rewritten using the ternary operator. You should be able to accomplish this in a single line.
const isEven = (dice) => (dice % 2 ? false : true);
// This is just code to supplement Refactor Challenge #4; you do not need to do anything with it.
const MAX = 6;
let dice = Math.floor(Math.random() * MAX + 1);
console.log(`You need to roll an odd number to win:\n
  You roll the dice... It tumbles and comes to a stop, showing ${dice} ${
  dice > 1 ? "pips" : "pip"
}! -- ${isEven(dice) ? "Better luck next time!" : "You win!"}`);
