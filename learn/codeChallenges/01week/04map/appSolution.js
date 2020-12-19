// 1
const numbers = [1, 1, 2, 3, 5];
const numbersAddFive = numbers.map((x) => x + 5);
// The below line should console.log: [6, 6, 7, 8, 10]
console.log(numbersAddFive);

// 2 - uncomment the lines that start with "const" and "console.log"
const numbersReformatted = numbers.map((x) => `${x}: `);
// The below line should console.log: ["1: ", "1: ", "2: ", "3: ", "5: "]
console.log(numbersReformatted);

// 3
const words = ["planes", "trains", "automobiles"];
const singularWords = words.map((word) => word.slice(0, -1));
// The below line should console.log: ["plane", "train", "automobile"]
console.log(singularWords);

// 4:
const firstLetters = words.map((word) => word[0]);
// The below line should console.log: ["p", "t", "a"]
console.log(firstLetters);

// Bonus:
const capitalizedWords = words.map(
  (word) => word.charAt(0).toUpperCase() + word.slice(1, word.length)
);
// The below line should console.log: ["Planes", "Trains", "Automobiles"]
console.log(capitalizedWords);
