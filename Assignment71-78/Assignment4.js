let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]

let numsAndStringsFilter = numsAndStrings
  .filter((e) => !isNaN(parseInt(e)))
  .map((ele) => -ele);

console.log(numsAndStringsFilter);
