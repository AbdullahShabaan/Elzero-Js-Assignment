// Select Font Style
if (!localStorage.getItem("FontStyle")) {
  localStorage.setItem(
    "FontStyle",
    document.querySelector(".Font option").value
  );
}
let FontStyle = document.querySelector(".Font");
FontStyle.onchange = function () {
  localStorage.setItem("FontStyle", this.value);
  document.body.style.fontFamily = localStorage.getItem("FontStyle");
};
document.body.style.fontFamily = localStorage.getItem("FontStyle");

let FontStyleOptions = document.querySelectorAll(".Font option");
FontStyleOptions.forEach((e) =>
  e.value === localStorage.getItem("FontStyle") ? (e.selected = 1) : ""
);

// Select Color
if (!localStorage.getItem("Color")) {
  localStorage.setItem("Color", document.querySelector(".Colors option").value);
}
let Color = document.querySelector(".Colors");
Color.onchange = function () {
  localStorage.setItem("Color", this.value);
  document.body.style.backgroundColor = localStorage.getItem("Color");
};
document.body.style.backgroundColor = localStorage.getItem("Color");

let ColorsOptions = document.querySelectorAll(".Colors option");
ColorsOptions.forEach((e) =>
  e.value === localStorage.getItem("Color") ? (e.selected = 1) : ""
);

// select font size
let parentClass = document.querySelector(".parent");
let FontSize = document.createElement("select");
FontSize.className = "FontSize";
for (let i = 16; i <= 32; i++) {
  let mySelectorOptions = document.createElement("option");
  let mySelectorOptionsText = document.createTextNode(i);
  mySelectorOptions.value = i;
  if (i + "px" === localStorage.getItem("FontSize")) {
    mySelectorOptions.selected = 1;
  }
  mySelectorOptions.appendChild(mySelectorOptionsText);
  FontSize.appendChild(mySelectorOptions);
}
parentClass.appendChild(FontSize);

FontSize.onchange = function () {
  localStorage.setItem("FontSize", this.value + "px");
  document.body.style.fontSize = localStorage.getItem("FontSize");
};
document.body.style.fontSize = localStorage.getItem("FontSize");
