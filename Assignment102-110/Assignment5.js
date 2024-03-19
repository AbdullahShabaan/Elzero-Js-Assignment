let myNumber = document.querySelector("div");

let counterInterval = setInterval(counter, 1000);

function counter() {
  if (myNumber.innerText == 0) {
    clearInterval(counterInterval);
  } else {
    if (myNumber.innerText == 5) {
      window.open(
        "https://elzero.org/javascript-bootcamp-assignments-lesson-from-102-to-110/",
        "_blank",
        "width=400,height=400"
      );
    }
    myNumber.innerText -= 1;
  }
}
