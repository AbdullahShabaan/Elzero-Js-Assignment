// Needed Output

// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"

let Birthday = new Date("5 aug , 2000");
console.log(Birthday);
let Birthday2 = new Date(Date.parse("5 aug , 2000"));
console.log(Birthday2);
let Birthday3 = new Date();
Birthday3.setFullYear(2000, 7);
Birthday3.setDate(5);
Birthday3.setHours(0);
Birthday3.setMinutes(0);
Birthday3.setSeconds(0);
console.log(Birthday3);
