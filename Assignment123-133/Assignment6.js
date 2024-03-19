let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6].sort();

// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
let num = [];
for (let i = 0; i < chars.length; i++) {
  if (typeof chars[i] === "number") {
    num.push(chars[i]);
  }
}

console.log(chars.copyWithin(0, num.length, num.length * 2));
