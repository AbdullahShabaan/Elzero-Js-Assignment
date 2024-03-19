let MyDiv = document.querySelector("div");
let MySpan = document.querySelector("span");
let MyP = document.querySelector("p");
let MyArticle = document.querySelector("article");
let MySection = document.querySelector("section");

MyDiv.onclick = function () {
  console.log(`This is ${MyDiv.tagName}`);
};
MySpan.onclick = function () {
  console.log(`This is ${MySpan.tagName}`);
};
MyP.onclick = function () {
  console.log(`This is ${MyP.tagName}`);
};
MyArticle.onclick = function () {
  console.log(`This is ${MyArticle.tagName}`);
};
MySection.onclick = function () {
  console.log(`This is ${MySection.tagName}`);
};
