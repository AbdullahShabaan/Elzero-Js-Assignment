let closeButton = document.getElementById("close-modal");
let moadl = document.getElementById("modal");

setTimeout(openModal, 2000);
function openModal() {
  moadl.classList.add("open");
}

closeButton.onclick = function () {
  moadl.classList.remove("open");
};
