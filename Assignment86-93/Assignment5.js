let image = document.images;
for (let i = 0; i < image.length; i++) {
  if (image[i].hasAttribute("alt")) {
    image[i].alt = "Old";
  } else {
    image[i].alt = "New Value";
  }
}
