let theName = "Elzero";

// Needed Output
// ["E", "l", "z", "e", "r", "o"];
// 1
console.log([...theName]);
// 2
console.log(theName.split(""));
// 3
console.log(Array.from(theName));
// 4
console.log(Object.assign([], theName));
// 5
let array = [];
for (let i = 0; i < theName.length; i++) {
  array.push(theName[i]);
}
console.log(array);
