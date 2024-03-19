// Needed Output

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)";
// "Previous Month Is April And Last Day Is 30";

let CurrentDate = new Date();
CurrentDate.setDate(0);
console.log(CurrentDate);
console.log(
  `Previous month is ${CurrentDate.toLocaleString("en-US", {
    month: "long",
  })} and last day is ${CurrentDate.getDate()}`
);
