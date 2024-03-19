console.group("Group 1");
console.log("Message 1");
console.log("Message 2");

console.group("Child Group");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();

console.group("Grand Child Group");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();

console.groupEnd();
console.group("Group 2");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();
