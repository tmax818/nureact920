/// make bike from slide 11

const bicycle = {
  color: "blue",
  electric: false,
  start() {
    console.log("You begin to pedal the bike.");
  },
};

console.log(bicycle.color)
console.log(bicycle.electric)
bicycle.color = "green"
console.log(bicycle.color)

module.exports = bicycle;
