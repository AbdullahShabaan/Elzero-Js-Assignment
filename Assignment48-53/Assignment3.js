let start = 1;
let end = 6;
let breaker = 2;

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

for (start; start <= end; start++) {
  console.log(`${start} 
-- ${breaker}
-- ${breaker + breaker}`);
}
