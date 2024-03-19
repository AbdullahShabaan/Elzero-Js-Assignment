function specialMix(...data) {
  let result = 0;
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (parseInt(data[i])) {
      result += parseInt(data[i]);
      count++;
    }
  }
  if (count === 0) {
    return "All Is Strings";
  }
  return result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
