// Filter

/// takes a cb function
/// returns an array

const students = ["James", "Jose", "Katya", "Kelsey", "Sergey"];

const kstudents = students.filter((student) => student[0] === "K");

//console.log(kstudents);

// Map

// takes a cb
// returns an array

const numbers = [1, 2, 3];

const squared = numbers.map((number) => number ** 2);

// console.log(squared);

// Reduce

// takes a cb, "the reducer" and an initial value
// returns a single output value
// the reducer takes two args: an accumulator and a current value

const sum = numbers.reduce((acc, cur, i, arr) => {
  arr.push(cur);
  console.log(`acc: ${acc}, cur: ${cur}, i: ${i}, arr: ${arr}`);
  return acc + cur;
}, 0);

console.log(sum);
