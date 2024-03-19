let username = document.getElementById("name");
username.onblur = function () {
  sessionStorage.setItem("name", this.value);
};
username.value = sessionStorage.getItem("name");

let age = document.getElementById("age");
age.onblur = function () {
  sessionStorage.setItem("age", this.value);
};
age.value = sessionStorage.getItem("age");

let id = document.getElementById("id");
id.onblur = function () {
  sessionStorage.setItem("id", this.value);
};
id.value = sessionStorage.getItem("id");

let selectBox = document.querySelector(".selectBox");
let selectBoxOptions = document.querySelectorAll(".selectBox option");
selectBoxOptions.forEach((e) =>
  e.value === sessionStorage.getItem("selectBox") ? (e.selected = 1) : ""
);
selectBox.onchange = function () {
  sessionStorage.setItem("selectBox", this.value);
};
