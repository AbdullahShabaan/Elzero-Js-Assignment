let index = 10;
let jump = 2;

for (;;) {
  console.log(index);
  if (index <= jump + jump) {
    break;
  }
  index -= jump;
  // Write Your Code Here
}

// Output
10;
8;
6;
4;
