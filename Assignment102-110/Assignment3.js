let myNumber = document.querySelector("div");

let counterInterval = setInterval(counter, 1000);

function counter() {
  if (myNumber.innerText == 0) {
    clearInterval(counterInterval);
  } else {
    myNumber.innerText -= 1;
  }
}
