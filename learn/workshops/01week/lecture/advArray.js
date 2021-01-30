// Filter

// takes a cb
// returns an array

const names = [
  { name: "Jorge", favLang: "JavaScript" },
  { name: "Mark", favLang: "JavaScript" },
  { name: "Marcus", favLang: "Python" },

]

const jsLovers = names.filter(name => name.favLang === "JavaScript")[0].name

console.log(jsLovers);

//Map

//take a cb
//returns ann array

// const numbers = [1, 2, 3]

// const sqrNums = numbers.map(num => num * num)[0]

// console.log(sqrNums)