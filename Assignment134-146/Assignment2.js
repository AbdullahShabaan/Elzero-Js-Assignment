let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

// Output
// ['Os10O', 'OsO', 'Os100O']

let reg = /os\w*o/gi;
console.log(specialNames.match(reg));
