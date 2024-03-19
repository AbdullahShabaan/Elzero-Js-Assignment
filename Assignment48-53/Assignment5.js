let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

let count = letter.length;
for (let i = +false; i < friends.length; i++) {
  if (friends[i].toLowerCase().startsWith(letter)) {
    continue;
  }
  console.log(`${count++} => ${friends[i]}`);
}
