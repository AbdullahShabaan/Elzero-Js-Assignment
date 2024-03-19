let myNumber = document.querySelector("div");

let counterInterval = setInterval(counter, 1000);

function counter() {
  if (myNumber.innerText == 5) {
    location.href =
      "https://elzero.org/javascript-bootcamp-assignments-lesson-from-102-to-110/";
  } else {
    myNumber.innerText -= 1;
  }
}
