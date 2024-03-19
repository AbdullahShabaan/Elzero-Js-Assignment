let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// Needed Output
// [1, 2, 3, 4, 5, 6]
// 1
console.log([...numsOne, ...numsTwo]);
// 2
console.log(numsOne.concat(numsTwo));
// 3
let merge = numsOne;
merge.push(...numsTwo);
console.log(merge);
