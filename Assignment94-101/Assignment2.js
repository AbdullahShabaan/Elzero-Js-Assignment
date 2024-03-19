let ClassToAdd = document.querySelector(".classes-to-add");
let Collection = document.querySelector(".classes-list div");
let Data = [];

// Add Classes
ClassToAdd.addEventListener("blur", function () {
  // Catch Data
  let AddInputs = ClassToAdd.value.trim().toLowerCase().split(" ").sort();

  // Data Validation
  if (ClassToAdd.value === " " || ClassToAdd.value === "") {
    console.log("The Class Can't be Empty Or Null");
  } else {
    Data = AddInputs;
  }

  // Create Classes
  for (let i = 0; i < Data.length; i++) {
    let MySpan = document.createElement("span");
    MySpan.textContent = Data[i];
    MySpan.className = `Element`;
    Collection.appendChild(MySpan);

    // Sort Classes
    [...Collection.children]
      .sort((a, b) => (a.innerText > b.innerText ? 1 : -1))
      .forEach((MySpan) => Collection.appendChild(MySpan));
  }

  // Remove Data From Input
  ClassToAdd.value = "";
});

let ClassToRemove = document.querySelector(".classes-to-remove");
let MySpans = document.getElementsByClassName("Element");

// Remove Classes
ClassToRemove.addEventListener("blur", function () {
  let RemoveInputs = ClassToRemove.value.trim().toLowerCase().split(" ");
  for (let i = 0; i < MySpans.length; i++) {
    for (let r = 0; r < RemoveInputs.length; r++) {
      if (MySpans[i].textContent === RemoveInputs[r]) {
        MySpans[i].remove();
      }
    }
  }

  // Remove Data From Input
  ClassToRemove.value = "";
});

// check classes exists
let message = document.createElement("p");
let messageText = document.createTextNode("There is no classes to show");
Collection.before(message);
message.appendChild(messageText);
document.onclick = function () {
  if (Collection.children.length > 0) {
    message.remove();
  } else {
    Collection.before(message);
  }
};
