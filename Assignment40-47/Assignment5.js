let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
//1
console.log(haystack.includes(needle) ? "Found" : "");

//2
for (let i = 0; i < haystack.length; i++) {
  haystack[i] === needle ? console.log("Found") : "";
}

//3
haystack[0] === needle
  ? console.log("Found")
  : haystack[1] === needle
  ? console.log("Found")
  : haystack[2] === needle
  ? console.log("Found")
  : "";
