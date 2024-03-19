let one = document.querySelector(".one");
let two = document.querySelector(".two");
let newValue = two.textContent;
one.setAttribute(
  one.getAttributeNames()[one.childNodes.length],
  two.textContent.toLowerCase()
);
two.setAttribute(
  two.getAttributeNames()[one.childNodes.length],
  one.textContent.toLowerCase()
);
two.textContent = `${one.textContent} ${one.attributes.length}`;
one.textContent = `${newValue}`;
