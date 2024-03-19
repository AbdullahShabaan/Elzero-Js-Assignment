let myString = "EElllzzzzzzzeroo";

// Elzero

let myStringFilter = myString
  .split("")
  .filter((element, index, array) => array.indexOf(element) === index)
  .reduce((ac, cur) => ac.concat(cur));
console.log(myStringFilter);
