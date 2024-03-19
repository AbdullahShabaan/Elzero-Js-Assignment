let start = 10;
let end = 0;
let stop = 3;

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

for (start; start > end; start--) {
  start > 9 ? console.log(`${start}`) : console.log(`0${start}`);
  if (start === stop) {
    break;
  }
}
