class Monster {
  constructor(type, color) {
    this.type = type;
    this.color = color;
    this.isScary = true;
  }
  roar() {
    console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
  }
}

class Dragon extends Monster {
  constructor(type, color, element) {
    super(type, color);
    this.element = element;
  }
  fly() {
    console.log(
      `The ${this.color} ${this.element} ${this.type} flaps its wings and begins to fly.`
    );
  }

  sleep() {
    console.log(`The ${this.color} ${this.type} is sleeping. Shhhh!`);
  }
}

class Werewolf extends Monster {
  constructor(type, color) {
    super(type, color);
  }
  howl() {
    console.log(`The ${this.type} howls loudly.`);
  }
}

const woodDragon = new Dragon("dragon", "brown", "wood");
//answers to challenge 1
woodDragon.roar();
woodDragon.fly();

// answer to challenge 2:

woodDragon.sleep();

// answer to challenge 3
const werewolf1 = new Werewolf("werewolf", "black");
werewolf1.howl();
