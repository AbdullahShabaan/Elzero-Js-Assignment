// 1 commented it
// console.log("Iam In Console");
// document.write("Iam In Page");

// 2 make a execution
throw new Error("Something went badly wrong!");
console.log("Iam In Console");
document.write("Iam In Page");

// 3 use return
function Stop() {
  return;
  console.log("Iam In Console");
  document.write("Iam In Page");
}
