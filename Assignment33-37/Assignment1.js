// Test Case 1
let num = 9; // "009"

// Test Case 2
// let num = 20; // "020"

// Test Case 3
// let num = 110; // "110"

let result =
  num < 10 ? `00${num}` : num > 10 && num < 100 ? `0${num}` : `${num}`;
console.log(result);
