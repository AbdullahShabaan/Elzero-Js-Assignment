let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10

let rounded =
  +flt.toString().split(".")[1] < 5
    ? +flt.toString().split(".")[0]
    : +flt.toString().split(".")[0] + 1;
console.log(rounded); // 10
