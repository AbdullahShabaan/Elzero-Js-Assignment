let myForm = document.forms[0];
let result = document.querySelector(".result");
let MyInput = document.querySelector("[name='dollar']");
let DollarValue = 15.6;
myForm.oninput = function () {
  result.textContent = `{${MyInput.value || 0}} USD Dollar = {${
    (MyInput.value * DollarValue).toFixed(2) || 0
  }} Egyptian Pound`;
};
