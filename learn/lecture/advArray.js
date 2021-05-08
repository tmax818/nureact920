// Filter

/// takes a cb function
/// returns an array

// const students = ["James", "Jose", "Katya", "Kelsey", "Sergey"];

// const newStudents = students.filter(student => { return student.length < 5 })



// console.log(newStudents)

// Map

// takes a cb
// returns an array

// const nums = [1, 2, 3, 4]

// const newNums = nums.map(num => num ** 2)

// console.log(newNums)


const people = [
    { name: "Joe", age: 34 },
    { name: "Kathy", age: 24 },
    { name: "Mike", age: 56 },
]

const names = people.map(person => person.name)

const youngPeople = people.filter(person => person.age < 40).map(person => person.name)

console.log(youngPeople)


// const peopleNames = people.map(person => person.name)
// console.log(peopleNames)
// Reduce

// takes a cb, "the reducer" and an initial value
// returns a single output value
// the reducer takes two args: an accumulator and a current value
// const numbers = [1, 2, 3];

// const reduceNumbers = numbers.reduce((acc, cur) => {
//   console.log("acc:", acc,"cur", cur)
//   return acc + cur

// }, 0)

// console.log(reduceNumbers)

// const sum = numbers.reduce((acc, cur, i, arr) => {
//   arr.push(cur);
//   console.log(`acc: ${acc}, cur: ${cur}, i: ${i}, arr: ${arr}`);
//   return acc + cur;
// }, 0);

// console.log(sum);
