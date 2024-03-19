let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero

let mixResult = mix
  .map((e) => (isNaN(parseInt(e)) ? e : ""))
  .reduce((a, c) => a.concat(c));
console.log(mixResult);
