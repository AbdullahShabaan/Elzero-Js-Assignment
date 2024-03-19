// Needed Output

// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"
let date = new Date();
let Birthday = new Date("5 aug , 2000");
let age = date - Birthday;
console.log(Math.round(age / 1000) + " Seconds");
console.log(Math.round(age / 1000 / 60) + " Minutes");
console.log(Math.round(age / 1000 / 60 / 60) + " Hours");
console.log(Math.round(age / 1000 / 60 / 60 / 24) + " Days");
console.log(Math.round(age / 1000 / 60 / 60 / 24 / 30) + " Months");
console.log(Math.round(age / 1000 / 60 / 60 / 24 / 365) + " Years");
