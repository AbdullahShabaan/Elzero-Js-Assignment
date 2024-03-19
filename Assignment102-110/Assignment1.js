let GetNumber = window.prompt("Print Number From – To", "Example: 5-20");

let SplitNumber =
  GetNumber !== "" ? GetNumber.split("-").sort((a, b) => a - b) : [];
for (let i = +SplitNumber[0]; i <= SplitNumber[1]; i++) {
  console.log(i);
}
