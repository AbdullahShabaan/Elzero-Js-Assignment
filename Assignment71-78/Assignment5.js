let nums = [2, 12, 11, 5, 10, 1, 99];

// 500
let numsReduce = nums.reduce(
  (acc, curr) => (curr % 2 == 0 ? acc * curr : acc + curr),
  1
);

console.log(numsReduce);
