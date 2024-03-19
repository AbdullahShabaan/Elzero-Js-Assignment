// To Format Card Number
String.prototype.format = function (value) {
  let result = "";
  let ParseValue = value.toString();
  for (let i = 0; i < ParseValue.length; i++) {
    if (i % 4 == 0 && i != 0) {
      result += "-";
    }
    result += ParseValue[i];
  }
  return result;
};
// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }

  get showData() {
    let reg = /\d{4}-\d{4}-\d{4}-\d{4}/gi;
    let formatCardNumber = reg.test(this.#c)
      ? this.#c
      : String.prototype.format(this.#c);
    return `Hello ${this.name} Your Credit Card Number Is ${formatCardNumber}`;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
