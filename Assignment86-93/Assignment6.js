let myForm = document.forms[0];
let NumbersOfElements = document.querySelector("[name='elements']");
let ElementText = document.querySelector("[name='texts']");
let ElementType = document.querySelector("[name='type'");
let MainClass = document.querySelector(".results");
myForm.onsubmit = function (event) {
  document.querySelector(".results").replaceChildren();
  for (let i = 1; i <= NumbersOfElements.value; i++) {
    let myElement = document.createElement(ElementType.value);
    myElement.className = "Box";
    myElement.id = `id-${i}`;
    myElement.title = "Element";
    let myElementText = document.createTextNode(ElementText.value);
    myElement.appendChild(myElementText);
    MainClass.appendChild(myElement);
  }

  event.preventDefault();
};
