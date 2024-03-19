let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Output
// 2
// 3
// 4

for (start; start < mix.length; start++) {
  if (typeof mix[start] === "number") {
    if (mix[start] === +true) {
      continue;
    }
    console.log(mix[start]);
  }
}
