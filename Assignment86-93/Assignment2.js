let myImage = document.images;
for (let i = 0; i < myImage.length; i++) {
  myImage[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  myImage[i].alt = "Elzero Logo";
  console.log(myImage[i]);
}
