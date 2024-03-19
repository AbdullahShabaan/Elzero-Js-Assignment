let before = performance.now();
for (let i = 1; i <= 99999; i++) {
  console.log(i);
}
let after = performance.now();
console.log(`Loop Took ${(after - before).toFixed(0)} Milliseconds.`);
