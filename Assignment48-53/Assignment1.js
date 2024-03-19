let start = 10;
let end = 100;
let exclude = 40;

// Output
10;
20;
30;
50;
60;
70;
80;
90;
100;

let count = start;
for (start; start <= end; start += count) {
  start != exclude ? console.log(start) : "";
  continue;
}
