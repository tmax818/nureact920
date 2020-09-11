export class SuperDuper {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  coolFunc = () => {
    console.log("I'm cool!!!!");
  };
}

class DefExp {
  constructor() {
    console.log("I got nothin'");
  }
}

export default DefExp;
