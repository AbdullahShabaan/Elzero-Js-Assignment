let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero
let arrayReduce = myArray.reduce((acc, curr) => acc.concat(curr), []).join("");

console.log(arrayReduce);
