import { my_named_export } from "./named.mjs";
import defaultFunc from "./default.mjs";
import DefExp, { SuperDuper } from "./combo.mjs";

console.log(my_named_export);

console.log(defaultFunc("this function is defined somewhere else!!!"));

class newClass extends SuperDuper {
  constructor(...props) {
    super(...props);
  }
}

const defimp = new DefExp();
const testclass = new newClass("tyler", 42);

console.log(testclass);
console.log(defimp);
