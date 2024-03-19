let theNumber = 100020003000;

// Needed Output
// 123

console.log(+[...new Set([...theNumber.toString()])].sort().join(""));
