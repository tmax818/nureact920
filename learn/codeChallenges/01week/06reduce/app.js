// 1
const letters = ["h", "e", "l", "l", "o"];
// const greeting = letters.reduce((acc, cur) => acc + cur);
const greeting = letters.reduce((str, cur) => {
  console.log(`str = ${str}, cur = ${cur}`);
  return str + cur;
}, "");
// The below line should console.log: "hello"
console.log(greeting);

// 2 - uncomment lines 9 and 11
const numbers = [100, 3, 4, 1, 2];
//const total = numbers.reduce((total, current) => total * current);
const total = numbers.reduce((total, current) => {
  console.log(`total: ${total}, current: ${current}`);
  return total * current;
}, 1);
// The below line should console.log: 2400
console.log(total);

//Bonus - uncomment lines 15 and 17
const arrays = [
  ["how", "now"],
  ["brown", "cow"],
];
const flattenedArray = arrays.reduce((first, second) => first.concat(second));
// The below line should console.log: ["how", "now", "brown", "cow"]
console.log(flattenedArray);
