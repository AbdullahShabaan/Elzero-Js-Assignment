let SetOfNumbers = new Set([10]);
SetOfNumbers.add(20);
SetOfNumbers.add(SetOfNumbers.size);
console.log(SetOfNumbers);
console.log([...SetOfNumbers][[...SetOfNumbers].length - 1]);
