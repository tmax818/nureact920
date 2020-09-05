// 1 - white rabbit
const rabbit = {
  color: "white",
  checkWatch() {
    console.log(
      `A ${this.color} rabbit checks his watch and exclaims, 'I\'m late!'`
    );
  },
};
rabbit.checkWatch();

// 2 - spaceship
const spaceship = {
  // your code here - uncomment the spaceship.launch() line below when done
  name: "Whatever I wish",
  launch() {
    alert(`You have launched the spaceship, ${this.name}!`);
  },
};
spaceship.launch();

// 3 - shopping cart
const cart = {
  // your code here - uncomment the two lines below this object when done
  contents: [],
  addItem(item) {
    this.contents.push(item);
  },
};
cart.addItem("laptop");
console.log("The cart contains:", cart.contents);

// 4 - lever
// your code here - uncomment the line below when done
const lever = {
  stamp: "ACME",
  pull() {
    console.log(`An anvil stamped ${this.stamp} drops on your head.`);
  },
};

lever.pull();

// 5 - Your object here

// bonus

cart.removeItem = function (item) {
  rmIndex = cart.contents.indexOf(item);
  if (rmIndex !== -1) {
    cart.contents.splice(rmIndex, 1);
  }
};

// these are my tests
cart.removeItem("ipad");
console.log(cart.contents);
cart.removeItem("laptop");
console.log(cart.contents);
