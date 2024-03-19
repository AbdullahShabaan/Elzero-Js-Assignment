// // main.js File
// console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60

// // mod-two.js File
// let a = 10; // Do Not Edit Names
// let b = 20; // Do Not Edit Names
// let c = 30; // Do Not Edit Names

import calc from "./moduleOne.js";
import { a as numOne, b as numTwo, c as numThree } from "./moduleTwo.js";
console.log(calc(numOne, numTwo, numThree));
