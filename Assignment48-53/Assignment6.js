let start = 0;
let swappedName = "elZerO";

// Output
// ("ELzERo");

let result = "";
for (start; start < swappedName.length; start++) {
  swappedName[start].toUpperCase() === swappedName[start]
    ? (result += swappedName[start].toLowerCase())
    : (result += swappedName[start].toUpperCase());
}
console.log(result);
