let myPromise = new Promise((resolve, reject) => {
  let req = new XMLHttpRequest();
  req.open("get", "data.json");
  req.send();
  req.onload = function () {
    if (req.readyState == 4 && req.status == 200) {
      let data = JSON.parse(req.responseText);
      resolve(data);
    } else {
      reject("Failed to connect");
    }
  };
});

myPromise.then((result) => {
  for (let i = 0; i < result.length; i++) {
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let h2Content = document.createTextNode(result[i].title);
    h2.appendChild(h2Content);
    let p = document.createElement("p");
    let pContent = document.createTextNode(result[i].description);
    p.appendChild(pContent);
    div.appendChild(h2);
    div.appendChild(p);
    document.body.appendChild(div);
  }
});
