import { my_named_export } from "./named.mjs";
import defaultFunc from "./default.mjs";

console.log(my_named_export);

console.log(defaultFunc("this function is defined somewhere else!!!"));
