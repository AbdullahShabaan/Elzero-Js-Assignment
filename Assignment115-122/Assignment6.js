let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

chosen === 1
  ? ([
      {
        title,
        age,
        available,
        skills: [, skill],
      },
    ] = myFriends)
  : chosen === 2
  ? ([
      ,
      {
        title,
        age,
        available,
        skills: [, skill],
      },
    ] = myFriends)
  : chosen === 3
  ? ([
      ,
      ,
      {
        title,
        age,
        available,
        skills: [, skill],
      },
    ] = myFriends)
  : "";

console.log(title);
console.log(age);
console.log(available ? "Available" : "Not Available");
console.log(skill);
// Write Your Code Here

// If chosen === 1

// ("Osama");
// 39;
// ("Available");
// ("CSS");

// // If chosen === 2

// ("Ahmed");
// 25;
// ("Not Available");
// ("Django");

// // If chosen === 3

// ("Sayed");
// 33;
// ("Available");
// ("Laravel");
