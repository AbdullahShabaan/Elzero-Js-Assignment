class Car {
  constructor(name, model, price) {
    this.name = name;
    this.model = model;
    this.price = price;
  }
  Run() {
    return `Car Is Running Now`;
  }
  Stop() {
    return `Car Is Stopped`;
  }
}

let CarOne = new Car("BMW", "M3", "1,000,000");
let CarTwo = new Car("MG", "2020", "800,000");
let CarThree = new Car("Honda", "2012", "500,000");

console.log(
  `Car One Name Is ${CarOne.name} And Model Is ${CarOne.model} And Price Is ${CarOne.price}`
);
console.log(CarOne.Run());
